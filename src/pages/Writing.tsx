import { useState } from "react";
import { works } from "../data/portfolioData";
import WorkCard from "../components/WorkCard";
import "./Writing.css";

type Tab = "all" | "tech" | "local";

export default function Writing() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const techWorks = works.filter((w) => w.category === "writing-tech");
  const localWorks = works.filter((w) => w.category === "writing-local");

  const displayed =
    activeTab === "all"
      ? works.filter((w) => w.category.startsWith("writing"))
      : activeTab === "tech"
      ? techWorks
      : localWorks;

  return (
    <main className="page-enter">
      {/* Header */}
      <section className="page-hero page-hero--writing">
        <div className="container">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="heading-xl">Writing</h1>
          <p className="page-hero__desc">
            News reporting, features, and investigations across technology, business,
            and Bay Area communities — published in regional and national outlets.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="writing-tabs-bar">
        <div className="container writing-tabs">
          {(["all", "tech", "local"] as Tab[]).map((tab) => (
            <button
              key={tab}
              className={`writing-tab ${activeTab === tab ? "writing-tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all" && "All Writing"}
              {tab === "tech" && "Tech & Business"}
              {tab === "local" && "Local News"}
              <span className="writing-tab__count">
                {tab === "all" ? techWorks.length + localWorks.length : tab === "tech" ? techWorks.length : localWorks.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <section className="section">
        <div className="container">
          {activeTab !== "all" ? (
            <div className="writing-grid">
              {displayed.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <>
              {/* Tech section */}
              <div className="writing-category">
                <div className="writing-category__header">
                  <div className="writing-category__dot writing-category__dot--tech" />
                  <h2 className="heading-md">Tech &amp; Business</h2>
                  <span className="writing-category__count tag tag-blue">{techWorks.length} stories</span>
                </div>
                <p className="writing-category__desc">
                  Covering the companies, policies, and economic forces shaping the Bay Area's
                  technology landscape — from funding freezes to pop culture business trends.
                </p>
                <div className="writing-grid">
                  {techWorks.map((item) => (
                    <WorkCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Local section */}
              <div className="writing-category">
                <div className="writing-category__header">
                  <div className="writing-category__dot writing-category__dot--local" />
                  <h2 className="heading-md">Local News</h2>
                  <span className="writing-category__count tag tag-emerald">{localWorks.length} stories</span>
                </div>
                <p className="writing-category__desc">
                  Community-driven reporting from San Francisco and Oakland — from election night
                  live blogs to neighborhood business profiles.
                </p>
                <div className="writing-grid">
                  {localWorks.map((item) => (
                    <WorkCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Outlets banner */}
      <section className="section-sm outlets-section">
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: "center", marginBottom: "28px" }}>
            Published In
          </p>
          <div className="outlets-list">
            {["Bay Area News Group", "The Mercury News", "East Bay Times", "Oakland North", "Mission Local"].map((outlet) => (
              <span key={outlet} className="outlet-item">{outlet}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
