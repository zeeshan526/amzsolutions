import type { Metadata } from "next";
import Link from "next/link";

import ArrowIcon from "../_components/ArrowIcon";
import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import InstallationProcessStepper from "./InstallationProcessStepper";

export const metadata: Metadata = {
  title: "Installation Services — AMZ Energy Systems",
  description:
    "Design-build construction, utility incentive management and integrated financing — how AMZ Energy Systems plans and runs a mechanical installation from plant room to rooftop.",
};

const DISCIPLINES = [
  {
    title: "Central plant & water-cooled chillers",
    text: "Our installation teams coordinate equipment placement, chilled-water piping, controls, pumps, electrical systems and mechanical connections inside the central plant room.",
  },
  {
    title: "Cooling tower & rooftop installation",
    text: "From crane coordination and structural positioning to condenser-water piping and final alignment, every rooftop installation is carefully planned and executed.",
  },
  {
    title: "Air handling & precision air",
    text: "We install and integrate air-handling units, filtration systems, cooling coils, controls and ductwork to deliver consistent airflow, comfort and indoor air quality.",
  },
] as const;

const PILLARS = [
  {
    title: "Design-build construction",
    text: "One contract, one team accountable for the drawings and the install — coordinated so a change on paper doesn't become a surprise on site.",
    href: "/products-by-system-type",
    linkLabel: "See the equipment we specify",
  },
  {
    title: "Utility & incentive management",
    text: "We identify, estimate and secure the utility and federal incentives a project qualifies for, and file the paperwork so the rebate actually lands.",
    href: "/utility-incentive-management",
    linkLabel: "See the incentive programs",
  },
  {
    title: "Integrated financing solutions",
    text: "Where the upfront cost is the obstacle, our funding-partner network gets project financing in front of you alongside the mechanical proposal, not after it.",
    href: "/#contact",
    linkLabel: "Ask about financing",
  },
] as const;

export default function InstallationServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Technologies & Services"
          title="Installation Services"
          intro="Design-build construction, utility incentive management and integrated financing, run by a team that coordinates the trades instead of handing them a spec and a deadline."
          stats={[
            { label: "Service area", value: "Eastern PA · S. NJ · DE" },
            { label: "Process pillars", value: "4" },
            { label: "Core disciplines", value: "3" },
          ]}
        />

        {/* Core pillars */}
        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 720, margin: "0 auto 48px", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px" }}>
                What&rsquo;s included in an AMZ installation
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                The mechanical work is the visible part. These three run underneath it on every project.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(16px,1.8vw,24px)" }}>
              {PILLARS.map((p) => (
                <article key={p.title} style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "28px 26px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.35, margin: "0 0 12px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#444444", margin: "0 0 20px" }}>{p.text}</p>
                  <Link href={p.href} className="amz-link-arrow" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", textDecoration: "none" }}>
                    {p.linkLabel}
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "#F9FAFB", borderTop: "1px solid #E3E5E8", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 720, margin: "0 auto 48px", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px" }}>
                Three places the work actually happens
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>Plant room, rooftop, air-side — different crews, same job number.</p>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 20 }}>
              {DISCIPLINES.map((d, i) => (
                <li key={d.title} className="amz-step-card" style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "26px 24px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: "#AFD3F3", margin: "0 0 18px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, lineHeight: 1.35, margin: "0 0 10px" }}>{d.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444444", margin: 0 }}>{d.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Process stepper */}
        <section style={{ padding: "clamp(64px,9vw,96px) 0", background: "#191C1F" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 660, margin: "0 auto clamp(36px,5vw,52px)", textAlign: "center" }}>
              <p
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "var(--font-display)",
                  fontStretch: "75%",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#7DB9ED",
                  margin: "0 0 16px",
                }}
              >
                How a job runs
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: 0, color: "#FFFFFF" }}>
                The four things that keep a schedule honest
              </h2>
            </div>
            <InstallationProcessStepper />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,7vw,72px) clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,1.2rem + 1.2vw,2rem)", lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 16px" }}>
              Tell us the scope and the schedule constraint
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 28px", maxWidth: "52ch", marginInline: "auto" }}>
              A summer shutdown window, an occupied floor, a rooftop crane pick — tell us the constraint first and the install plan follows.
            </p>
            <Link
              href="/#contact"
              className="amz-btn-accent"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 56, padding: "0 32px", borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
            >
              Start a project
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
