import type { Metadata } from "next";
import Link from "next/link";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Social Impact — AMZ Energy Systems",
  description:
    "Crew time, equipment and know-how given to organisations across the Philadelphia area — Stop Soldiers Suicide, My Philly Parks, ACCT Philly, Caring for Friends and Habitat Philadelphia.",
};

const MOSAIC = [
  { span: "span 4 / span 2", img: "/images/impact/tree-planting.jpg", alt: "Three AMZ staff beside a newly planted sapling on a restored creek bank", pos: "center 42%" },
  { span: "span 2 / span 3", img: "/images/impact/meal-prep.jpg", alt: "Volunteers assembling sandwich trays on a commercial kitchen line", pos: "center 46%" },
  { span: "span 2 / span 2", img: "/images/impact/every-home.jpg", alt: "Two crew members in safety glasses on a neighbourhood housing build", pos: "center 34%" },
  { span: "span 2 / span 2", img: "/images/impact/shelter-visit-pair.jpg", alt: "Two staff with a shelter dog beside donated supplies", pos: "center 40%" },
  { span: "span 2 / span 1", img: "/images/impact/shelter-visit-team.jpg", alt: "Four staff delivering supplies at an animal shelter", pos: "center 44%" },
] as const;

const ORGS = [
  { name: "Stop Soldiers Suicide", text: "Veteran suicide prevention — funding and volunteer hours toward a cause with a direct line to the families of the tradespeople we work alongside." },
  { name: "My Philly Parks", text: "Restoration and clean-up days in the city's public green spaces, the kind of infrastructure a mechanical contractor doesn't usually touch but can still show up for." },
  { name: "ACCT Philly", text: "Philadelphia's animal care and control team — supply drives and shelter visits from the crew, not just a cheque." },
  { name: "Caring for Friends", text: "Meal preparation and delivery support for homebound seniors across the region we already serve on the job." },
  { name: "Habitat Philadelphia", text: "Build days alongside Habitat for Humanity's Philadelphia chapter — the same trades skills, pointed at a family's first home instead of a plant room." },
] as const;

export default function ImpactPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Social Impact"
          title="The second half of “buildings and communities”"
          intro="Crew time, equipment and know-how given to organisations in the counties we work in. Hours and partners are published here, not estimated."
          stats={[{ label: "Organisations supported", value: String(ORGS.length) }]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div className="amz-mosaic" style={{ display: "grid", gap: "clamp(10px,1.2vw,16px)", gridAutoFlow: "dense" }}>
              {MOSAIC.map((m) => (
                <figure key={m.alt} className="amz-tile" style={{ gridColumn: m.span.split(" / ")[0], gridRow: m.span.split(" / ")[1], margin: 0, position: "relative", borderRadius: 16, overflow: "hidden", background: "#E3E5E8" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: m.pos }} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "#F9FAFB", borderTop: "1px solid #E3E5E8", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px" }}>
                Organisations we give time to
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>Five, so far — added to as new partnerships form.</p>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {ORGS.map((org) => (
                <li key={org.name} style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 14, padding: "22px 24px", display: "flex", flexWrap: "wrap", gap: "6px 20px", alignItems: "baseline" }}>
                  <span style={{ flex: "none", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16.5, color: "#191C1F", minWidth: "min(100%,220px)" }}>{org.name}</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "#444444" }}>{org.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,7vw,72px) clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,1.2rem + 1.2vw,2rem)", lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 16px" }}>
              Know an organisation we should be working with?
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 28px", maxWidth: "52ch", marginInline: "auto" }}>
              Tell us who, and what the need is. We can&rsquo;t commit to everything, but we read every one of these.
            </p>
            <Link
              href="/contact"
              className="amz-btn-accent"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 56, padding: "0 32px", borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
            >
              Get in touch
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
