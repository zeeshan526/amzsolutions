import type { Metadata } from "next";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { AMZ_ADDRESS_LINES, AMZ_COMPANY, AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "../_lib/contact";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — AMZ Energy Systems",
  description:
    "Reach AMZ Energy Systems in Philadelphia, PA — phone, office address and a contact form for engineers, building owners and contractors across Eastern Pennsylvania, South Jersey and Delaware.",
};

export default function ContactPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Contact"
          title="Tell us what the building is doing"
          intro="We'll come and measure. We reply to every message within one business day — and if it's urgent, call and ask for the on-call engineer."
          stats={[
            { label: "Response time", value: "1 business day" },
            { label: "Service area", value: "Eastern PA · S. NJ · DE" },
          ]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.15fr)", gap: "clamp(32px,5vw,64px)" }} className="amz-contact-grid">
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 14px" }}>
                Main line
              </p>
              <a href={AMZ_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,2.4vw,26px)", color: "#191C1F", textDecoration: "none", fontVariantNumeric: "tabular-nums", marginBottom: 28 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1462A7" strokeWidth="2" aria-hidden="true">
                  <path d="M4 3h5l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v5h-2A15 15 0 0 1 4 5z" />
                </svg>
                {AMZ_PHONE_DISPLAY}
              </a>

              <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 14px" }}>
                Office
              </p>
              <address style={{ fontStyle: "normal", fontSize: 16, lineHeight: 1.7, color: "#191C1F", marginBottom: 28 }}>
                <span style={{ display: "block", fontWeight: 600 }}>{AMZ_COMPANY}</span>
                {AMZ_ADDRESS_LINES.map((line) => (
                  <span key={line} style={{ display: "block" }}>{line}</span>
                ))}
              </address>

              <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 14px" }}>
                Service area
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#444444", margin: 0 }}>Eastern Pennsylvania, South Jersey and Delaware.</p>
            </div>

            <div style={{ background: "#F9FAFB", border: "1px solid #E3E5E8", borderRadius: 20, padding: "clamp(26px,3.4vw,42px)" }}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
