import type { Metadata } from "next";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { MANUFACTURER_CATEGORIES, MANUFACTURERS } from "../_lib/manufacturers";
import ManufacturerDirectory from "./ManufacturerDirectory";

export const metadata: Metadata = {
  title: "Products by Manufacturer — AMZ Energy Systems",
  description:
    "The manufacturer partners AMZ Energy Systems represents across chillers, air handling, VRF, terminal units, water treatment and more.",
};

export default function ManufacturersPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Technologies & Services"
          breadcrumbSection="Technologies & Services"
          title="Products by Manufacturer"
          intro="We represent manufacturers we'd put our own name behind — decades of field history, parts availability, and a rep we can get on the phone when a job needs it. Search or filter to find who covers what."
          stats={[
            { label: "Manufacturer partners", value: String(MANUFACTURERS.length) },
            { label: "Categories represented", value: String(MANUFACTURER_CATEGORIES.length) },
            { label: "Service area", value: "Eastern PA · S. NJ · DE" },
          ]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0 clamp(64px,9vw,96px)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <ManufacturerDirectory />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
