"use client";

import { useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Team collaboration",
    text: "Our project engineer, your GC, the trades and the manufacturer rep are in the same conversation from kickoff — not introduced to each other at the first RFI.",
  },
  {
    n: "02",
    title: "Clear project objectives",
    text: "Deliverables, milestones and who owns what are written down before mobilisation, so a schedule slip has an obvious owner instead of an argument.",
  },
  {
    n: "03",
    title: "Flexible problem-solving",
    text: "A blocked riser or a structural surprise gets a revised plan the same week, not a change-order fight that stalls the floor above it.",
  },
  {
    n: "04",
    title: "Quality assurance",
    text: "Every connection is inspected against the submittal before it's closed up, and start-up readings are documented, not eyeballed.",
  },
] as const;

/* A click-driven stepper rather than a static list — the four process pillars from the
   live site's install-services copy, expandable one at a time so the page can carry
   the fuller explanation without a wall of text up front. */

export default function InstallationProcessStepper() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)", gap: "clamp(16px,2.4vw,32px)" }} className="amz-install-stepper">
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {STEPS.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.n}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: 0,
                  borderLeft: isActive ? "3px solid #F99615" : "3px solid transparent",
                  background: isActive ? "#0F1418" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 200ms ease, border-color 200ms ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12.5,
                    letterSpacing: ".04em",
                    color: isActive ? "#F99615" : "rgba(255,255,255,.44)",
                    flex: "none",
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 15,
                    lineHeight: 1.3,
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,.68)",
                  }}
                >
                  {s.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, padding: "clamp(28px,3.6vw,44px)", display: "flex", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: ".04em", color: "#F99615", margin: "0 0 12px" }}>{STEPS[active].n} / 04</p>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem,1.1rem + .6vw,1.5rem)", lineHeight: 1.3, color: "#FFFFFF", margin: "0 0 14px" }}>
            {STEPS[active].title}
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.78)", margin: 0, maxWidth: "52ch" }}>{STEPS[active].text}</p>
        </div>
      </div>
    </div>
  );
}
