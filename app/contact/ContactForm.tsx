"use client";

import { useId, useRef, useState } from "react";

import { AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "../_lib/contact";
import { submitFormDataToWeb3Forms } from "../_lib/web3forms";

/* Fuller than the homepage's QuoteForm — this mirrors the live site's own contact form
   (first/last name, subject, an optional file attachment) rather than the quote-request
   shape, since this page is the general "get in touch" destination, not the quote CTA. */

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: 13,
  color: "#191C1F",
  marginBottom: 8,
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  height: 50,
  padding: "0 14px",
  border: "1px solid #C7CBD1",
  borderRadius: 8,
  color: "#191C1F",
  fontFamily: "var(--font-body)",
  fontSize: 15.5,
  outline: "none",
  background: "#FFFFFF",
};

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const id = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) {
      setState("sent");
      return;
    }

    const firstName = String(data.get("first_name") ?? "");
    const lastName = String(data.get("last_name") ?? "");
    data.set("subject", `Contact form: ${String(data.get("subject") ?? "General enquiry")} — from ${firstName} ${lastName}`.trim());
    data.set("from_name", "AMZ website contact form");
    data.set("replyto", String(data.get("email") ?? ""));

    setState("sending");
    setError(null);

    const result = await submitFormDataToWeb3Forms(data);

    if (result.ok) {
      setState("sent");
      form.reset();
      setFileName(null);
    } else {
      setState("idle");
      setError(result.error);
    }
  };

  if (state === "sent") {
    return (
      <div role="status" style={{ background: "#F9FAFB", border: "1px solid #E3E5E8", borderRadius: 16, padding: "clamp(28px,4vw,40px)" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1462A7" strokeWidth="2" aria-hidden="true" style={{ marginBottom: 16 }}>
          <path d="M4 12.5l5 5L20 6.5" />
        </svg>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem,1.1rem + .6vw,1.5rem)", color: "#191C1F", margin: "0 0 12px" }}>Message received</h3>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444444", margin: "0 0 20px" }}>
          Thanks — we reply to every message within one business day. If it&rsquo;s urgent, call us and ask for the on-call engineer.
        </p>
        <a href={AMZ_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "#1462A7", textDecoration: "none", fontVariantNumeric: "tabular-nums" }}>
          {AMZ_PHONE_DISPLAY}
        </a>
        <p style={{ margin: "24px 0 0" }}>
          <button type="button" onClick={() => setState("idle")} style={{ background: "none", border: 0, padding: 0, color: "#5A6068", fontFamily: "var(--font-body)", fontSize: 15, textDecoration: "underline", cursor: "pointer" }}>
            Send another message
          </button>
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 18, marginBottom: 18 }}>
        <div>
          <label htmlFor={`${id}-first`} style={labelStyle}>First name *</label>
          <input id={`${id}-first`} name="first_name" type="text" required autoComplete="given-name" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor={`${id}-last`} style={labelStyle}>Last name *</label>
          <input id={`${id}-last`} name="last_name" type="text" required autoComplete="family-name" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} style={labelStyle}>Email *</label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} style={labelStyle}>Phone</label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" style={fieldStyle} />
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <label htmlFor={`${id}-subject`} style={labelStyle}>Subject</label>
        <input id={`${id}-subject`} name="subject" type="text" placeholder="What's this about?" style={fieldStyle} />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label htmlFor={`${id}-message`} style={labelStyle}>Message *</label>
        <textarea id={`${id}-message`} name="message" required rows={5} style={{ ...fieldStyle, height: "auto", padding: "12px 14px", lineHeight: 1.6, resize: "vertical" }} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label htmlFor={`${id}-file`} style={labelStyle}>
          Attachment <span style={{ fontWeight: 400, color: "#5A6068" }}>(optional — drawings, photos, up to 10MB)</span>
        </label>
        <input
          id={`${id}-file`}
          name="attachment"
          type="file"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          style={{ ...fieldStyle, height: "auto", padding: "10px 14px" }}
        />
        {fileName && <p style={{ fontSize: 13, color: "#5A6068", margin: "6px 0 0" }}>Attached: {fileName}</p>}
      </div>

      {error && (
        <p role="alert" style={{ margin: "18px 0 0", padding: "12px 14px", background: "#FBE9E7", border: "1px solid #F0A9A4", color: "#7A241C", fontSize: 15, lineHeight: 1.6, borderRadius: 8 }}>
          {error}
        </p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 24 }}>
        <button
          type="submit"
          disabled={state === "sending"}
          className="amz-btn-accent"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            height: 54,
            padding: "0 32px",
            borderRadius: 999,
            border: 0,
            background: "#F99615",
            color: "#191C1F",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 16,
            cursor: state === "sending" ? "progress" : "pointer",
            opacity: state === "sending" ? 0.72 : 1,
          }}
        >
          {state === "sending" ? "Sending…" : "Send message"}
          {state !== "sending" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" aria-hidden="true">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          )}
        </button>
        <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "#5A6068", margin: 0, maxWidth: "36ch" }}>
          We reply within one business day. Details are handled as described in our Privacy Policy.
        </p>
      </div>
    </form>
  );
}
