import Link from "next/link";

import { AMZ_ADDRESS_LINES, AMZ_COMPANY, AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "../_lib/contact";

/* Shared chrome for the footer's legal pages (/privacy, /terms, /accessibility).
   Server component — static text, so nothing here needs the client. The contents
   sidebar sticks via CSS alone (see .amz-legal-* in globals.css), which is why there
   is no scroll listener: no JS, and it keeps working before hydration. */

const LEGAL_PAGES = [
  { href: "/privacy", label: "Privacy Policy", blurb: "What we collect, why, and what you can ask us to do with it." },
  { href: "/terms", label: "Terms of Use", blurb: "Using this site, and the limits of the guidance published on it." },
  { href: "/accessibility", label: "Accessibility Statement", blurb: "What we have built in, and how to report a barrier." },
] as const;

export type LegalSection = {
  heading: string;
  /* Each entry is either a paragraph of text or a bulleted list. */
  body: (string | { list: string[] })[];
};

const slug = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function SectionBody({ body }: { body: LegalSection["body"] }) {
  return (
    <>
      {body.map((block, i) =>
        typeof block === "string" ? (
          <p key={i} style={{ fontSize: 16.5, lineHeight: 1.75, color: "#2D3034", margin: "0 0 18px" }}>
            {block}
          </p>
        ) : (
          <ul key={i}>
            {block.list.map((item) => (
              <li key={item} style={{ fontSize: 16.5, lineHeight: 1.7, color: "#2D3034" }}>
                {item}
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
  contactHeading,
  contactIntro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  contactHeading: string;
  contactIntro: string;
}) {
  const others = LEGAL_PAGES.filter((p) => p.label.toLowerCase() !== title.toLowerCase());

  return (
    <main id="main" style={{ background: "#FFFFFF" }}>
      {/* Masthead */}
      <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 1600 460" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%", opacity: 0.13 }}>
          <path d="M-160,400 A1900,1900 0 0 1 1740,150" fill="none" stroke="#FFFFFF" strokeWidth="30" />
          <path d="M820,250 A1900,1900 0 0 1 1700,150" fill="none" stroke="#FFFFFF" strokeWidth="16" />
        </svg>
        <div style={{ position: "relative", maxWidth: 1120, margin: "0 auto", padding: "clamp(24px,3.5vw,36px) clamp(20px,4vw,40px) clamp(52px,7vw,84px)" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "clamp(32px,4.5vw,52px)" }}>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <li>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "rgba(255,255,255,.86)", textDecoration: "none" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 12H4M10 6l-6 6 6 6" />
                  </svg>
                  {AMZ_COMPANY}
                </Link>
              </li>
              <li aria-hidden style={{ color: "rgba(255,255,255,.34)", fontSize: 14 }}>/</li>
              <li style={{ fontSize: 14.5, color: "rgba(255,255,255,.60)" }}>{title}</li>
            </ol>
          </nav>

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
              color: "#FFFFFF",
              margin: "0 0 22px",
              padding: "8px 16px",
              border: "1px solid rgba(255,255,255,.34)",
              borderRadius: 999,
            }}
          >
            <span aria-hidden style={{ width: 6, height: 6, background: "#F99615", borderRadius: 999 }} />
            {eyebrow}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.375rem,1.3rem + 4vw,3.75rem)",
              lineHeight: 1.03,
              letterSpacing: "-.024em",
              color: "#FFFFFF",
              margin: "0 0 22px",
              maxWidth: "20ch",
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: "clamp(1.0625rem,.98rem + .4vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.88)", margin: "0 0 clamp(28px,4vw,40px)", maxWidth: "58ch" }}>{intro}</p>

          {/* Meta strip */}
          <dl style={{ margin: 0, display: "flex", flexWrap: "wrap", gap: "20px 48px", paddingTop: 26, borderTop: "1px solid rgba(255,255,255,.22)" }}>
            <div>
              <dt style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 7px" }}>Last updated</dt>
              <dd style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14.5, color: "#FFFFFF" }}>{updated}</dd>
            </div>
            <div>
              <dt style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 7px" }}>Applies to</dt>
              <dd style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14.5, color: "#FFFFFF" }}>amzenergysystems.com</dd>
            </div>
            <div>
              <dt style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 7px" }}>Sections</dt>
              <dd style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14.5, color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>{sections.length}</dd>
            </div>
          </dl>
        </div>
        <div style={{ height: 4, background: "linear-gradient(96deg,#0F4E85 0%,#1879CD 100%)" }} />
      </section>

      {/* Body */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(40px,6vw,76px) clamp(20px,4vw,40px) clamp(56px,8vw,104px)" }}>
        <div className="amz-legal-grid">
          {/* Contents — sidebar on desktop */}
          <nav className="amz-legal-toc" aria-label="On this page">
            <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#727983", margin: "0 0 14px" }}>On this page</p>
            <ol>
              {sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${slug(section.heading)}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            {/* Contents — disclosure on narrow screens */}
            <details className="amz-legal-toc-mobile">
              <summary>On this page</summary>
              <ol>
                {sections.map((section) => (
                  <li key={section.heading}>
                    <a href={`#${slug(section.heading)}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </details>

            <div className="amz-legal-body">
              {sections.map((section, index) => {
                const id = slug(section.heading);
                return (
                  <section key={section.heading} style={{ marginBottom: "clamp(34px,4.5vw,52px)" }}>
                    <h2
                      id={id}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(1.3125rem,1.15rem + .7vw,1.625rem)",
                        lineHeight: 1.22,
                        letterSpacing: "-.012em",
                        color: "#191C1F",
                        margin: "0 0 18px",
                      }}
                    >
                      <span aria-hidden style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 400, letterSpacing: ".06em", color: "#3795E6", marginBottom: 8 }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                      <a href={`#${id}`} className="amz-legal-anchor" aria-label={`Link to “${section.heading}”`}>
                        #
                      </a>
                    </h2>
                    <SectionBody body={section.body} />
                  </section>
                );
              })}
            </div>

            {/* Contact */}
            <section style={{ marginTop: "clamp(40px,5vw,60px)", background: "#0F4E85", color: "#FFFFFF", padding: "clamp(28px,4vw,44px)", position: "relative", overflow: "hidden" }}>
              <svg viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "140%", height: "100%", opacity: 0.12 }}>
                <path d="M-80,270 A1200,1200 0 0 1 900,90" fill="none" stroke="#FFFFFF" strokeWidth="26" />
              </svg>
              <div style={{ position: "relative" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem,1.1rem + .6vw,1.5rem)", lineHeight: 1.25, color: "#FFFFFF", margin: "0 0 14px" }}>{contactHeading}</h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "rgba(255,255,255,.88)", margin: "0 0 28px", maxWidth: "58ch" }}>{contactIntro}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "24px 40px" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 10px" }}>Phone</p>
                    <a
                      href={AMZ_PHONE_HREF}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(20px,2.2vw,24px)",
                        color: "#FFFFFF",
                        textDecoration: "none",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#F99615" strokeWidth="2" aria-hidden="true">
                        <path d="M4 3h5l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v5h-2A15 15 0 0 1 4 5z" />
                      </svg>
                      {AMZ_PHONE_DISPLAY}
                    </a>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 10px" }}>Post</p>
                    <address style={{ fontStyle: "normal", fontSize: 16, lineHeight: 1.65, color: "#FFFFFF" }}>
                      <span style={{ display: "block" }}>{AMZ_COMPANY}</span>
                      {AMZ_ADDRESS_LINES.map((line) => (
                        <span key={line} style={{ display: "block" }}>
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>
            </section>

            {/* Other legal pages */}
            <section style={{ marginTop: "clamp(36px,4.5vw,56px)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#727983", margin: "0 0 16px" }}>Also in this section</p>
              <div className="amz-legal-next">
                {others.map((page) => (
                  <Link key={page.href} href={page.href}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "#191C1F", marginBottom: 8 }}>
                      {page.label}
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1462A7" strokeWidth="2" aria-hidden="true" style={{ flex: "none" }}>
                        <path d="M4 12h16M14 6l6 6-6 6" />
                      </svg>
                    </span>
                    <span style={{ display: "block", fontSize: 14.5, lineHeight: 1.6, color: "#5A6068" }}>{page.blurb}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
