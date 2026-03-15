import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend,
} from "recharts";
import "./SiliconLabsArticle.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const stockData = [
  { label: "Feb 2024", price: 100, fill: "#D4E2DA" },
  { label: "Feb 2025", price: 870, fill: "#2E6B4F" },
];

// 2025 revenue: $261M total; A&D $175M; Other = $261M - $175M = $86M
const revenueSegmentData = [
  { year: "2024", ad: 109, other: 89 },  // A&D: $175M / 1.60 = ~$109M; other ~$89M (total ~$198M)
  { year: "2025", ad: 175, other: 86 },
];

// A&D customer mix
const customerMixData = [
  { name: "U.S. Government", value: 35, color: "#2E6B4F" },
  { name: "Defense Contractors & Other", value: 65, color: "#D4E2DA" },
];

// Revenue growth total
const totalRevenueData = [
  { year: "2024", revenue: 198 },
  { year: "2025", revenue: 261 },
];

// ── Custom tooltips ────────────────────────────────────────────────────────────

function StockTooltip({ active, payload }: any) {
  if (active && payload?.length) {
    const isCurrent = payload[0].payload.label === "Feb 2025";
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__value">
          {isCurrent ? "+770% ($62.95 · 5-year high)" : "Baseline (12 mo. ago)"}
        </p>
      </div>
    );
  }
  return null;
}

function SegmentTooltip({ active, payload, label }: any) {
  if (active && payload?.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__label">{label}</p>
        {payload.map((p: any) => (
          <p key={p.dataKey} className="chart-tooltip__value" style={{ color: p.fill }}>
            {p.name}: ${p.value}M
          </p>
        ))}
      </div>
    );
  }
  return null;
}

function CustomerTooltip({ active, payload }: any) {
  if (active && payload?.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__label">{payload[0].payload.name}</p>
        <p className="chart-tooltip__value">{payload[0].value}% of revenue</p>
      </div>
    );
  }
  return null;
}

function RevTooltip({ active, payload, label }: any) {
  if (active && payload?.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__label">{label}</p>
        <p className="chart-tooltip__value">${payload[0].value}M</p>
      </div>
    );
  }
  return null;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function nLightArticle() {
  return (
    <main className="page-enter article-page">

      {/* HEADER */}
      <header className="article-header">
        <div className="article-container">
          <Link to="/news-clips" className="article-back">← News Clips</Link>
          <div className="article-meta">
            <span className="article-meta__type">News Clip</span>
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

          {/* Chart 1: Stock surge */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">LASR Share Price</span>
              <span className="chart-block__note">Indexed to price 12 months prior · Feb. 2025</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--sm">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={stockData} barSize={72} margin={{ top: 16, right: 24, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="#D4E2DA" />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 13, fill: "#4A6158", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false}
                  />
                  <YAxis
                    domain={[0, 1000]}
                    tick={{ fontSize: 12, fill: "#8AA398", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false} width={40}
                  />
                  <Tooltip content={<StockTooltip />} cursor={{ fill: "rgba(46,107,79,0.05)" }} />
                  <Bar dataKey="price" radius={[4, 4, 0, 0]}>
                    {stockData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-block__callout">
              <span className="chart-block__callout-number">+770%</span>
              <span className="chart-block__callout-text">12-month gain · 5-year high at $62.95</span>
            </div>
          </figure>

          <p className="article-p">
            The company reported 2025 revenue of about $261 million, up 32%, with Aerospace
            and Defense sales surging 60% to a record $175 million. Their high-power directed
            energy lasers and sensing technology are used in laser weapons for the A&amp;D market.
          </p>

          {/* Chart 2: Revenue by segment YoY */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">Revenue by Segment</span>
              <span className="chart-block__note">Aerospace &amp; Defense vs. Other · millions USD</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--sm">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={revenueSegmentData} barSize={40} barCategoryGap="35%" margin={{ top: 16, right: 24, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="#D4E2DA" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 13, fill: "#4A6158", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false}
                  />
                  <YAxis
                    domain={[0, 300]}
                    tickFormatter={(v) => `$${v}M`}
                    tick={{ fontSize: 12, fill: "#8AA398", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false} width={52}
                  />
                  <Tooltip content={<SegmentTooltip />} cursor={{ fill: "rgba(46,107,79,0.05)" }} />
                  <Legend
                    iconType="circle" iconSize={8}
                    formatter={(value) => (
                      <span style={{ fontSize: "0.82rem", color: "#4A6158", fontFamily: "Inter, sans-serif" }}>
                        {value === "ad" ? "Aerospace & Defense" : "Other"}
                      </span>
                    )}
                  />
                  <Bar dataKey="ad" name="ad" stackId="a" fill="#2E6B4F" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="other" name="other" stackId="a" fill="#D4E2DA" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-block__callout">
              <span className="chart-block__callout-number">+60%</span>
              <span className="chart-block__callout-text">A&amp;D revenue growth · record $175M in 2025</span>
            </div>
          </figure>

          <p className="article-p">
            The U.S. government was its largest customer, accounting for 35% of revenue,
            with much of the remainder tied to defense contractors, according to Bloomberg
            supply-chain data.
          </p>

          {/* Chart 3: Customer mix */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">Revenue by Customer Type (2025)</span>
              <span className="chart-block__note">Bloomberg supply-chain data</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--pie">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={customerMixData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={98}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {customerMixData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle" iconSize={8}
                    formatter={(value) => (
                      <span style={{ fontSize: "0.82rem", color: "#4A6158", fontFamily: "Inter, sans-serif" }}>
                        {value}
                      </span>
                    )}
                  />
                  <Tooltip content={<CustomerTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-block__callout">
              <span className="chart-block__callout-number">35%</span>
              <span className="chart-block__callout-text">of revenue from U.S. government contracts</span>
            </div>
          </figure>

          <p className="article-p">
            While the company remains unprofitable — reporting an adjusted net loss of
            $21.5 million in 2025 — analysts expect earnings to turn positive in 2026.
            During the last quarter, nLight exited cutting and welding as it sharpened
            its focus on defense applications.
          </p>

          {/* Chart 4: Total revenue growth */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">Total Revenue</span>
              <span className="chart-block__note">Year-over-year · millions USD</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--sm">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={totalRevenueData} barSize={64} margin={{ top: 16, right: 24, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="#D4E2DA" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 13, fill: "#4A6158", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false}
                  />
                  <YAxis
                    domain={[0, 320]}
                    tickFormatter={(v) => `$${v}M`}
                    tick={{ fontSize: 12, fill: "#8AA398", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false} width={52}
                  />
                  <Tooltip content={<RevTooltip />} cursor={{ fill: "rgba(46,107,79,0.05)" }} />
                  <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                    <Cell fill="#D4E2DA" />
                    <Cell fill="#2E6B4F" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </figure>

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
