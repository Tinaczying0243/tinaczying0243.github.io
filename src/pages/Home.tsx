import { useState } from "react";
import { journalist, works } from "../data/portfolioData";
import WorkCard from "../components/WorkCard";
import "./Home.css";

type Tab = "all" | "multimedia" | "writing-tech" | "writing-local" | "photography";

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "multimedia", label: "Multimedia" },
  { id: "writing-tech", label: "Tech & Business" },
  { id: "writing-local", label: "Local News" },
  { id: "photography", label: "Photography" },
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
