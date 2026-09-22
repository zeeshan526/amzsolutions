"use client";

import { useId, useRef, useState } from "react";

import { AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "../_lib/contact";
import { submitToWeb3Forms } from "../_lib/web3forms";

const BUILDING_TYPES = ["High-rise office", "Hospital / healthcare", "Data centre", "School / campus", "Multifamily", "Industrial", "Other"];

/* The form sits on the navy CTA band, so every control is drawn light-on-dark. The panel
   below gives the fields something to sit on — against the bare band a translucent field
   reads as an empty outline rather than something you can type in. */
const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,.055)",
  border: "1px solid rgba(255,255,255,.16)",
  borderRadius: 20,
  padding: "clamp(22px,2.6vw,34px)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,.10), 0 18px 40px rgba(6,28,48,.22)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontStretch: "75%",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,.80)",
  marginBottom: 9,
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  height: 52,
  padding: "0 16px",
  // background and border live in .amz-field: an inline value here would beat the
  // stylesheet, and the hover, focus and invalid states would never show.
  borderRadius: 10,
  color: "#FFFFFF",
  fontFamily: "var(--font-body)",
  // 16px floor: anything smaller makes iOS Safari zoom the page in on focus.
  fontSize: 16,
  outline: "none",
};

function Required() {
  return (
    <span aria-hidden="true" style={{ color: "#F9A93A", marginLeft: 4 }}>
      *
    </span>
  );
}

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: a real person never sees this field, so anything in it is a bot.
    // Report success so the bot doesn't learn it was caught.
    if (data.get("botcheck")) {
      setState("sent");
      return;
    }

    setState("sending");
    setError(null);

    const name = String(data.get("name") ?? "");
    const result = await submitToWeb3Forms({
      subject: `Quote request from ${name || "the AMZ website"}`,
      from_name: "AMZ website",
      replyto: String(data.get("email") ?? ""),
      name,
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      building_type: String(data.get("building_type") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    if (result.ok) {
      setState("sent");
      form.reset();
    } else {
      setState("idle");
      setError(result.error);
    }
  };

  if (state === "sent") {
    return (
      <div role="status" style={{ ...cardStyle, textAlign: "left" }}>
        <span
          aria-hidden="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 54,
            height: 54,
            borderRadius: 999,
            background: "rgba(249,150,21,.16)",
            border: "1px solid rgba(249,150,21,.44)",
            marginBottom: 18,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F99615" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12.5l5 5L20 6.5" />
          </svg>
        </span>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem,1.1rem + .6vw,1.5rem)", color: "#FFFFFF", margin: "0 0 12px" }}>Request received</h3>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.86)", margin: "0 0 22px" }}>
          Thanks — we reply to every request within one business day. If the building needs attention sooner, call us and ask for the on-call engineer.
        </p>
        <a
          href={AMZ_PHONE_HREF}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            height: 52,
            padding: "0 22px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.34)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 19,
            color: "#FFFFFF",
            textDecoration: "none",
            fontVariantNumeric: "tabular-nums",
          }}
          className="amz-btn-outline-light"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F99615" strokeWidth="2" aria-hidden="true">
            <path d="M4 3h5l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v5h-2A15 15 0 0 1 4 5z" />
          </svg>
          {AMZ_PHONE_DISPLAY}
        </a>
        <p style={{ margin: "24px 0 0" }}>
          <button
            type="button"
            onClick={() => setState("idle")}
            style={{ background: "none", border: 0, padding: 0, color: "rgba(255,255,255,.76)", fontFamily: "var(--font-body)", fontSize: 15, textDecoration: "underline", cursor: "pointer" }}
          >
            Send another request
          </button>
        </p>
      </div>
    );
  }

  const sending = state === "sending";

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ ...cardStyle, textAlign: "left" }}>
      {/* Honeypot — hidden from people, tempting to bots. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }} />

      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontFamily: "var(--font-display)",
          fontStretch: "75%",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.56)",
          margin: "0 0 20px",
        }}
      >
        <span aria-hidden style={{ width: 18, height: 1, background: "#F99615", flex: "none" }} />
        Required fields are marked <span aria-hidden style={{ color: "#F9A93A" }}>*</span>
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: 20 }}>
        <div>
          <label htmlFor={`${id}-name`} style={labelStyle}>
            Name
            <Required />
          </label>
          <input id={`${id}-name`} name="name" type="text" required autoComplete="name" className="amz-field" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor={`${id}-company`} style={labelStyle}>
            Company
          </label>
          <input id={`${id}-company`} name="company" type="text" autoComplete="organization" className="amz-field" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} style={labelStyle}>
            Email
            <Required />
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" inputMode="email" className="amz-field" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} style={labelStyle}>
            Phone
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" className="amz-field" style={fieldStyle} />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <label htmlFor={`${id}-building`} style={labelStyle}>
          Building type
        </label>
        <select id={`${id}-building`} name="building_type" defaultValue="" className="amz-field amz-select" style={{ ...fieldStyle, appearance: "none", paddingRight: 44, cursor: "pointer" }}>
          <option value="" style={{ color: "#191C1F" }}>
            Select a building type
          </option>
          {BUILDING_TYPES.map((type) => (
            <option key={type} value={type} style={{ color: "#191C1F" }}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <label htmlFor={`${id}-message`} style={labelStyle}>
          What is the building doing?
          <Required />
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          placeholder="Tell us the symptom, the system and roughly when it started."
          className="amz-field"
          style={{ ...fieldStyle, height: "auto", minHeight: 132, padding: "14px 16px", lineHeight: 1.6, resize: "vertical" }}
        />
      </div>

      {error && (
        <p
          role="alert"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            margin: "20px 0 0",
            padding: "14px 16px",
            background: "rgba(240,169,164,.16)",
            border: "1px solid rgba(240,169,164,.5)",
            borderRadius: 10,
            color: "#FFE9E7",
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0A9A4" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: "none", marginTop: 2 }}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5v5M12 16.2v.2" />
          </svg>
          {error}
        </p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18, marginTop: 26, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.14)" }}>
        <button
          type="submit"
          disabled={sending}
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
            cursor: sending ? "progress" : "pointer",
            opacity: sending ? 0.72 : 1,
          }}
        >
          {sending ? "Sending…" : "Request a quote"}
          {sending ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="amz-spin">
              <circle cx="12" cy="12" r="9" stroke="rgba(25,28,31,.3)" strokeWidth="2.5" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="#191C1F" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" aria-hidden="true">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          )}
        </button>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,.70)", margin: 0, flex: "1 1 220px", minWidth: 0 }}>
          We reply within one business day. Details are handled as described in our Privacy Policy.
        </p>
      </div>
    </form>
  );
}
