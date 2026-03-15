import { useNavigate } from "react-router-dom";
import "./SiliconLabsArticle.css";

export default function AdvancedEnergyArticle() {
  const navigate = useNavigate();
  return (
    <main className="page-enter article-page">

      {/* HEADER */}
      <header className="article-header">
        <div className="article-container">
          <button className="article-back" onClick={() => navigate(-1)}>← Back</button>
          <div className="article-meta">
            <span className="article-meta__type">Weekly Semiconductor News</span>
            <span className="article-meta__outlet">Weekly Semiconductor News</span>
            <span className="article-meta__date">February 8, 2025</span>
          </div>
          <h1 className="article-title">
            Advanced Energy Climbs 150% as Data-Center Revenue Doubles
          </h1>
          <p className="article-deck">
            The Denver-based power-control supplier outpaced semiconductor peers on 21% revenue growth,
            with data-center sales surging 107% as hyperscalers accelerate AI infrastructure spending.
          </p>
          <div className="article-tags">
            <span className="work-card__tag">Semiconductors</span>
            <span className="work-card__tag">Data Centers</span>
            <span className="work-card__tag">AI Infrastructure</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="article-body">
        <div className="article-container">

          <p className="article-p">
            Advanced Energy Industries Inc. (AEIS), the Denver, Colorado–based supplier of
            power-control equipment used in chip manufacturing and data centers, has climbed
            about 150% over the past 12 months to around $330, outpacing peers by total return.
          </p>

          <p className="article-p">
            The company reported about $1.8 billion in 2025 revenue, up 21%. Nearly half of
            sales came from semiconductor manufacturing, while data-center revenue rose 107%
            to about $587 million, accounting for 33% of total revenue.
          </p>

          <p className="article-p">
            Customers include major cloud companies such as Amazon, Meta, Microsoft and
            Alphabet, according to Bloomberg supply-chain data. Bloomberg Intelligence
            estimates those firms could spend about $650 billion on capital expenditures
            in 2026, with roughly 75% tied to artificial-intelligence infrastructure.
          </p>

          <blockquote className="article-quote">
            <p>
              "Capital spending by hyperscale cloud operators continues to support demand."
            </p>
            <cite>— Stephen Kelley, CEO, Advanced Energy Industries</cite>
          </blockquote>

          <p className="article-p">
            The company now projects full-year data-center revenue to grow more than 30%,
            with CEO Stephen Kelley pointing to sustained hyperscaler investment in AI
            infrastructure as the primary demand driver heading into the second half of 2025.
          </p>

        </div>
      </div>
    </main>
  );
}
