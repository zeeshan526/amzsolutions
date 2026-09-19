"use client";

import { useId, useState } from "react";

import ArrowIcon from "./ArrowIcon";
import { submitToWeb3Forms } from "../_lib/web3forms";

/* Footer newsletter sign-up. Posts to the same Web3Forms inbox as the quote form,
   tagged in the subject so sign-ups are easy to separate from enquiries. */

export default function NewsletterForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) {
      setState("sent");
      return;
    }

    const email = String(data.get("email") ?? "");
    setState("sending");
    setError(null);

    const result = await submitToWeb3Forms({
      subject: "Newsletter sign-up",
      from_name: "AMZ website",
      replyto: email,
      email,
      message: `Newsletter sign-up from the website footer: ${email}`,
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
      <p role="status" style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.6, color: "#FFFFFF", margin: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F99615" strokeWidth="2" aria-hidden="true" style={{ flex: "none", marginTop: 3 }}>
          <path d="M4 12.5l5 5L20 6.5" />
        </svg>
        You&rsquo;re on the list. We send a few notes a year, nothing else.
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,.28)", borderRadius: 999, padding: "6px 6px 6px 18px" }}>
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }} />
        <label htmlFor={id} style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
          Your email address
        </label>
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          style={{ flex: "1 1 auto", minWidth: 0, height: 40, background: "transparent", border: 0, color: "#FFFFFF", fontFamily: "var(--font-body)", fontSize: 15, outline: "none" }}
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={state === "sending"}
          style={{
            flex: "none",
            width: 40,
            height: 40,
            borderRadius: 999,
            background: "#FFFFFF",
            border: 0,
            cursor: state === "sending" ? "progress" : "pointer",
            opacity: state === "sending" ? 0.7 : 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowIcon color="#0A1017" />
        </button>
      </form>
      {error && (
        <p role="alert" style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.55, color: "#F0A9A4" }}>
          {error}
        </p>
      )}
    </>
  );
}
