import type { Metadata } from "next";
import Link from "next/link";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { SYSTEM_CATEGORIES } from "../_lib/systemTypes";
import SystemTypeExplorer from "./SystemTypeExplorer";

export const metadata: Metadata = {
  title: "Products by System Type — AMZ Energy Systems",
  description:
    "Air handlers, chillers, heat pumps, DX and heat recovery, humidity control and more — the equipment AMZ Energy Systems specifies and installs, organised by system type.",
};

const MANUFACTURER_COUNT = new Set(SYSTEM_CATEGORIES.flatMap((c) => c.lines.map((l) => l.brand))).size;
const LINE_COUNT = SYSTEM_CATEGORIES.reduce((sum, c) => sum + c.lines.length, 0);

export default async function ProductsBySystemTypePage(props: PageProps<"/products-by-system-type">) {
  const params = await props.searchParams;
  const categoryParam = Array.isArray(params.category) ? params.category[0] : params.category;

  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Technologies & Services"
          title="Products by System Type"
          intro="Every job starts with the problem, not the equipment — but once the selection is made, this is where it comes from. Ten system types, the manufacturer lines we carry in each, and what they're actually good for."
          stats={[
            { label: "System types", value: String(SYSTEM_CATEGORIES.length) },
            { label: "Manufacturer lines", value: String(LINE_COUNT) },
            { label: "Manufacturers represented", value: String(MANUFACTURER_COUNT) },
          ]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <SystemTypeExplorer initialSlug={categoryParam} />
          </div>
        </section>

        <section style={{ padding: "0 0 clamp(64px,9vw,96px)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
                gap: "clamp(16px,2vw,24px)",
                background: "#191C1F",
                borderRadius: 20,
                padding: "clamp(32px,4.5vw,48px)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStretch: "75%",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#7DB9ED",
                    margin: "0 0 14px",
                  }}
                >
                  Not sure which category fits
                </p>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,1.2rem + .9vw,1.75rem)", lineHeight: 1.3, color: "#FFFFFF", margin: "0 0 14px" }}>
                  Send us the load and the constraint — we&rsquo;ll tell you the system type
                </h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "rgba(255,255,255,.78)", margin: 0, maxWidth: "48ch" }}>
                  Most enquiries arrive as a symptom (a hot floor, a noise complaint, a plant room that&rsquo;s out of capacity), not a part number. Tell us what the building is doing and we&rsquo;ll narrow it to the right category and the right line.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
                <Link
                  href="/#contact"
                  className="amz-btn-accent"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    height: 54,
                    padding: "0 30px",
                    borderRadius: 999,
                    background: "#F99615",
                    color: "#191C1F",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 16,
                    textDecoration: "none",
                  }}
                >
                  Talk to an engineer
                </Link>
                <Link
                  href="/installation-services"
                  className="amz-btn-outline-light"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    height: 54,
                    padding: "0 30px",
                    borderRadius: 999,
                    border: "1.5px solid rgba(255,255,255,.4)",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 16,
                    textDecoration: "none",
                  }}
                >
                  See how installation runs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
