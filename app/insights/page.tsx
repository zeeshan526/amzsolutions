import type { Metadata } from "next";
import Link from "next/link";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { INSIGHT_ARTICLES } from "../_lib/insights";

export const metadata: Metadata = {
  title: "Insights — AMZ Energy Systems",
  description:
    "Decarbonization, Philadelphia's carbon-neutral policy, PECO incentive stacking and multifamily retrofit strategy — explained for the engineers and owners who have to act on it.",
};

export default function InsightsPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Insights"
          title="Decarbonization and incentive policy, explained plainly"
          intro="Not a blog — a small, maintained set of explainers on the policy and incentive landscape that actually affects a mechanical project in this region, for the engineers and owners who have to act on it."
          stats={[{ label: "Articles", value: String(INSIGHT_ARTICLES.length) }]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {INSIGHT_ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="amz-step-card"
                    style={{ display: "block", background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "clamp(22px,3vw,32px)", textDecoration: "none", color: "inherit" }}
                  >
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "#5A6068", margin: "0 0 10px" }}>{a.readTime}</p>
                    <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.1875rem,1.1rem + .5vw,1.4375rem)", lineHeight: 1.3, letterSpacing: "-.008em", margin: "0 0 10px", color: "#191C1F" }}>
                      {a.title}
                    </h2>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "#444444", margin: 0 }}>{a.dek}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
