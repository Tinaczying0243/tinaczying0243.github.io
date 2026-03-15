import { useParams, useNavigate } from "react-router-dom";
import { getArticle } from "../data/mercuryArticles";
import "./SiliconLabsArticle.css";

export default function MercuryArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return (
      <main className="page-enter article-page">
        <div className="article-container" style={{ padding: "4rem 1rem" }}>
          <button className="article-back" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <p style={{ marginTop: "2rem" }}>Article not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-enter article-page">
      {/* HEADER */}
      <header className="article-header">
        <div className="article-container">
          <button className="article-back" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <div className="article-meta">
            <span className="article-meta__type">{article.outlet}</span>
            <span className="article-meta__outlet">{article.outlet}</span>
            <span className="article-meta__date">{article.date}</span>
          </div>

          <h1 className="article-title">{article.title}</h1>
          <p className="article-deck">{article.deck}</p>

          <div className="article-tags">
            {article.tags.map((tag) => (
              <span key={tag} className="work-card__tag">
                {tag}
              </span>
            ))}
          </div>

          <p className="article-byline">By {article.author}</p>
        </div>
      </header>

      {/* HERO IMAGE */}
      {article.image && (
        <div className="article-hero">
          <div className="article-container">
            <figure className="article-hero__figure">
              <img
                src={article.image.src}
                alt={article.image.alt}
                className="article-hero__img"
                loading="eager"
              />
              {article.image.caption && (
                <figcaption className="article-hero__caption">
                  {article.image.caption}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      )}

      {/* BODY */}
      <div className="article-body">
        <div className="article-container">
          {article.paywalled ? (
            <div className="article-paywall">
              <p className="article-p">
                This article is available to subscribers of {article.outlet}.
              </p>
              {article.originalUrl && (
                <a
                  href={article.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-paywall__link"
                >
                  Read the full article at {article.outlet} →
                </a>
              )}
            </div>
          ) : (
            <>
              {article.blocks.map((block, i) => {
                if (block.type === "p") {
                  return (
                    <p key={i} className="article-p">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="article-section-heading">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "blockquote") {
                  return (
                    <blockquote key={i} className="article-quote">
                      <p>"{block.text}"</p>
                      {block.cite && <cite>— {block.cite}</cite>}
                    </blockquote>
                  );
                }
                if (block.type === "map-embed") {
                  return (
                    <div key={i} className="article-map-embed">
                      {block.title && (
                        <h3 className="article-map-embed__title">
                          {block.title}
                        </h3>
                      )}
                      <iframe
                        src={block.src}
                        title={block.title}
                        className="article-map-embed__iframe"
                        loading="lazy"
                      />
                    </div>
                  );
                }
                return null;
              })}
            </>
          )}

          {/* Attribution footer */}
          <div className="article-source">
            {article.originalUrl ? (
              <p>
                Originally published on{" "}
                <a
                  href={article.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.outlet}
                </a>
                . All rights reserved.
              </p>
            ) : (
              <p>By {article.author} · {article.outlet}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
