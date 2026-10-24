import type { Metadata } from "next";
import InsightCard from "../_components/InsightCard";
import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { INSIGHT_ARTICLES } from "../_lib/insights";

export const metadata: Metadata = {
  title: "Insights | AMZ Energy Systems",
  description: "Articles on building decarbonization, energy policy, utility incentives and practical HVAC strategy for building owners and engineers.",
};

export default function InsightsPage() {
  const [featured, ...articles] = INSIGHT_ARTICLES;
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead eyebrow="Insights" title="Ideas for Better Buildings." intro="Explore the systems, policies and practical decisions shaping a more efficient built environment. Insights for the people who design, own and operate buildings." />
        <section className="amz-insights-section" aria-labelledby="featured-heading">
          <div className="amz-insights-container">
            <p className="amz-insight-eyebrow" id="featured-heading">Featured article</p>
            <InsightCard article={featured} featured />
            <div className="amz-insights-heading"><h2>More Insights</h2><span>{articles.length} articles to explore</span></div>
            <div className="amz-insights-grid">
              {articles.map(article => <InsightCard key={article.slug} article={article} />)}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
