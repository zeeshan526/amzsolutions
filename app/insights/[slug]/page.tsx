import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Image from "next/image";
import InsightCard from "../../_components/InsightCard";
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
  return { title: `${article.title} | AMZ Energy Systems`, description: article.dek };
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
        <article>
          <header className="amz-article-header">
            <div className="amz-insights-container">
              <nav aria-label="Breadcrumb" className="amz-article-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link><span aria-hidden="true">/</span><span>Article</span></nav>
              <p className="amz-insight-eyebrow">{article.category}</p>
              <h1>{article.title}</h1>
              <p className="amz-article-intro">{article.dek}</p>
              <a href={article.resource.href} target="_blank" rel="noopener noreferrer" className="amz-insight-resource" style={{ marginBottom: 28 }}>{article.resource.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
              <div className="amz-article-byline"><span>AMZ Energy Systems</span><span>{article.readTime}</span></div>
            </div>
          </header>
          <div className="amz-insights-container">
            <div className="amz-article-cover"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 1200px) 100vw, 1200px" /></div>
            <div className="amz-article-layout">
              <aside className="amz-article-sidebar">
                <nav aria-label="In this article">
                  <p className="amz-insight-eyebrow">In this article</p>
                  {article.sections.map((section, i) => <a key={section.heading} href={`#section-${i + 1}`}>{section.heading}</a>)}
                </nav>
                <Link href="/insights" className="amz-article-back">← All insights</Link>
              </aside>
              <div className="amz-article-body">
                {article.sections.map((section, i) => (
                  <section key={section.heading} id={`section-${i + 1}`}>
                    <h2>{section.heading}</h2>
                    {section.body.map((para, j) => <p key={j}>{para}</p>)}
                  </section>
                ))}
                <div className="amz-article-contact"><p className="amz-insight-eyebrow">Put ideas into practice</p><h2>What Does This Mean for Your Building?</h2><p>Talk with our team about equipment, project planning and the next step for your facility.</p><Link href="/contact" className="amz-insight-read">Discuss your project →</Link></div>
              </div>
            </div>
          </div>
        </article>
        <section className="amz-insights-section amz-insights-related" aria-labelledby="related-heading">
          <div className="amz-insights-container">
            <div className="amz-insights-heading"><h2 id="related-heading">Keep Reading</h2><Link href="/insights">All insights →</Link></div>
            <div className="amz-insights-grid">{others.map(a => <InsightCard key={a.slug} article={a} />)}</div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
