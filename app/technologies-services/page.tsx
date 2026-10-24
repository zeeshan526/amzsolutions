import type { Metadata } from "next";
import PageMasthead from "../_components/PageMasthead";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import TechnologyServices from "../_components/TechnologyServices";

export const metadata: Metadata = {
  title: "Technologies & Services | AMZ Energy Systems",
  description: "Explore HVAC products by system type or manufacturer, installation services and utility incentive management from AMZ Energy Systems.",
};

export default function TechnologiesServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead eyebrow="Technologies & Services" title="Solutions for Every Stage of Your Building Project." intro="Connect efficient HVAC technology with the expertise to select, install and fund it. Explore our four areas of support below." />
        <TechnologyServices overview />
      </main>
      <SiteFooter />
    </div>
  );
}
