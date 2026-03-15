import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import "./SiliconLabsArticle.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const stockMoveData = [
  { label: "Before\nAnnouncement", price: 100, fill: "#D4E2DA" },
  { label: "After\nAnnouncement", price: 149, fill: "#2E6B4F" },
];

const revenueData = [
  { name: "Industrial", value: 36, color: "#2E6B4F" },
  { name: "Automotive", value: 30, color: "#4A9470" },
  { name: "Personal Electronics", value: 18, color: "#D4E2DA" },
  { name: "Communications & Other", value: 16, color: "#EDF3EF" },
];

const savingsData = [
  { year: "Year 1", savings: 150 },
  { year: "Year 2", savings: 300 },
  { year: "Year 3+", savings: 450 },
];

// ── Custom tooltip ─────────────────────────────────────────────────────────────

function SavingsTooltip({ active, payload, label }: any) {
  if (active && payload?.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__label">{label}</p>
        <p className="chart-tooltip__value">${payload[0].value}M/yr</p>
      </div>
    );
  }
  return null;
}

function StockTooltip({ active, payload }: any) {
  if (active && payload?.length) {
    const isAfter = payload[0].payload.label.startsWith("After");
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__value">
          {isAfter ? "+49% ($149 indexed)" : "Baseline ($100 indexed)"}
        </p>
      </div>
    );
  }
  return null;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SiliconLabsArticle() {
  const navigate = useNavigate();
  return (
    <main className="page-enter article-page">

      {/* HEADER */}
      <header className="article-header">
        <div className="article-container">
          <button className="article-back" onClick={() => navigate(-1)}>← Back</button>
          <div className="article-meta">
            <span className="article-meta__type">News Clip</span>
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

          {/* ── Paragraph 1 ── */}
          <p className="article-p">
            Silicon Laboratories shares jumped 49% to a four-year high on Feb. 4 after Texas
            Instruments agreed to buy the chip designer for $7.5 billion in cash, seeking to
            expand its wireless connectivity business.
          </p>

          {/* ── Chart 1: Stock Surge ── */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">Silicon Labs Share Price</span>
              <span className="chart-block__note">Indexed to pre-announcement close · Feb. 4, 2025</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--sm">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={stockMoveData} barSize={72} margin={{ top: 16, right: 24, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="#D4E2DA" />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 13, fill: "#4A6158", fontFamily: "Inter, sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 180]}
                    tickFormatter={(v) => `${v}`}
                    tick={{ fontSize: 12, fill: "#8AA398", fontFamily: "Inter, sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    width={32}
                  />
                  <Tooltip content={<StockTooltip />} cursor={{ fill: "rgba(46,107,79,0.05)" }} />
                  <Bar dataKey="price" radius={[4, 4, 0, 0]}>
                    {stockMoveData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-block__callout">
              <span className="chart-block__callout-number">+49%</span>
              <span className="chart-block__callout-text">single-session gain · 4-year high</span>
            </div>
          </figure>

          {/* ── Paragraph 2 ── */}
          <p className="article-p">
            The deal brings Silicon Labs' wireless portfolio into Texas Instruments, an analog
            and embedded semiconductor supplier seeking to deepen its position in
            Internet-of-Things markets such as electric vehicles, smart-home systems and medical
            devices. The acquisition adds roughly 1,200 wireless products to Texas Instruments'
            lineup, according to company disclosures.
          </p>

          {/* ── Paragraph 3 ── */}
          <p className="article-p">
            For Texas Instruments, the acquisition marks its biggest transaction since the
            $6.5 billion acquisition of National Semiconductor in 2011.
          </p>

          {/* ── Paragraph 4 (revenue) ── */}
          <p className="article-p">
            Bloomberg Intelligence analysts say the company's long-term growth remains tied to
            a sustained recovery in industrial and automotive markets, which together account
            for roughly 66% of revenue.
          </p>

          {/* ── Chart 3: Revenue Breakdown ── */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">Texas Instruments Revenue by End Market</span>
              <span className="chart-block__note">Approximate share · Bloomberg Intelligence</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--pie">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    innerRadius={68}
                    outerRadius={108}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {revenueData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => (
                      <span style={{ fontSize: "0.82rem", color: "#4A6158", fontFamily: "Inter, sans-serif" }}>
                        {value}
                      </span>
                    )}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Revenue share"]}
                    contentStyle={{
                      fontSize: "0.82rem",
                      fontFamily: "Inter, sans-serif",
                      border: "1px solid #D4E2DA",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-block__callout">
              <span className="chart-block__callout-number">66%</span>
              <span className="chart-block__callout-text">of TI revenue from industrial &amp; automotive markets</span>
            </div>
          </figure>

          {/* ── Paragraph 5 (CEO quote + savings) ── */}
          <p className="article-p">
            Chief Executive Officer Haviv Ilan said the deal is expected to generate more than
            $450 million in annual cost savings within three years of closing.
          </p>

          {/* ── Chart 4: Savings Ramp ── */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">Projected Annual Cost Savings</span>
              <span className="chart-block__note">TI management guidance · millions USD per year</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--sm">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={savingsData} barSize={56} margin={{ top: 16, right: 24, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="#D4E2DA" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 13, fill: "#4A6158", fontFamily: "Inter, sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 500]}
                    tickFormatter={(v) => `$${v}M`}
                    tick={{ fontSize: 12, fill: "#8AA398", fontFamily: "Inter, sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    width={52}
                  />
                  <Tooltip content={<SavingsTooltip />} cursor={{ fill: "rgba(46,107,79,0.05)" }} />
                  <Bar dataKey="savings" fill="#2E6B4F" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </figure>

          {/* ── Pull quote ── */}
          <blockquote className="article-quote">
            <p>
              "They have done the work to build the stack of chips, software and firmware,
              application level, to support hundreds of end equipments. It could take Texas
              Instruments decades to build a comparable ecosystem."
            </p>
            <cite>— Haviv Ilan, CEO, Texas Instruments</cite>
          </blockquote>

          {/* ── Closing paragraph ── */}
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
