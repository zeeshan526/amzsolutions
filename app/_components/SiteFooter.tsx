import Link from "next/link";

import { AMZ_FOOTER_COLUMNS } from "../_lib/nav";
import { AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "../_lib/contact";
import NewsletterForm from "./NewsletterForm";

/* Shared footer for every page — static markup, so this stays a server component. */

export default function SiteFooter() {
  return (
    <footer style={{ background: "#0A1017", color: "#FFFFFF" }}>
      <div className="amz-reveal" style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(56px,8vw,88px) clamp(20px,4vw,40px) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(32px,4vw,56px)", paddingBottom: "clamp(40px,5vw,56px)", borderBottom: "1px solid rgba(255,255,255,.14)" }}>
          <div style={{ minWidth: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo/amz-logo-white.png" alt="AMZ Energy Systems" width={471} height={574} style={{ display: "block", height: 76, width: "auto", marginBottom: 24 }} />
            <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#FFFFFF", margin: 0, maxWidth: "36ch" }}>
              We engineer, install and maintain the mechanical systems that decide whether a building performs — and hand over the numbers that prove it.
            </p>
          </div>
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
            <a href={AMZ_PHONE_HREF} className="amz-footer-tel" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.12)", textDecoration: "none" }}>
              <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)" }}>Main line</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>{AMZ_PHONE_DISPLAY}</span>
            </a>
            <a href={AMZ_PHONE_HREF} className="amz-footer-tel" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.12)", textDecoration: "none" }}>
              <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#F0A9A4" }}>24/7 emergency</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", color: "#F0A9A4", fontVariantNumeric: "tabular-nums" }}>{AMZ_PHONE_DISPLAY}</span>
            </a>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, padding: "18px 0" }}>
              <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", paddingTop: 3 }}>Office</span>
              <address style={{ fontStyle: "normal", textAlign: "right", fontSize: 15, lineHeight: 1.6, color: "#FFFFFF", margin: 0 }}>
                100 W Oxford Street, Suite W1200
                <br />
                Philadelphia, PA 19122
              </address>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "clamp(28px,3vw,44px)", padding: "clamp(40px,5vw,56px) 0" }}>
          {AMZ_FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 20px" }}>
                <span aria-hidden style={{ width: 18, height: 1, background: "#7DB9ED", flex: "none" }} />
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/#") ? (
                      <a href={l.href} className="amz-footer-link" style={{ fontSize: 15, color: "rgba(255,255,255,.80)", textDecoration: "none" }}>
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="amz-footer-link" style={{ fontSize: 15, color: "rgba(255,255,255,.80)", textDecoration: "none" }}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div style={{ minWidth: 0 }}>
            <p style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 20px" }}>
              <span aria-hidden style={{ width: 18, height: 1, background: "#7DB9ED", flex: "none" }} />
              Newsletter
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.72)", margin: "0 0 16px", maxWidth: "32ch" }}>Selection notes and spec changes, a few times a year. No sales mail.</p>
            <NewsletterForm />
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.14)", padding: "24px 0 32px", display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,.56)", margin: 0 }}>&copy; 2026 AMZ Energy Systems &middot; Licence no. pending client fact</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            <Link href="/privacy" style={{ fontSize: 13, color: "rgba(255,255,255,.56)" }}>Privacy</Link>
            <Link href="/terms" style={{ fontSize: 13, color: "rgba(255,255,255,.56)" }}>Terms</Link>
            <Link href="/accessibility" style={{ fontSize: 13, color: "rgba(255,255,255,.56)" }}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
