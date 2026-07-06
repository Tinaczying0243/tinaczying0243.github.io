import { useNavigate } from "react-router-dom";
import type { HostedArticle } from "../../content";
import "./Article.css";

interface ArticleLayoutProps {
  article: HostedArticle;
  children: React.ReactNode;
}

export default function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const navigate = useNavigate();

  return (
    <main className="page-enter article-page">
      <header className="article-header">
        <div className="article-container">
          <button className="article-back" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <div className="article-meta">
            <span className="article-meta__type">{article.type ?? article.outlet}</span>
            <span className="article-meta__outlet">{article.outlet}</span>
            <span className="article-meta__date">{article.date}</span>
          </div>

          <h1 className="article-title">{article.title}</h1>
          <p className="article-deck">{article.deck}</p>

          <div className="article-tags">
            {article.tags.map((tag) => (
              <span key={tag} className="article-tag">
                {tag}
              </span>
            ))}
          </div>

          <p className="article-byline">By {article.author}</p>
        </div>
      </header>

      {article.image && (
        <div className="article-hero">
          <div className="article-container">
            <figure className="article-hero__figure">
              <img src={article.image.src} alt={article.image.alt} className="article-hero__img" loading="eager" />
              {article.image.caption && <figcaption className="article-hero__caption">{article.image.caption}</figcaption>}
            </figure>
          </div>
        </div>
      )}

      <div className="article-body">
        <div className="article-container">
          {children}
          <div className="article-source">
            {article.originalUrl ? (
              <p>
                Originally published on{" "}
                <a href={article.originalUrl} target="_blank" rel="noopener noreferrer">
                  {article.outlet}
                </a>
                . All rights reserved.
              </p>
            ) : (
              <p>
                By {article.author} · {article.outlet}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
