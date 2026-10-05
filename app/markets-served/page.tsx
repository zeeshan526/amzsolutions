import type { Metadata } from "next";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { MARKET_SEGMENTS } from "../_lib/markets";
import MarketExplorer from "./MarketExplorer";

export const metadata: Metadata = {
  title: "Markets Served — AMZ Energy Systems",
  description:
    "Data centers, healthcare, high-rise residential, education and industrial facilities — the buildings AMZ Energy Systems designs and installs mechanical systems for, and what each one is actually judged on.",
};

export default async function MarketsServedPage(props: PageProps<"/markets-served">) {
  const params = await props.searchParams;
  const segmentParam = Array.isArray(params.segment) ? params.segment[0] : params.segment;

  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="Markets Served"
          title="Five buildings, five different constraints"
          intro="The equipment overlaps across every one of these. The constraint driving the selection almost never does — and the constraint is what decides what actually gets specified."
          stats={[
            { label: "Market segments", value: String(MARKET_SEGMENTS.length) },
            { label: "Service area", value: "Eastern PA · S. NJ · DE" },
          ]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <MarketExplorer initialSlug={segmentParam} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
