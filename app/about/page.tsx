import type { Metadata } from "next";
import Link from "next/link";

import ArrowIcon from "../_components/ArrowIcon";
import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "About Us — AMZ Energy Systems",
  description:
    "A locally-owned Philadelphia-area mechanical contractor bringing decades of HVAC expertise to high-efficiency systems, low-carbon heating and healthy buildings across Eastern Pennsylvania, South Jersey and Delaware.",
};

const PILLARS = [
  {
    title: "High-efficiency mechanical systems",
    text: "Chillers, air handling and heat rejection selected against the measured load, not a rule of thumb — so the efficiency gain is real and holds up at part load.",
  },
  {
    title: "Low-carbon heating solutions",
    text: "Heat pump and electrified heating options specified alongside conventional plant, so an owner can see the real trade-off before committing to a gas-free path.",
  },
  {
    title: "Healthy, sustainable systems",
    text: "Filtration, ventilation rate and humidity control treated as ESG and occupant-health line items, not an afterthought to the temperature setpoint.",
  },
] as const;

const VALUES = [
  {
    title: "Sustainability",
    text: "Delivering solutions that support our clients' business and help reduce the broader impact of climate change on the buildings we all use.",
  },
  {
    title: "Family",
    text: "A locally-owned Philadelphia-area business that prioritizes doing right by clients over closing the next job fast.",
  },
  {
    title: "Social impact",
    text: "Crew time and equipment given to local and national charitable organisations in the counties we work in.",
  },
] as const;

const COMMUNITY_ORGS = ["Stop Soldiers Suicide", "My Philly Parks", "ACCT Philly", "Caring for Friends", "Habitat Philadelphia"] as const;

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="About Us"
          title="A Philadelphia-area mechanical contractor, built for the long service life"
          intro="Decades of HVAC expertise brought to bear on high-efficiency mechanical systems, low-carbon heating and healthy buildings — for the engineers, owners and contractors across Eastern Pennsylvania, South Jersey and Delaware who have to live with the selection long after we leave site."
          stats={[
            { label: "Headquarters", value: "Philadelphia, PA" },
            { label: "Service area", value: "Eastern PA · S. NJ · DE" },
            { label: "Ownership", value: "Locally owned" },
          ]}
        />

        {/* Mission pillars */}
        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 720, margin: "0 auto 48px", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px" }}>
                Three pillars, one building performance problem
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                Every project we take on sits under one of these — often more than one at once.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(16px,1.8vw,24px)" }}>
              {PILLARS.map((p, i) => (
                <article key={p.title} className="amz-step-card" style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "28px 26px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: "#AFD3F3", margin: "0 0 18px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, lineHeight: 1.35, margin: "0 0 10px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444444", margin: 0 }}>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "#191C1F", color: "#FFFFFF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 660, margin: "0 auto 48px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#7DB9ED", margin: "0 0 16px" }}>
                What we operate on
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: 0, color: "#FFFFFF" }}>
                Three values, not a slogan wall
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(16px,1.8vw,24px)" }}>
              {VALUES.map((v) => (
                <article key={v.title} style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 16, padding: "28px 26px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, lineHeight: 1.35, margin: "0 0 10px", color: "#FFFFFF" }}>{v.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: 0 }}>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .9vw,1.75rem)", lineHeight: 1.3, margin: "0 0 16px" }}>
              Organisations we give crew time and equipment to
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444444", margin: "0 0 28px" }}>
              Social impact is one of the three things this company operates on, not a line in a values statement. A fuller account of the hours and partners is on the Social Impact page.
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              {COMMUNITY_ORGS.map((org) => (
                <li
                  key={org}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: 40,
                    padding: "0 18px",
                    borderRadius: 999,
                    background: "#EEF5FC",
                    color: "#1462A7",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 14.5,
                  }}
                >
                  {org}
                </li>
              ))}
            </ul>
            <Link href="/impact" className="amz-link-arrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1462A7", textDecoration: "none" }}>
              See our Social Impact
              <ArrowIcon />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,7vw,72px) clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,1.2rem + 1.2vw,2rem)", lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 16px" }}>
              See how we run a project, start to finish
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 28px", maxWidth: "52ch", marginInline: "auto" }}>
              The process behind these pillars — and the four things mechanical engineers check before they&rsquo;ll put us on a spec.
            </p>
            <Link
              href="/how-we-work"
              className="amz-btn-accent"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 56, padding: "0 32px", borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
            >
              How we work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2.4" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
