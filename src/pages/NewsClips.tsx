import { Link } from "react-router-dom";
import { works } from "../data/portfolioData";
import "./NewsClips.css";

const clips = works.filter((w) => w.category === "news-clip");

export default function NewsClips() {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="nc-hero">
        <div className="container">
          <Link to="/" className="nc-back">← Portfolio</Link>
          <p className="section-eyebrow">Business &amp; Markets</p>
          <h1 className="heading-xl nc-hero__title">News Clips</h1>
          <p className="nc-hero__desc">
            Short-form business and market reporting — earnings, deals, and industry shifts distilled from primary sources and filings.
          </p>
        </div>
      </section>

      {/* CLIPS LIST */}
      <section className="section nc-section">
        <div className="container">
          <div className="nc-list">
            {clips.map((clip) => (
              <article key={clip.id} className="nc-item">
                <div className="nc-item__meta">
                  <span className="nc-item__type">{clip.type}</span>
                  <span className="nc-item__outlet">{clip.outlet}</span>
                  <span className="nc-item__date">{clip.date}</span>
                </div>
                <a
                  href={clip.url}
                  target={clip.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`nc-item__link ${clip.url === "#" ? "nc-item__link--no-url" : ""}`}
                >
                  <h2 className="nc-item__title">{clip.title}</h2>
                </a>
                <p className="nc-item__body">{clip.description}</p>
                <div className="nc-item__footer">
                  <div className="nc-item__tags">
                    {clip.tags.map((tag) => (
                      <span key={tag} className="work-card__tag">{tag}</span>
                    ))}
                  </div>
                  {clip.url !== "#" && (
                    <a
                      href={clip.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nc-item__read-more"
                    >
                      Read →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
