import { useState } from "react";
import { Link } from "react-router-dom";
import { works } from "../data/portfolioData";
import "./NewsClips.css";

const clips = works.filter((w) => w.category === "news-clip");

// Derive unique series names from the data — new sectors appear automatically
const allSeries = Array.from(new Set(clips.map((c) => c.outlet)));

function ClipItem({ clip }: { clip: (typeof clips)[0] }) {
  return (
    <article className="nc-item">
      <div className="nc-item__meta">
        <span className="nc-item__type">{clip.type}</span>
        <span className="nc-item__date">{clip.date}</span>
      </div>

      {clip.hosted ? (
        <Link to={clip.url} className="nc-item__link">
          <h2 className="nc-item__title">{clip.title}</h2>
        </Link>
      ) : (
        <a
          href={clip.url}
          target="_blank"
          rel="noopener noreferrer"
          className="nc-item__link"
        >
          <h2 className="nc-item__title">{clip.title}</h2>
        </a>
      )}

      <p className="nc-item__body">{clip.description}</p>

      <div className="nc-item__footer">
        <div className="nc-item__tags">
          {clip.tags.map((tag) => (
            <span key={tag} className="work-card__tag">{tag}</span>
          ))}
        </div>
        {clip.hosted ? (
          <Link to={clip.url} className="nc-item__read-more">
            Read with charts →
          </Link>
        ) : (
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
  );
}

export default function NewsClips() {
  const [activeSeries, setActiveSeries] = useState<string>("all");

  const visibleClips =
    activeSeries === "all"
      ? clips
      : clips.filter((c) => c.outlet === activeSeries);

  // When showing all, group by series so each section has a header
  const groups: { series: string; items: typeof clips }[] =
    activeSeries === "all"
      ? allSeries.map((s) => ({ series: s, items: clips.filter((c) => c.outlet === s) }))
      : [{ series: activeSeries, items: visibleClips }];

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

      {/* SERIES FILTER TABS */}
      <div className="nc-tabs-bar">
        <div className="container nc-tabs">
          <button
            className={`nc-tab ${activeSeries === "all" ? "nc-tab--active" : ""}`}
            onClick={() => setActiveSeries("all")}
          >
            All
            <span className="nc-tab__count">{clips.length}</span>
          </button>
          {allSeries.map((s) => (
            <button
              key={s}
              className={`nc-tab ${activeSeries === s ? "nc-tab--active" : ""}`}
              onClick={() => setActiveSeries(s)}
            >
              {s}
              <span className="nc-tab__count">
                {clips.filter((c) => c.outlet === s).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CLIPS — grouped by series */}
      <section className="section nc-section">
        <div className="container">
          {groups.map((group) => (
            <div key={group.series} className="nc-group">
              {activeSeries === "all" && (
                <h2 className="nc-group__heading">{group.series}</h2>
              )}
              <div className="nc-list">
                {group.items.map((clip) => (
                  <ClipItem key={clip.id} clip={clip} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
