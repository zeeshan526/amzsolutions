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

const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${AMZ_COMPANY}, ${AMZ_ADDRESS_LINES.join(", ")}`)}`;

const NEXT_STEPS = [
  { n: "01", title: "You send the symptom", text: "Tell us what the building is doing, which system it is on and roughly when it started. Drawings and photos help." },
  { n: "02", title: "An engineer replies", text: "A person reads it, not a queue. We answer every message within one business day." },
  { n: "03", title: "We come and measure", text: "Where it needs it, we visit the building and take readings before anything is specified." },
];

const eyebrow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontFamily: "var(--font-display)",
  fontStretch: "75%",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "#5A6068",
  margin: "0 0 10px",
};

const infoCard: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 18,
  padding: "22px 24px",
  background: "#FFFFFF",
  border: "1px solid #E3E5E8",
  borderRadius: 16,
  textDecoration: "none",
  color: "inherit",
};

const iconBox: React.CSSProperties = {
  flex: "none",
  width: 48,
  height: 48,
  borderRadius: 12,
  background: "#EEF5FC",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
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

        <section style={{ padding: "clamp(56px,8vw,88px) 0", background: "#F9FAFB", borderBottom: "1px solid #E3E5E8" }}>
          <div className="amz-contact-grid amz-contact-wide" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div className="amz-contact-info">
              <div className="amz-head" style={{ marginBottom: 28 }}>
                <p style={eyebrow}>
                  <span aria-hidden style={{ width: 18, height: 1, background: "#1462A7", flex: "none" }} />
                  Get in touch
                </p>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 14px" }}>
                  Talk to an engineer
                </h2>
                <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0, maxWidth: "40ch" }}>
                  Call, visit, or send the form. Whichever you pick, the person who reads it is the person who can help.
                </p>
              </div>

              <div className="amz-contact-cards" style={{ display: "grid", gap: 14 }}>
                <a href={AMZ_PHONE_HREF} className="amz-info-card amz-stagger" style={{ ...infoCard, ["--i" as string]: 0 }}>
                  <span style={iconBox} aria-hidden>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1462A7" strokeWidth="2">
                      <path d="M4 3h5l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v5h-2A15 15 0 0 1 4 5z" />
                    </svg>
                  </span>
                  <span>
                    <span style={{ ...eyebrow, margin: "0 0 6px" }}>Main line</span>
                    <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,2.4vw,26px)", fontVariantNumeric: "tabular-nums" }}>{AMZ_PHONE_DISPLAY}</span>
                    <span style={{ display: "block", fontSize: 14, color: "#5A6068", marginTop: 4 }}>Urgent? Ask for the on-call engineer.</span>
                  </span>
                </a>

                <a href={MAPS_HREF} target="_blank" rel="noopener" className="amz-info-card amz-stagger" style={{ ...infoCard, ["--i" as string]: 1 }}>
                  <span style={iconBox} aria-hidden>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1462A7" strokeWidth="2">
                      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                  </span>
                  <span>
                    <span style={{ ...eyebrow, margin: "0 0 6px" }}>Office</span>
                    <address style={{ fontStyle: "normal", fontSize: 16, lineHeight: 1.6 }}>
                      <span style={{ display: "block", fontWeight: 600 }}>{AMZ_COMPANY}</span>
                      {AMZ_ADDRESS_LINES.map((line) => (
                        <span key={line} style={{ display: "block" }}>{line}</span>
                      ))}
                    </address>
                    <span style={{ display: "inline-block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", marginTop: 6 }}>
                      Get directions <span className="sr-only">(opens in a new tab)</span>→
                    </span>
                  </span>
                </a>

                <div className="amz-info-card amz-stagger" style={{ ...infoCard, ["--i" as string]: 2 }}>
                  <span style={iconBox} aria-hidden>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1462A7" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
                    </svg>
                  </span>
                  <span>
                    <span style={{ ...eyebrow, margin: "0 0 6px" }}>Service area</span>
                    <span style={{ display: "block", fontSize: 16, lineHeight: 1.6 }}>Eastern Pennsylvania, South Jersey and Delaware.</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="amz-reveal" style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "clamp(26px,3.4vw,42px)", boxShadow: "0 2px 4px rgba(25,28,31,.04), 0 12px 32px rgba(25,28,31,.06)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, lineHeight: 1.2, letterSpacing: "-.01em", margin: "0 0 6px" }}>Send us a message</h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#5A6068", margin: "0 0 26px" }}>Fields marked * are required.</p>
              <ContactForm />
            </div>
          </div>
        </section>

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div className="amz-head" style={{ maxWidth: 640, margin: "0 auto 44px", textAlign: "center" }}>
              <p style={{ ...eyebrow, justifyContent: "center" }}>
                <span aria-hidden style={{ width: 18, height: 1, background: "#1462A7", flex: "none" }} />
                What happens next
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: 0 }}>
                From message to measurement
              </h2>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 20 }}>
              {NEXT_STEPS.map((s, i) => (
                <li key={s.n} className="amz-step-card amz-stagger" style={{ ["--i" as string]: i, background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "30px 26px 26px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: 1, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: "#AFD3F3", margin: "0 0 22px" }}>{s.n}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.35, margin: "0 0 10px" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444444", margin: 0 }}>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
