import type { Metadata } from "next";
import Link from "next/link";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import IncentivePrograms from "./IncentivePrograms";

export const metadata: Metadata = {
  title: "Utility Incentive Management — AMZ Energy Systems",
  description:
    "PECO rebates, the New Jersey Direct Install Program and other utility, state and federal incentives — identified, estimated and filed as part of your mechanical project.",
};

export default function UtilityIncentiveManagementPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Technologies & Services"
          breadcrumbSection="Technologies & Services"
          title="Utility Incentive Management"
          intro="Energy-efficiency upgrades come with real money on the table from utilities, states and the federal government. We identify what a project qualifies for, estimate the value up front, and file the paperwork so it actually gets paid."
          stats={[
            { label: "Programs tracked", value: "3+" },
            { label: "Territory", value: "Eastern PA · S. NJ · DE" },
            { label: "NJ Direct Install coverage", value: "Up to 70%" },
          ]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 720, margin: "0 auto 44px", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px" }}>
                Find the program for your building
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                Pick a state to see what&rsquo;s typically available, or flip between programs directly.
              </p>
            </div>
            <IncentivePrograms />
          </div>
        </section>

        <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "#F9FAFB", borderTop: "1px solid #E3E5E8", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .9vw,1.75rem)", lineHeight: 1.3, margin: "0 0 16px" }}>
              Why this runs alongside the mechanical proposal, not after it
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#444444", margin: 0 }}>
              An incentive filed after equipment is ordered can miss a program&rsquo;s pre-approval requirement entirely. We check eligibility while the scope is still being priced, so the rebate is built into the number you sign off on — not a surprise you chase down afterwards.
            </p>
          </div>
        </section>

        <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,7vw,72px) clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,1.2rem + 1.2vw,2rem)", lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 16px" }}>
              Tell us your utility account and the equipment in mind
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 28px", maxWidth: "52ch", marginInline: "auto" }}>
              We&rsquo;ll tell you within one business day which programs apply and roughly what they&rsquo;re worth.
            </p>
            <Link
              href="/#contact"
              className="amz-btn-accent"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 56, padding: "0 32px", borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
            >
              Check your eligibility
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
