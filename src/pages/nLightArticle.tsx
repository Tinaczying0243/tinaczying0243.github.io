import { useNavigate } from "react-router-dom";
import "./SiliconLabsArticle.css";

export default function nLightArticle() {
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
            <span className="article-meta__date">March 2, 2025</span>
          </div>
          <h1 className="article-title">
            nLight Surges 770% in Past Year as Defense Sales Jump
          </h1>
          <p className="article-deck">
            The laser manufacturer hit a five-year high on record aerospace and defense revenue,
            as U.S. government demand for directed-energy weapons drove a 60% surge in A&amp;D sales.
          </p>
          <div className="article-tags">
            <span className="work-card__tag">Defense Tech</span>
            <span className="work-card__tag">Lasers</span>
            <span className="work-card__tag">Semiconductors</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="article-body">
        <div className="article-container">

          <p className="article-p">
            nLight Inc. (LASR), the Camas, Washington-based manufacturer of high-power lasers
            for chipmaking and defense, reached a five-year high of $62.95 on Feb. 26,
            surging about 770% over the past year.
          </p>

          <p className="article-p">
            The company reported 2025 revenue of about $261 million, up 32%, with Aerospace
            and Defense sales surging 60% to a record $175 million. Their high-power directed
            energy lasers and sensing technology are used in laser weapons for the A&amp;D market.
          </p>

          <p className="article-p">
            The U.S. government was its largest customer, accounting for 35% of revenue,
            with much of the remainder tied to defense contractors, according to Bloomberg
            supply-chain data.
          </p>

          <p className="article-p">
            While the company remains unprofitable — reporting an adjusted net loss of
            $21.5 million in 2025 — analysts expect earnings to turn positive in 2026.
            During the last quarter, nLight exited cutting and welding as it sharpened
            its focus on defense applications.
          </p>

          <blockquote className="article-quote">
            <p>
              "The funded backlog stood at about $162 million as of Dec. 31, 2025.
              Aerospace and defense sales are projected to rise at a double-digit pace."
            </p>
            <cite>— Joseph Corso, CFO, nLight Inc.</cite>
          </blockquote>

          <p className="article-p">
            The company expects total revenue to grow in 2026. CFO Joseph Corso pointed to
            the $162 million funded backlog as evidence of durable demand from government
            and defense-contractor customers, with double-digit A&amp;D growth expected
            to continue as directed-energy programs expand.
          </p>

        </div>
      </div>
    </main>
  );
}
