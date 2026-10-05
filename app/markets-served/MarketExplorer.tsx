"use client";

import Link from "next/link";
import { useState } from "react";

import ArrowIcon from "../_components/ArrowIcon";
import { MARKET_SEGMENTS } from "../_lib/markets";

export default function MarketExplorer({ initialSlug }: { initialSlug?: string }) {
  const [activeSlug, setActiveSlug] = useState(
    initialSlug && MARKET_SEGMENTS.some((m) => m.slug === initialSlug) ? initialSlug : MARKET_SEGMENTS[0].slug
  );
  const active = MARKET_SEGMENTS.find((m) => m.slug === activeSlug) ?? MARKET_SEGMENTS[0];

  return (
    <div>
      <div role="tablist" aria-label="Market segment" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "clamp(28px,4vw,40px)" }}>
        {MARKET_SEGMENTS.map((m) => {
          const isActive = m.slug === activeSlug;
          return (
            <button
              key={m.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              id={m.slug}
              onClick={() => setActiveSlug(m.slug)}
              style={{
                height: 44,
                padding: "0 18px",
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
              {m.short}
            </button>
          );
        })}
      </div>

      <div style={{ background: "#F9FAFB", border: "1px solid #E3E5E8", borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: active.img ? "minmax(0,1fr) minmax(0,1.15fr)" : "minmax(0,1fr)" }} className="amz-market-panel">
        {active.img && (
          <div style={{ position: "relative", minHeight: 240 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.img} alt={active.imgAlt ?? ""} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}
        <div style={{ padding: "clamp(26px,3.4vw,42px)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .8vw,1.75rem)", lineHeight: 1.2, letterSpacing: "-.012em", margin: "0 0 14px" }}>
            {active.title}
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#444444", margin: "0 0 22px" }}>{active.summary}</p>
          <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 14px" }}>
            What we design around
          </p>
          <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {active.considerations.map((c) => (
              <li key={c} style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.6, color: "#191C1F" }}>
                <span aria-hidden style={{ flex: "none", width: 7, height: 7, marginTop: 7, borderRadius: 999, background: "#F99615" }} />
                {c}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, paddingTop: 20, borderTop: "1px solid #E3E5E8" }}>
            <Link
              href={`/products-by-system-type?category=${active.relatedCategorySlug}`}
              className="amz-link-arrow"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", textDecoration: "none" }}
            >
              See the equipment we specify here
              <ArrowIcon />
            </Link>
            <Link
              href="/#contact"
              className="amz-link-arrow"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", textDecoration: "none" }}
            >
              Talk to an engineer about this building type
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
