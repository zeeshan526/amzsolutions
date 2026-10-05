import type { Metadata } from "next";
import Link from "next/link";

import ArrowIcon from "../_components/ArrowIcon";
import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "COSTARS Program — AMZ Energy Systems",
  description:
    "AMZ Energy Systems is a COSTARS member, letting Pennsylvania schools, municipalities and state-affiliated entities purchase HVAC equipment and installation services through the Commonwealth's cooperative purchasing program.",
};

const COVERED = [
  "Unit ventilators and dedicated outside air systems",
  "Radiant heating and heat pump solutions",
  "Fan coil and air handling equipment",
  "Cooling towers and dry coolers",
  "Heat exchangers and VRF / mini-split systems",
  "Water treatment systems",
  "Pool dehumidifiers and ice rink defrosters",
  "Coil replacements, boilers and electric heat",
  "Air curtains and kitchen exhaust systems",
  "ERV / HRV solutions",
  "Installation services",
] as const;

const STEPS = [
  { n: "01", title: "Confirm you qualify", text: "Local public procurement units and state-affiliated entities in Pennsylvania — school districts, municipalities, authorities — are eligible. Registration runs through the PA Department of General Services." },
  { n: "02", title: "Tell us the scope", text: "Same conversation as any project: what the building is doing, the equipment category, the timeline. We price it against the COSTARS contract rather than a separate bid process." },
  { n: "03", title: "Purchase through COSTARS", text: "No separate competitive bid required on your end — that's the point of a cooperative purchasing program. The contract has already cleared that step." },
  { n: "04", title: "Install, same as any job", text: "Design-build, utility incentive management and commissioning run exactly as described on our Installation Services page — COSTARS changes the procurement path, not the field work." },
] as const;

export default function CostarsProgramPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="COSTARS Program"
          title="A faster procurement path for Pennsylvania public entities"
          intro="The Commonwealth of Pennsylvania's Cooperative Purchasing Program (COSTARS) helps local public procurement units and state-affiliated entities find suppliers and purchase goods and services at competitive prices, without running a separate bid. AMZ Energy Systems is a COSTARS member."
          stats={[
            { label: "Territory", value: "Pennsylvania" },
            { label: "Eligible buyers", value: "LPPUs & state entities" },
            { label: "Product categories", value: String(COVERED.length) },
          ]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .9vw,1.75rem)", lineHeight: 1.3, margin: "0 0 16px" }}>
              What COSTARS actually changes
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#2D3034", margin: "0 0 18px" }}>
              A school district or municipality normally has to run its own competitive bid before buying equipment or services above a certain threshold. COSTARS pre-clears that step: because the contract vehicle has already been competitively awarded at the Commonwealth level, an eligible purchasing unit can buy through it directly, which is usually the difference between a multi-month bid cycle and a purchase order.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#2D3034", margin: 0 }}>
              It changes the procurement path, not the engineering. The load calculation, the equipment selection and the installation still get the same attention as a privately bid job — COSTARS just removes the separate bid requirement standing in front of it.
            </p>
          </div>
        </section>

        <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "#F9FAFB", borderTop: "1px solid #E3E5E8", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .9vw,1.75rem)", lineHeight: 1.3, margin: "0 0 32px", textAlign: "center" }}>
              Product and service categories covered
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12 }}>
              {COVERED.map((c) => (
                <li key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 12, padding: "14px 16px" }}>
                  <span aria-hidden style={{ flex: "none", width: 7, height: 7, marginTop: 7, borderRadius: 999, background: "#F99615" }} />
                  <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#191C1F" }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ padding: "clamp(64px,9vw,96px) 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 680, margin: "0 auto 48px", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                How a COSTARS purchase runs
              </h2>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,232px),1fr))", gap: 20 }}>
              {STEPS.map((s) => (
                <li key={s.n} className="amz-step-card" style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "30px 26px 26px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: 1, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: "#AFD3F3", margin: "0 0 22px" }}>{s.n}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.35, margin: "0 0 10px" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444444", margin: 0 }}>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,7vw,72px) clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,1.2rem + 1.2vw,2rem)", lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 16px" }}>
              Confirm your entity qualifies
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 28px", maxWidth: "52ch", marginInline: "auto" }}>
              Tell us your district or municipality and the equipment category, and we&rsquo;ll confirm eligibility alongside the scope.
            </p>
            <Link
              href="/contact"
              className="amz-btn-accent"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 56, padding: "0 32px", borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
            >
              Contact us
              <ArrowIcon color="#191C1F" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
