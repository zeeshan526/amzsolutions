import Link from "next/link";

import ArrowIcon from "../_components/ArrowIcon";
import { MARKET_SEGMENTS } from "../_lib/markets";

export default function MarketExplorer() {
  return (
    <div className="amz-market-sections">
      {MARKET_SEGMENTS.map((market, index) => (
        <section key={market.slug} id={market.slug} aria-labelledby={`${market.slug}-heading`} className={`amz-market-section${index % 2 ? " amz-market-section-reverse" : ""}`}>
      <div style={{ background: "#F9FAFB", border: "1px solid #E3E5E8", borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: market.img ? "minmax(0,1fr) minmax(0,1.15fr)" : "minmax(0,1fr)" }} className="amz-market-panel">
        {market.img && (
          <div style={{ position: "relative", minHeight: 240 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={market.img} alt={market.imgAlt ?? ""} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}
        <div style={{ padding: "clamp(26px,3.4vw,42px)" }}>
          <p className="amz-insight-eyebrow">Market 0{index + 1}</p>
          <h2 id={`${market.slug}-heading`} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .8vw,1.75rem)", lineHeight: 1.2, letterSpacing: "-.012em", margin: "0 0 14px" }}>
            {market.title}
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#444444", margin: "0 0 22px" }}>{market.summary}</p>
          <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 14px" }}>
            What we design around
          </p>
          <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {market.considerations.map((c) => (
              <li key={c} style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.6, color: "#191C1F" }}>
                <span aria-hidden style={{ flex: "none", width: 7, height: 7, marginTop: 7, borderRadius: 999, background: "#F99615" }} />
                {c}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, paddingTop: 20, borderTop: "1px solid #E3E5E8" }}>
            <Link
              href={`/products-by-system-type?category=${market.relatedCategorySlug}`}
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
        </section>
      ))}
    </div>
  );
}
