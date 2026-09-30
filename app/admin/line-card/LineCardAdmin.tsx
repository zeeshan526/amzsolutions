"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";

type Status = { exists: boolean; url?: string; size?: number; uploadedAt?: string };

const formatBytes = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });

const fieldStyle: React.CSSProperties = {
  width: "100%",
  height: 48,
  padding: "0 14px",
  borderRadius: 8,
  border: "1px solid #C7CBD1",
  fontFamily: "var(--font-body)",
  fontSize: 15.5,
  color: "#191C1F",
  outline: "none",
};

export default function LineCardAdmin() {
  const id = useId();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [password, setPassword] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState(false);

  const unlock = async (event: React.FormEvent) => {
    event.preventDefault();
    setUnlocking(true);
    setUnlockError(null);
    try {
      const res = await fetch("/api/line-card", { headers: { "x-line-card-password": password } });
      const data = await res.json();
      if (!res.ok) {
        setUnlockError(data.error ?? "Incorrect password.");
        return;
      }
      setStatus(data);
    } catch {
      setUnlockError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setUnlocking(false);
    }
  };

  const upload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    setUploaded(false);
    try {
      const form = new FormData();
      form.set("password", password);
      form.set("file", file);
      const res = await fetch("/api/line-card", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setUploadError(data.error ?? "Upload failed.");
        return;
      }
      setStatus(data);
      setUploaded(true);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setUploadError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setUploading(false);
    }
  };

  const unlocked = status !== null;

  return (
    <div style={{ minHeight: "100dvh", background: "#F1F2F4", display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(32px,6vw,72px) 20px" }}>
      <div style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo/amz-logo.png" alt="AMZ Energy Systems" width={471} height={574} style={{ display: "block", height: 34, width: "auto" }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#191C1F" }}>Line Card Uploader</span>
          </span>
          <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", textDecoration: "none" }}>
            ← Back to site
          </Link>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "clamp(24px,4vw,36px)" }}>
          {!unlocked ? (
            <form onSubmit={unlock}>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#444444", margin: "0 0 20px" }}>
                Enter the shared upload password to check the current file and replace it.
              </p>
              <label htmlFor={`${id}-pw`} style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "#191C1F", marginBottom: 8 }}>
                Password
              </label>
              <input
                id={`${id}-pw`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                style={fieldStyle}
              />
              {unlockError && (
                <p role="alert" style={{ marginTop: 12, fontSize: 14, color: "#B3261E" }}>
                  {unlockError}
                </p>
              )}
              <button
                type="submit"
                disabled={unlocking || !password}
                style={{
                  marginTop: 20,
                  width: "100%",
                  height: 48,
                  border: 0,
                  borderRadius: 999,
                  background: "#1462A7",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 15.5,
                  cursor: unlocking || !password ? "not-allowed" : "pointer",
                  opacity: unlocking || !password ? 0.6 : 1,
                }}
              >
                {unlocking ? "Checking…" : "Unlock"}
              </button>
            </form>
          ) : (
            <div>
              <div style={{ padding: "14px 16px", borderRadius: 10, background: "#F9FAFB", border: "1px solid #E3E5E8", marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 8px" }}>
                  Current file
                </p>
                {status.exists && status.url && status.uploadedAt && status.size !== undefined ? (
                  <>
                    <p style={{ fontSize: 14.5, color: "#191C1F", margin: "0 0 4px" }}>
                      Uploaded {formatDate(status.uploadedAt)} · {formatBytes(status.size)}
                    </p>
                    <a href={status.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#1462A7" }}>
                      View current PDF ↗
                    </a>
                  </>
                ) : (
                  <p style={{ fontSize: 14.5, color: "#5A6068", margin: 0 }}>
                    Nothing uploaded yet — the site is showing the default PDF that shipped with it.
                  </p>
                )}
              </div>

              <form onSubmit={upload}>
                <label htmlFor={`${id}-file`} style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "#191C1F", marginBottom: 8 }}>
                  New line card (PDF, up to 20MB)
                </label>
                <input
                  ref={fileInputRef}
                  id={`${id}-file`}
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={(e) => {
                    setFile(e.target.files?.[0] ?? null);
                    setUploaded(false);
                    setUploadError(null);
                  }}
                  style={{ ...fieldStyle, height: "auto", padding: "10px 14px" }}
                />
                {uploadError && (
                  <p role="alert" style={{ marginTop: 12, fontSize: 14, color: "#B3261E" }}>
                    {uploadError}
                  </p>
                )}
                {uploaded && (
                  <p role="status" style={{ marginTop: 12, fontSize: 14, color: "#1B7A3D" }}>
                    Uploaded. The site&rsquo;s Line Card link now serves this file — no redeploy needed.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={uploading || !file}
                  style={{
                    marginTop: 20,
                    width: "100%",
                    height: 48,
                    border: 0,
                    borderRadius: 999,
                    background: "#F99615",
                    color: "#191C1F",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    cursor: uploading || !file ? "not-allowed" : "pointer",
                    opacity: uploading || !file ? 0.6 : 1,
                  }}
                >
                  {uploading ? "Uploading…" : "Upload new version"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
