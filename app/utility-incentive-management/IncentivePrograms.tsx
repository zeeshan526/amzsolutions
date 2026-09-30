"use client";

import { useState } from "react";

type Program = {
  id: string;
  state: string;
  name: string;
  summary: string;
  covers: string[];
  process: string[];
  note: string;
};

const PROGRAMS: Program[] = [
  {
    id: "peco",
    state: "Pennsylvania",
    name: "PECO Incentive Program",
    summary: "Rebates, grants and discounts on energy-efficient upgrades, administered through Philadelphia Electric Company's territory.",
    covers: ["Lighting upgrades", "HVAC equipment", "Insulation improvements", "Smart thermostats"],
    process: ["Free energy audit and assessment", "Equipment scope matched to eligible measures", "Application filed alongside the mechanical proposal", "Rebate processed after install and inspection"],
    note: "Covers most of our Eastern Pennsylvania install base.",
  },
  {
    id: "nj-direct-install",
    state: "New Jersey",
    name: "New Jersey Direct Install Program",
    summary: "A turnkey program for small and medium-sized businesses — up to 70% of the cost of eligible upgrades covered.",
    covers: ["Lighting", "HVAC systems", "Refrigeration"],
    process: ["Free energy assessment", "Turnkey scope and pricing at the discounted rate", "Full project management through the utility's contractor network", "Installed and commissioned under the program's requirements"],
    note: "Best fit for South Jersey facilities under the program's size threshold.",
  },
  {
    id: "de-other",
    state: "Delaware & other territories",
    name: "Utility, state & federal programs",
    summary: "Where there isn't a named program like PECO or Direct Install, we still check what's available and manage the filing.",
    covers: ["Utility-specific commercial rebates", "State energy-office programs", "Federal tax incentives where equipment qualifies"],
    process: ["Identify which programs apply to the utility account", "Estimate the incentive value against the proposed scope", "File and track the application to approval", "Hand over the paperwork trail with the closeout package"],
    note: "We tell you up front if nothing applies rather than promising a rebate that isn't there.",
  },
];

const STATE_TO_PROGRAM: Record<string, string> = {
  Pennsylvania: "peco",
  "New Jersey": "nj-direct-install",
  Delaware: "de-other",
  "Not sure": "peco",
};

export default function IncentivePrograms() {
  const [activeId, setActiveId] = useState(PROGRAMS[0].id);
  const active = PROGRAMS.find((p) => p.id === activeId) ?? PROGRAMS[0];

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginBottom: 28 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", whiteSpace: "nowrap" }}>
            Where is the building?
          </span>
          <select
            defaultValue=""
            onChange={(e) => {
              const program = STATE_TO_PROGRAM[e.target.value];
              if (program) setActiveId(program);
            }}
            style={{
              height: 42,
              padding: "0 14px",
              borderRadius: 999,
              border: "1px solid #C7CBD1",
              background: "#FFFFFF",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 14,
              color: "#191C1F",
            }}
          >
            <option value="" disabled>
              Choose a state…
            </option>
            {Object.keys(STATE_TO_PROGRAM).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div role="tablist" aria-label="Utility incentive program" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
        {PROGRAMS.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(p.id)}
              style={{
                height: 46,
                padding: "0 20px",
                borderRadius: 999,
                border: isActive ? "1.5px solid #1462A7" : "1px solid #E3E5E8",
                background: isActive ? "#1462A7" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#191C1F",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 14.5,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {p.state}
            </button>
          );
        })}
      </div>

      <div style={{ background: "#F9FAFB", border: "1px solid #E3E5E8", borderRadius: 20, padding: "clamp(26px,3.4vw,42px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(24px,3vw,40px)" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem,1.1rem + .7vw,1.5rem)", lineHeight: 1.25, letterSpacing: "-.01em", margin: "0 0 10px" }}>{active.name}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#444444", margin: "0 0 20px" }}>{active.summary}</p>
          <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 12px" }}>What it covers</p>
          <ul style={{ listStyle: "none", margin: "0 0 20px", padding: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {active.covers.map((c) => (
              <li
                key={c}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 32,
                  padding: "0 14px",
                  borderRadius: 999,
                  background: "#EEF5FC",
                  color: "#1462A7",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                {c}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#5A6068", margin: 0, fontStyle: "italic" }}>{active.note}</p>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 14px" }}>How we run it</p>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {active.process.map((step, i) => (
              <li key={step} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 26,
                    height: 26,
                    borderRadius: 999,
                    background: "#1462A7",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "#191C1F", paddingTop: 3 }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
