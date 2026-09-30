"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { MANUFACTURER_CATEGORIES, MANUFACTURERS } from "../_lib/manufacturers";

const monogram = (name: string) =>
  name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

/* Search box + category chips over a card grid. With 36 manufacturers and only eight
   logo marks on hand, the rest fall back to a monogram badge rather than a broken
   <img> — same brand-forward layout either way. */

export default function ManufacturerDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MANUFACTURERS.filter((m) => {
      if (category && m.category !== category) return false;
      if (!q) return true;
      return m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q);
    });
  }, [query, category]);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
        <label style={{ position: "relative", flex: "1 1 260px", maxWidth: 360 }}>
          <span className="sr-only">Search manufacturers</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by manufacturer or category…"
            style={{
              width: "100%",
              height: 46,
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
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#5A6068", margin: 0, whiteSpace: "nowrap" }}>
          {results.length} of {MANUFACTURERS.length} manufacturers
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 30 }}>
        <button
          type="button"
          onClick={() => setCategory(null)}
          style={{
            height: 36,
            padding: "0 14px",
            borderRadius: 999,
            border: category === null ? "1.5px solid #1462A7" : "1px solid #E3E5E8",
            background: category === null ? "#1462A7" : "#FFFFFF",
            color: category === null ? "#FFFFFF" : "#444444",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 13,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          All categories
        </button>
        {MANUFACTURER_CATEGORIES.map((c) => {
          const isActive = category === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(isActive ? null : c)}
              style={{
                height: 36,
                padding: "0 14px",
                borderRadius: 999,
                border: isActive ? "1.5px solid #1462A7" : "1px solid #E3E5E8",
                background: isActive ? "#1462A7" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#444444",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      {results.length === 0 ? (
        <p style={{ fontSize: 15, color: "#5A6068" }}>No manufacturer matches “{query}”.</p>
      ) : (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,240px),1fr))", gap: 16 }}>
          {results.map((m) => (
            <li key={m.name} className="amz-partner-card" style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: 22 }}>
              <div style={{ height: 44, display: "flex", alignItems: "center", marginBottom: 16 }}>
                {m.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.logo} alt={m.name} style={{ maxHeight: 34, maxWidth: 150, width: "auto", height: "auto" }} />
                ) : (
                  <span
                    aria-hidden
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "#EEF5FC",
                      color: "#1462A7",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 15,
                    }}
                  >
                    {monogram(m.name)}
                  </span>
                )}
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16.5, letterSpacing: "-.006em", margin: "0 0 8px", color: "#191C1F" }}>{m.name}</p>
              <p
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-display)",
                  fontStretch: "75%",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#5A6068",
                  margin: "0 0 16px",
                }}
              >
                {m.category}
              </p>
              {m.categorySlug ? (
                <Link
                  href={`/products-by-system-type?category=${m.categorySlug}`}
                  className="amz-link-arrow"
                  style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, color: "#1462A7", textDecoration: "none" }}
                >
                  View product range →
                </Link>
              ) : (
                <span style={{ marginTop: "auto", fontSize: 13.5, color: "#9CA2AB" }}>Ask an engineer for specifics</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
