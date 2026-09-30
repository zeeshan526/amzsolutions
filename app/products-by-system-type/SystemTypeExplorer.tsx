"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import ArrowIcon from "../_components/ArrowIcon";
import { SYSTEM_CATEGORIES } from "../_lib/systemTypes";

/* Chip rail + detail panel. Picking a category swaps the panel below rather than
   navigating anywhere, so a specifier can flick through all ten without losing their
   place — and a text filter narrows the manufacturer rows inside whichever category
   is open, for the case where they already know the brand they're looking for. */

export default function SystemTypeExplorer({ initialSlug }: { initialSlug?: string }) {
  const [activeSlug, setActiveSlug] = useState(
    initialSlug && SYSTEM_CATEGORIES.some((c) => c.slug === initialSlug) ? initialSlug : SYSTEM_CATEGORIES[0].slug
  );
  const [query, setQuery] = useState("");

  const active = SYSTEM_CATEGORIES.find((c) => c.slug === activeSlug) ?? SYSTEM_CATEGORIES[0];

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return active.lines;
    return active.lines.filter((l) => l.brand.toLowerCase().includes(q) || l.products.toLowerCase().includes(q));
  }, [active, query]);

  return (
    <div>
      {/* Chip rail */}
      <div role="tablist" aria-label="System type" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "clamp(28px,4vw,40px)" }}>
        {SYSTEM_CATEGORIES.map((c) => {
          const isActive = c.slug === activeSlug;
          return (
            <button
              key={c.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              id={c.slug}
              onClick={() => {
                setActiveSlug(c.slug);
                setQuery("");
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
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
                transition: "background-color 200ms ease, border-color 200ms ease, color 200ms ease",
              }}
            >
              {c.short}
              <span
                aria-hidden
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 22,
                  height: 20,
                  padding: "0 6px",
                  borderRadius: 999,
                  background: isActive ? "rgba(255,255,255,.22)" : "#F1F2F4",
                  color: isActive ? "#FFFFFF" : "#5A6068",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {c.lines.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div role="tabpanel" aria-labelledby={active.slug} style={{ background: "#F9FAFB", border: "1px solid #E3E5E8", borderRadius: 20, padding: "clamp(24px,3.4vw,40px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start", justifyContent: "space-between", marginBottom: 26 }}>
          <div style={{ maxWidth: "56ch" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .8vw,1.75rem)", lineHeight: 1.2, letterSpacing: "-.012em", margin: "0 0 10px" }}>
              {active.title}
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#444444", margin: 0 }}>{active.blurb}</p>
          </div>
          <label style={{ position: "relative", flex: "none", width: "min(100%,260px)" }}>
            <span className="sr-only">Filter manufacturers in {active.title}</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter this category…"
              style={{
                width: "100%",
                height: 44,
                padding: "0 16px",
                borderRadius: 999,
                border: "1px solid #C7CBD1",
                background: "#FFFFFF",
                fontFamily: "var(--font-body)",
                fontSize: 14.5,
                color: "#191C1F",
                outline: "none",
              }}
            />
          </label>
        </div>

        {rows.length === 0 ? (
          <p style={{ fontSize: 15, color: "#5A6068", margin: 0 }}>No manufacturer in {active.title.toLowerCase()} matches “{query}”.</p>
        ) : (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: 14 }}>
            {rows.map((line) => (
              <li key={line.brand} style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 14, padding: "18px 20px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, letterSpacing: "-.004em", margin: "0 0 6px", color: "#191C1F" }}>{line.brand}</p>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "#444444", margin: 0 }}>{line.products}</p>
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20, marginTop: 26, paddingTop: 22, borderTop: "1px solid #E3E5E8" }}>
          <Link href="/#contact" className="amz-link-arrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "#1462A7", textDecoration: "none" }}>
            Ask an engineer about {active.short.toLowerCase()}
            <ArrowIcon />
          </Link>
          <Link href="/manufacturers" className="amz-link-arrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "#1462A7", textDecoration: "none" }}>
            Browse by manufacturer instead
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
