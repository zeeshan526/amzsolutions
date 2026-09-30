import { timingSafeEqual } from "node:crypto";

import { BlobNotFoundError, head, put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

import { LINE_CARD_BLOB_PATHNAME, LINE_CARD_MAX_BYTES } from "../../_lib/lineCard";

/* Status (GET) and upload (POST) for the line card, gated by one shared password (see
   LINE_CARD_ADMIN_PASSWORD in .env.example) rather than named accounts — this is a
   single internal PDF a couple of people replace a few times a year, not a feature that
   needs a user table. The public download redirect lives in ./download/route.ts and
   needs no password, since the file itself is meant to be public. */

function passwordMatches(submitted: string): boolean {
  const expected = process.env.LINE_CARD_ADMIN_PASSWORD ?? "";
  if (!expected) return false;
  const a = Buffer.from(submitted);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function GET(request: NextRequest) {
  const password = request.headers.get("x-line-card-password") ?? "";
  if (!passwordMatches(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  try {
    const info = await head(LINE_CARD_BLOB_PATHNAME);
    return NextResponse.json({ exists: true, url: info.url, size: info.size, uploadedAt: info.uploadedAt });
  } catch (err) {
    if (err instanceof BlobNotFoundError) {
      return NextResponse.json({ exists: false });
    }
    return NextResponse.json(
      { error: "Couldn't reach file storage. Make sure a Blob store is connected to this project." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  if (!passwordMatches(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file was uploaded." }, { status: 400 });
  }
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Please upload a PDF file." }, { status: 400 });
  }
  if (file.size > LINE_CARD_MAX_BYTES) {
    return NextResponse.json({ error: "That file is larger than 20MB." }, { status: 400 });
  }

  try {
    const blob = await put(LINE_CARD_BLOB_PATHNAME, file, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/pdf",
    });
    return NextResponse.json({ exists: true, url: blob.url, size: file.size, uploadedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json(
      { error: "Upload failed. Make sure a Blob store is connected to this project (see .env.example)." },
      { status: 500 }
    );
  }
}
