import { useState, useEffect } from "react";
import { useNavigationType } from "react-router-dom";
import { journalist, works } from "../data/portfolioData";
import WorkCard from "../components/WorkCard";
import "./Home.css";

type Tab = "all" | "writing-tech" | "writing-local" | "multimedia";

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "writing-tech", label: "Tech & Business" },
  { id: "writing-local", label: "Local News" },
  { id: "multimedia", label: "Multimedia" },
];

function getCount(tab: Tab) {
  if (tab === "all") return works.length;
  return works.filter((w) => w.category === tab).length;
}

function getWorks(tab: Tab) {
  if (tab === "all") return works;
  return works.filter((w) => w.category === tab);
}

const SCROLL_KEY = "home-scroll-y";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const displayed = getWorks(activeTab);
  const navType = useNavigationType();

  // Restore scroll position when navigating back
  useEffect(() => {
    if (navType === "POP") {
      const saved = sessionStorage.getItem(SCROLL_KEY);
      if (saved) {
        // Use rAF to wait for layout to settle before restoring
        requestAnimationFrame(() => {
          window.scrollTo({ top: parseInt(saved, 10), behavior: "instant" });
        });
      }
    }
    // Save scroll position whenever the user scrolls (debounced)
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navType]);

  return (
    <main className="page-enter">
      {/* INTRO */}
      <section className="hero">
        <div className="container hero__inner">
          {/* Left: text */}
          <div className="hero__text">
            <p className="section-eyebrow">Multimedia Journalist · UC Berkeley</p>
            <h1 className="heading-xl hero__name">
              Tina Chen
            </h1>
            <p className="hero__bio">{journalist.bio}</p>

            <div className="hero__contact">
              <a href={`mailto:${journalist.email}`} className="hero__contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {journalist.email}
              </a>
              <a href={`tel:${journalist.phone}`} className="hero__contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.9a16 16 0 0 0 6.14 6.14l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {journalist.phone}
              </a>
              <span className="hero__contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {journalist.location}
              </span>
            </div>
          </div>

          {/* Right: photo */}
          <div className="hero__photo-col">
            <img
              src="/tina-photo.jpg"
              alt="Tina Chen"
              className="hero__photo"
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO TABS */}
      <div className="portfolio-tabs-bar">
        <div className="container portfolio-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`portfolio-tab ${activeTab === tab.id ? "portfolio-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <span className="portfolio-tab__count">{getCount(tab.id)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CARDS GRID */}
      <section className="section portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {displayed.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
