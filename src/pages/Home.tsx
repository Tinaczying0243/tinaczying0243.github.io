import { useState } from "react";
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

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const displayed = getWorks(activeTab);

  return (
    <main className="page-enter">
      {/* INTRO */}
      <section className="hero">
        <div className="container hero__inner">
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
            <span className="hero__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {journalist.location}
            </span>
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
