import type { Metadata } from "next";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { LINE_CARD_HREF } from "../_lib/lineCard";

export const metadata: Metadata = {
  title: "Line Card — AMZ Energy Systems",
  description:
    "Download the current AMZ Energy Systems product line card — every manufacturer we represent, organised by category.",
};

export default function LineCardPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Line Card"
          title="AMZ Energy Systems Product Line Card"
          intro="Every manufacturer we represent, organised by category, in one PDF — kept current as the lines we carry change. This link always serves whatever version is current; bookmark it rather than the PDF itself."
        />

        <section style={{ padding: "clamp(64px,9vw,96px) 0" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", textAlign: "center" }}>
            <a
              href={LINE_CARD_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="amz-btn-accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                height: 60,
                padding: "0 36px",
                borderRadius: 999,
                background: "#F99615",
                color: "#191C1F",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Download the line card
            </a>
            <p style={{ marginTop: 20, fontSize: 14, color: "#5A6068" }}>
              Want the manufacturers broken out by product category instead? See{" "}
              <a href="/products-by-system-type" style={{ color: "#1462A7" }}>
                Products by System Type
              </a>{" "}
              or{" "}
              <a href="/manufacturers" style={{ color: "#1462A7" }}>
                Products by Manufacturer
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
