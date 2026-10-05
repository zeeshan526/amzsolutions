import Link from "next/link";

import { AMZ_COMPANY } from "../_lib/contact";

/* Shared masthead for interior (non-homepage) pages — a dark, breadcrumbed hero that
   sits under the fixed SiteHeader. Modelled on LegalPage's masthead, but generic enough
   for the Technologies & Services pages and their stat strips. */

export type MastheadStat = { label: string; value: string };

export default function PageMasthead({
  eyebrow,
  title,
  intro,
  stats,
  cta,
  breadcrumbSection,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  stats?: MastheadStat[];
  cta?: { label: string; href: string };
  /** Middle breadcrumb crumb, e.g. "Technologies & Services". Omitted entirely when the
   *  page doesn't sit under a section (About, Contact, Insights, ...). */
  breadcrumbSection?: string;
}) {
  return (
    <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 1600 460" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%", opacity: 0.13 }}>
        <path className="amz-swoosh" pathLength={1} d="M-160,400 A1900,1900 0 0 1 1740,150" fill="none" stroke="#FFFFFF" strokeWidth="30" />
        <path className="amz-swoosh amz-swoosh-2" pathLength={1} d="M820,250 A1900,1900 0 0 1 1700,150" fill="none" stroke="#FFFFFF" strokeWidth="16" />
      </svg>
      {/* Glint sweep, in its own un-dimmed svg: the ambient line above lives inside a
          13%-opacity group, which would cap the shine to the same faintness if it were
          in there too. This one sits at full opacity so the sweep actually reads as
          bright against the dark masthead. */}
      <svg viewBox="0 0 1600 460" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%" }}>
        <path className="amz-swoosh-glint" pathLength={1} d="M-160,400 A1900,1900 0 0 1 1740,150" fill="none" strokeWidth="4" />
        <path className="amz-swoosh-glint amz-swoosh-glint-2" pathLength={1} d="M820,250 A1900,1900 0 0 1 1700,150" fill="none" strokeWidth="3" />
      </svg>
      <div
        style={{
          position: "relative",
          maxWidth: 1120,
          margin: "0 auto",
          padding: "calc(var(--amz-hdr-h) + clamp(20px,3vw,32px)) clamp(20px,4vw,40px) clamp(52px,7vw,84px)",
        }}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "clamp(28px,4vw,44px)" }}>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <li>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "rgba(255,255,255,.86)", textDecoration: "none" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 12H4M10 6l-6 6 6 6" />
                </svg>
                {AMZ_COMPANY}
              </Link>
            </li>
            {breadcrumbSection && (
              <>
                <li aria-hidden style={{ color: "rgba(255,255,255,.34)", fontSize: 14 }}>/</li>
                <li style={{ fontSize: 14.5, color: "rgba(255,255,255,.60)" }}>{breadcrumbSection}</li>
              </>
            )}
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
            maxWidth: "22ch",
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: "clamp(1.0625rem,.98rem + .4vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.88)", margin: "0 0 clamp(28px,4vw,40px)", maxWidth: "62ch" }}>{intro}</p>

        {cta && (
          <a
            href={cta.href}
            className="amz-btn-accent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              height: 54,
              padding: "0 30px",
              borderRadius: 999,
              background: "#F99615",
              color: "#191C1F",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: ".01em",
              textDecoration: "none",
              marginBottom: stats ? "clamp(28px,4vw,40px)" : 0,
            }}
          >
            {cta.label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2.4" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </a>
        )}

        {/* Meta strip */}
        {stats && stats.length > 0 && (
          <dl style={{ margin: 0, display: "flex", flexWrap: "wrap", gap: "20px 48px", paddingTop: 26, borderTop: "1px solid rgba(255,255,255,.22)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 7px" }}>
                  {s.label}
                </dt>
                <dd style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14.5, color: "#FFFFFF" }}>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      <div style={{ height: 4, background: "linear-gradient(96deg,#0F4E85 0%,#1879CD 100%)" }} />
    </section>
  );
}
