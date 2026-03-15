import { Link } from "react-router-dom";
import { journalist, works } from "../data/portfolioData";
import WorkCard from "../components/WorkCard";
import "./Home.css";

const featured = works.filter((w) => w.featured);

const beats = [
  { icon: "📊", label: "Data Journalism", desc: "Turning raw datasets into visual stories that reveal patterns invisible to the naked eye." },
  { icon: "💼", label: "Business & Tech", desc: "Covering the economic forces reshaping the Bay Area and beyond — from startups to policy." },
  { icon: "🌐", label: "Multimedia", desc: "Blending text, interactives, photography, and video into immersive narrative experiences." },
  { icon: "🔍", label: "Investigative", desc: "Following the paper trail on structural inequality, funding cuts, and institutional power." },
];

export default function Home() {
  return (
    <main className="page-enter">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="section-eyebrow">Multimedia Journalist · UC Berkeley</p>
            <h1 className="heading-xl hero__name">
              Tina <span className="text-gradient">Chen</span>
            </h1>
            <p className="hero__bio">{journalist.bio}</p>

            <div className="hero__contact">
              <a href={`mailto:${journalist.email}`} className="hero__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {journalist.email}
              </a>
              <a href={`tel:${journalist.phone}`} className="hero__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.9a16 16 0 0 0 6.14 6.14l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {journalist.phone}
              </a>
              <span className="hero__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {journalist.location}
              </span>
            </div>

            <div className="hero__ctas">
              <Link to="/multimedia" className="btn btn-primary">View Portfolio</Link>
              <Link to="/resume" className="btn btn-outline">Resume</Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__avatar-wrap">
              <div className="hero__avatar">
                <span className="hero__avatar-initials">TC</span>
              </div>
              <div className="hero__avatar-badge hero__avatar-badge--1">
                <span>📰</span> Bay Area News Group
              </div>
              <div className="hero__avatar-badge hero__avatar-badge--2">
                <span>🎓</span> UC Berkeley
              </div>
              <div className="hero__avatar-badge hero__avatar-badge--3">
                <span>📊</span> Data Journalist
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <span>Scroll to explore</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ── BEATS ── */}
      <section className="section beats-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Areas of Focus</p>
            <h2 className="heading-lg">Reporting Beats</h2>
            <div className="section-divider" />
          </div>
          <div className="beats-grid">
            {beats.map((beat) => (
              <div key={beat.label} className="beat-card">
                <div className="beat-card__icon">{beat.icon}</div>
                <h3 className="beat-card__label">{beat.label}</h3>
                <p className="beat-card__desc">{beat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORKS ── */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Selected Works</p>
            <h2 className="heading-lg">Featured Stories</h2>
            <div className="section-divider" />
          </div>
          <div className="featured-grid">
            {featured.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
          <div className="featured-more">
            <Link to="/writing" className="btn btn-outline">All Writing</Link>
            <Link to="/multimedia" className="btn btn-outline">All Multimedia</Link>
          </div>
        </div>
      </section>

      {/* ── LANGUAGES ── */}
      <section className="section languages-section">
        <div className="container">
          <div className="languages-inner">
            <div className="languages-text">
              <p className="section-eyebrow">Languages</p>
              <h2 className="heading-md">Reporting Across Cultures</h2>
              <p>With fluency in English, Mandarin, Cantonese, and Teochew, Tina bridges communities and stories that often go untold in mainstream media.</p>
            </div>
            <div className="languages-pills">
              {journalist.languages.map((lang) => (
                <span key={lang} className="language-pill">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
