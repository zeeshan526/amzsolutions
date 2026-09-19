"use client";

import { useId, useRef, useState } from "react";

import { AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "../_lib/contact";
import { submitToWeb3Forms } from "../_lib/web3forms";

const BUILDING_TYPES = ["High-rise office", "Hospital / healthcare", "Data centre", "School / campus", "Multifamily", "Industrial", "Other"];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontStretch: "75%",
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,.66)",
  marginBottom: 8,
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  height: 48,
  padding: "0 14px",
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.28)",
  borderRadius: 2,
  color: "#FFFFFF",
  fontFamily: "var(--font-body)",
  fontSize: 15.5,
  outline: "none",
};

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
      <div
        role="status"
        style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.28)", padding: "clamp(28px,4vw,40px)", textAlign: "left" }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#F99615" strokeWidth="2" aria-hidden="true" style={{ marginBottom: 16 }}>
          <path d="M4 12.5l5 5L20 6.5" />
        </svg>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem,1.1rem + .6vw,1.5rem)", color: "#FFFFFF", margin: "0 0 12px" }}>Request received</h3>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.86)", margin: "0 0 20px" }}>
          Thanks — we reply to every request within one business day. If the building needs attention sooner, call us and ask for the on-call engineer.
        </p>
        <a
          href={AMZ_PHONE_HREF}
          style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "#FFFFFF", textDecoration: "none", fontVariantNumeric: "tabular-nums" }}
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
            style={{ background: "none", border: 0, padding: 0, color: "rgba(255,255,255,.72)", fontFamily: "var(--font-body)", fontSize: 15, textDecoration: "underline", cursor: "pointer" }}
          >
            Send another request
          </button>
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate={false} style={{ textAlign: "left" }}>
      {/* Honeypot — hidden from people, tempting to bots. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 18 }}>
        <div>
          <label htmlFor={`${id}-name`} style={labelStyle}>
            Name *
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
            Email *
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className="amz-field" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} style={labelStyle}>
            Phone
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className="amz-field" style={fieldStyle} />
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <label htmlFor={`${id}-building`} style={labelStyle}>
          Building type
        </label>
        <select id={`${id}-building`} name="building_type" defaultValue="" className="amz-field" style={{ ...fieldStyle, appearance: "none" }}>
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

      <div style={{ marginTop: 18 }}>
        <label htmlFor={`${id}-message`} style={labelStyle}>
          What is the building doing? *
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={4}
          placeholder="Tell us the symptom, the system and roughly when it started."
          className="amz-field"
          style={{ ...fieldStyle, height: "auto", padding: "12px 14px", lineHeight: 1.6, resize: "vertical" }}
        />
      </div>

      {error && (
        <p role="alert" style={{ margin: "18px 0 0", padding: "12px 14px", background: "rgba(240,169,164,.16)", border: "1px solid rgba(240,169,164,.5)", color: "#FFE9E7", fontSize: 15, lineHeight: 1.6 }}>
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
          {state === "sending" ? "Sending…" : "Request a quote"}
          {state !== "sending" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" aria-hidden="true">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          )}
        </button>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,.66)", margin: 0, maxWidth: "34ch" }}>
          We reply within one business day. Details are handled as described in our Privacy Policy.
        </p>
      </div>
    </form>
  );
}
