import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import type { InsightArticle } from "../_lib/insights";

export default function InsightCard({ article, featured = false }: { article: InsightArticle; featured?: boolean }) {
  return (
    <article className={`amz-insight-card${featured ? " amz-insight-featured" : ""}`}>
      <Link href={`/insights/${article.slug}`} className="amz-insight-image" tabIndex={-1} aria-hidden="true">
        <Image src={article.image} alt={article.imageAlt} fill sizes={featured ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 33vw"} />
      </Link>
      <div className="amz-insight-card-copy">
        <p className="amz-insight-meta"><span>{article.category}</span><span>{article.readTime}</span></p>
        <h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2>
        <p className="amz-insight-dek">{article.dek}</p>
        <div className="amz-insight-actions">
          <a href={article.resource.href} target="_blank" rel="noopener noreferrer" className="amz-insight-resource">{article.resource.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          <Link href={`/insights/${article.slug}`} className="amz-insight-read">Read article <ArrowIcon /></Link>
        </div>
      </div>
    </article>
  );
}
