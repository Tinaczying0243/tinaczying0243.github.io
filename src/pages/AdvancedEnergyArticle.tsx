import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import "./SiliconLabsArticle.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const stockData = [
  { label: "Feb 2024", price: 100, fill: "#D4E2DA" },
  { label: "Feb 2025", price: 250, fill: "#2E6B4F" },
];

const revenueMixData = [
  { name: "Semiconductor Mfg.", value: 50, color: "#2E6B4F" },
  { name: "Data Center", value: 33, color: "#4A9470" },
  { name: "Industrial & Other", value: 17, color: "#D4E2DA" },
];

const dataCenterGrowthData = [
  { year: "2024", revenue: 284 },
  { year: "2025", revenue: 587 },
];

// ── Custom tooltips ────────────────────────────────────────────────────────────

function StockTooltip({ active, payload }: any) {
  if (active && payload?.length) {
    const isCurrent = payload[0].payload.label === "Feb 2025";
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__value">
          {isCurrent ? "+150% (~$330/share)" : "Baseline (12 mo. ago)"}
        </p>
      </div>
    );
  }
  return null;
}

function RevenueTooltip({ active, payload }: any) {
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

function DataCenterTooltip({ active, payload, label }: any) {
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

export default function AdvancedEnergyArticle() {
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

          {/* Chart 1: Stock performance */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">AEIS Share Price</span>
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
                    domain={[0, 300]}
                    tick={{ fontSize: 12, fill: "#8AA398", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false} width={32}
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
              <span className="chart-block__callout-number">+150%</span>
              <span className="chart-block__callout-text">12-month gain · outpacing semiconductor peers</span>
            </div>
          </figure>

          <p className="article-p">
            The company reported about $1.8 billion in 2025 revenue, up 21%. Nearly half of
            sales came from semiconductor manufacturing, while data-center revenue rose 107%
            to about $587 million, accounting for 33% of total revenue.
          </p>

          {/* Chart 2: Revenue mix */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">AEIS Revenue by End Market (2025)</span>
              <span className="chart-block__note">$1.8B total · approximate share</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--pie">
              <ResponsiveContainer width="100%" height={270}>
                <PieChart>
                  <Pie
                    data={revenueMixData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={105}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {revenueMixData.map((entry, i) => (
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
                  <Tooltip content={<RevenueTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </figure>

          {/* Chart 3: Data center YoY growth */}
          <figure className="chart-block">
            <figcaption className="chart-block__caption">
              <span className="chart-block__label">Data-Center Revenue</span>
              <span className="chart-block__note">Year-over-year · millions USD</span>
            </figcaption>
            <div className="chart-block__inner chart-block__inner--sm">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={dataCenterGrowthData} barSize={64} margin={{ top: 16, right: 24, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="#D4E2DA" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 13, fill: "#4A6158", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false}
                  />
                  <YAxis
                    domain={[0, 700]}
                    tickFormatter={(v) => `$${v}M`}
                    tick={{ fontSize: 12, fill: "#8AA398", fontFamily: "Inter, sans-serif" }}
                    axisLine={false} tickLine={false} width={52}
                  />
                  <Tooltip content={<DataCenterTooltip />} cursor={{ fill: "rgba(46,107,79,0.05)" }} />
                  <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                    <Cell fill="#D4E2DA" />
                    <Cell fill="#2E6B4F" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-block__callout">
              <span className="chart-block__callout-number">+107%</span>
              <span className="chart-block__callout-text">data-center revenue growth year-over-year</span>
            </div>
          </figure>

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
