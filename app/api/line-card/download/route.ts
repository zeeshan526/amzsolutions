import { head } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

import { LINE_CARD_BLOB_PATHNAME, LINE_CARD_FALLBACK_PATH } from "../../../_lib/lineCard";

/* The permanent, public "Our Line Card" link used across the site. It never points at
   Blob storage directly, so the underlying URL can change (a new upload, a different
   store) without ever touching a link in the markup. Before the first upload — or if
   Blob storage isn't reachable — it falls back to the PDF bundled in /public so the
   button is never broken. No password required: the file itself is public. */

export async function GET(request: NextRequest) {
  try {
    const info = await head(LINE_CARD_BLOB_PATHNAME);
    return NextResponse.redirect(info.url, { status: 307 });
  } catch {
    return NextResponse.redirect(new URL(LINE_CARD_FALLBACK_PATH, request.url), { status: 307 });
  }
}
