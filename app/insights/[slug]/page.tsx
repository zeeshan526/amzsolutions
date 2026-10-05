import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ArrowIcon from "../../_components/ArrowIcon";
import PageMasthead from "../../_components/PageMasthead";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import { INSIGHT_ARTICLES } from "../../_lib/insights";

export function generateStaticParams() {
  return INSIGHT_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: `${article.title} — AMZ Energy Systems`, description: article.dek };
}

export default async function InsightArticlePage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = INSIGHT_ARTICLES.filter((a) => a.slug !== slug);

  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead eyebrow="Insights" title={article.title} intro={article.dek} breadcrumbSection="Insights" stats={[{ label: "Read time", value: article.readTime }]} />

        <article style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            {article.sections.map((section) => (
              <section key={section.heading} style={{ marginBottom: "clamp(32px,4vw,48px)" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem,1.1rem + .6vw,1.5rem)", lineHeight: 1.3, letterSpacing: "-.01em", margin: "0 0 16px" }}>
                  {section.heading}
                </h2>
                {section.body.map((para, i) => (
                  <p key={i} style={{ fontSize: 16.5, lineHeight: 1.75, color: "#2D3034", margin: "0 0 18px" }}>
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <div style={{ marginTop: "clamp(40px,5vw,56px)", paddingTop: 28, borderTop: "1px solid #E3E5E8" }}>
              <Link href="/insights" className="amz-link-arrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "#1462A7", textDecoration: "none" }}>
                ← All Insights
              </Link>
            </div>
          </div>
        </article>

        <section style={{ padding: "clamp(48px,6vw,72px) 0", background: "#F9FAFB", borderTop: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 20px" }}>
              Also worth reading
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 16 }}>
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="amz-link-arrow"
                  style={{ display: "flex", flexDirection: "column", gap: 8, background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 14, padding: 22, textDecoration: "none", color: "inherit" }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15.5, color: "#191C1F" }}>{a.title}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, color: "#1462A7" }}>
                    Read <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
