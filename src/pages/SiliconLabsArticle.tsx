import { useNavigate } from "react-router-dom";
import "./SiliconLabsArticle.css";

export default function SiliconLabsArticle() {
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
            <span className="article-meta__date">February 4, 2025</span>
          </div>
          <h1 className="article-title">
            Silicon Labs Jumps 49% After Texas Instruments Acquisition
          </h1>
          <p className="article-deck">
            Texas Instruments agreed to buy the chip designer for $7.5 billion in cash,
            seeking to expand its wireless connectivity business in IoT markets.
          </p>
          <div className="article-tags">
            <span className="work-card__tag">Semiconductors</span>
            <span className="work-card__tag">M&amp;A</span>
            <span className="work-card__tag">IoT</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="article-body">
        <div className="article-container">

          <p className="article-p">
            Silicon Laboratories shares jumped 49% to a four-year high on Feb. 4 after Texas
            Instruments agreed to buy the chip designer for $7.5 billion in cash, seeking to
            expand its wireless connectivity business.
          </p>

          <p className="article-p">
            The deal brings Silicon Labs' wireless portfolio into Texas Instruments, an analog
            and embedded semiconductor supplier seeking to deepen its position in
            Internet-of-Things markets such as electric vehicles, smart-home systems and medical
            devices. The acquisition adds roughly 1,200 wireless products to Texas Instruments'
            lineup, according to company disclosures.
          </p>

          <p className="article-p">
            For Texas Instruments, the acquisition marks its biggest transaction since the
            $6.5 billion acquisition of National Semiconductor in 2011.
          </p>

          <p className="article-p">
            Bloomberg Intelligence analysts say the company's long-term growth remains tied to
            a sustained recovery in industrial and automotive markets, which together account
            for roughly 66% of revenue.
          </p>

          <p className="article-p">
            Chief Executive Officer Haviv Ilan said the deal is expected to generate more than
            $450 million in annual cost savings within three years of closing.
          </p>

          <blockquote className="article-quote">
            <p>
              "They have done the work to build the stack of chips, software and firmware,
              application level, to support hundreds of end equipments. It could take Texas
              Instruments decades to build a comparable ecosystem."
            </p>
            <cite>— Haviv Ilan, CEO, Texas Instruments</cite>
          </blockquote>

          <p className="article-p">
            Ilan framed Silicon Labs' wireless expertise as a years-long head start that would
            be nearly impossible to replicate organically, adding roughly 1,200 products across
            IoT categories including smart home, industrial automation, and connected medical
            devices to TI's existing lineup.
          </p>

        </div>
      </div>
    </main>
  );
}
