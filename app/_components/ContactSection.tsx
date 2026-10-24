import QuoteForm from "./QuoteForm";

/* The "Contact Us" band: heading and office address on the left, the message form on the
   right. The homepage shows it at #contact and /contact renders it as the whole page, so
   there is exactly one contact form layout on the site. */

export default function ContactSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="contact" data-screen-label="Contact Us" style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 1600 340" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%", opacity: 0.13 }}>
        <path className="amz-swoosh" pathLength={1} d="M-160,300 A1900,1900 0 0 1 1740,120" fill="none" stroke="#FFFFFF" strokeWidth="28" />
      </svg>
      <svg viewBox="0 0 1600 340" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%" }}>
        <path className="amz-swoosh-glint" pathLength={1} d="M-160,300 A1900,1900 0 0 1 1740,120" fill="none" strokeWidth="4" />
      </svg>
      <div className="amz-contact-grid" style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(56px,8vw,88px) clamp(20px,4vw,40px)" }}>
        <div>
          <Heading style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px", color: "#FFFFFF" }}>
            Tell Us What the Building Is <span className="amz-accent amz-accent-light">Doing</span>
          </Heading>
          <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 32px", maxWidth: "36ch" }}>We&rsquo;ll come and measure.</p>
          <address style={{ fontStyle: "normal", display: "flex", alignItems: "center", gap: 10, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.80)", margin: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.62)" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true" style={{ flex: "none" }}>
              <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.6" />
            </svg>
            100 W Oxford Street, Suite W1200, Philadelphia, PA 19122
          </address>
        </div>
        <div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
