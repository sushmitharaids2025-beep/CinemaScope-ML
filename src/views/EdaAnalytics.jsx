import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Network,
  FileQuestion,
  HelpCircle,
  Filter,
  Info,
  CheckCircle2,
  AlertCircle,
  Sliders,
  DollarSign
} from 'lucide-react';
import {
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from 'recharts';
import {
  REVENUE_DISTRIBUTION_ORIGINAL,
  REVENUE_DISTRIBUTION_LOG,
  BUDGET_VS_REVENUE_POINTS,
  CORRELATION_FEATURES,
  CORRELATION_MATRIX,
  EDA_INSIGHT_CARDS
} from '../data/edaData';
import { MISSING_VALUES_DATA } from '../data/datasetInfo';

export default function EdaAnalytics() {
  const [revenueScale, setRevenueScale] = useState('original'); // 'original' or 'log'
  const [scatterGenreFilter, setScatterGenreFilter] = useState('All');

  // Filter scatter data by genre
  const filteredScatter = scatterGenreFilter === 'All'
    ? BUDGET_VS_REVENUE_POINTS
    : BUDGET_VS_REVENUE_POINTS.filter((p) => p.genre === scatterGenreFilter);

  // Genres available in scatter
  const scatterGenres = ['All', 'Action', 'Sci-Fi', 'Drama', 'Horror', 'Comedy', 'Animation'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-white font-display">
            Exploratory Data Analysis (EDA) & Feature Insights
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Sections 1, 2, 3, 4 & 12
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Deep statistical breakdown of the 439,734 movies in the TMDB–IMDb merged dataset.
        </p>
      </div>

      {/* SECTION 12: 4 EDA INSIGHT CARDS */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          Key EDA Takeaways & Preprocessing Directives
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EDA_INSIGHT_CARDS.map((card) => {
            return (
              <div
                key={card.id}
                className={`p-4 rounded-2xl bg-gradient-to-b ${card.color} bg-slate-900/90 border ${card.border} backdrop-blur-md shadow-lg flex flex-col justify-between space-y-3`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-white">{card.title}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 ${card.accent}`}>
                      {card.badge}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">{card.headline}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{card.summary}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300 block mb-0.5">ML Impact:</span>
                  {card.action}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: REVENUE DISTRIBUTION HISTOGRAM */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <h3 className="text-base font-bold text-white font-display">
                Section 1 — Revenue Distribution
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Revenue is extremely right-skewed, with most movies clustered near low revenue and a small number of movies achieving very high revenue.
            </p>
          </div>

          {/* Scale Toggle: Original vs Log Revenue */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
            <button
              onClick={() => setRevenueScale('original')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                revenueScale === 'original'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Original Revenue (Skewed)
            </button>
            <button
              onClick={() => setRevenueScale('log')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                revenueScale === 'log'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Log Revenue (log1p Normalized)
            </button>
          </div>
        </div>

        {/* Histogram Chart */}
        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            {revenueScale === 'original' ? (
              <BarChart data={REVENUE_DISTRIBUTION_ORIGINAL} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis
                  dataKey="range"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(val, name, item) => [
                    `${val.toLocaleString()} titles (${item.payload.percentage})`,
                    'Count'
                  ]}
                  labelFormatter={(label) => `Revenue Bracket: ${label}`}
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]}>
                  {REVENUE_DISTRIBUTION_ORIGINAL.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? '#6366f1' : index > 5 ? '#a855f7' : '#818cf8'}
                    />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <BarChart data={REVENUE_DISTRIBUTION_LOG} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis
                  dataKey="range"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(val) => [`${val.toLocaleString()} movies`, 'Density Count']}
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="count" fill="#10b981" radius={[6, 6, 0, 0]}>
                  {REVENUE_DISTRIBUTION_LOG.map((entry, index) => (
                    <Cell
                      key={`cell-log-${index}`}
                      fill={index === 4 || index === 3 ? '#10b981' : '#34d399'}
                    />
                  ))}
                </Bar>
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <p>
            <strong>Statistical Insight:</strong> In the original distribution, 64.7% of all recorded films cluster in the lowest bracket (&lt; $5M). Applying the <code>log1p(Revenue)</code> transformation produces the Gaussian-like distribution shown in the Log toggle, preventing gradient instability in regression.
          </p>
        </div>
      </div>

      {/* SECTION 2: BUDGET VS REVENUE SCATTER PLOT */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-bold text-white font-display">
                Section 2 — Budget vs Revenue
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              X-axis: Budget ($M) • Y-axis: Worldwide Gross Revenue ($M)
            </p>
          </div>

          {/* Genre Filter for Scatter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Filter Genre:</span>
            <select
              value={scatterGenreFilter}
              onChange={(e) => setScatterGenreFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              {scatterGenres.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Insight Highlight Box */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Key Insight:</strong> Budget alone is not a reliable predictor of movie success. A multi-feature ML model is required.
          </span>
        </div>

        {/* Scatter Chart */}
        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis
                type="number"
                dataKey="budget"
                name="Budget"
                unit="M"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                domain={[0, 380]}
                label={{ value: 'Budget ($ Millions USD)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 11 }}
              />
              <YAxis
                type="number"
                dataKey="revenue"
                name="Revenue"
                unit="M"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                domain={[0, 3100]}
                label={{ value: 'Revenue ($ Millions USD)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
              />
              <ZAxis range={[60, 60]} />
              <Tooltip
                cursor={{ strokeDasharray: '3 3', stroke: '#6366f1' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-700 shadow-2xl text-xs space-y-1">
                        <p className="font-bold text-white text-sm">{data.title} ({data.year})</p>
                        <p className="text-slate-400">Genre: <span className="text-indigo-400">{data.genre}</span></p>
                        <p className="text-emerald-400">Budget: ${data.budget}M → Revenue: ${data.revenue}M</p>
                        <p className="text-purple-300">ROI Multiple: {data.roi} ({data.status})</p>
                        <p className="text-amber-400">IMDb Rating: {data.rating}/10</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter name="Movies" data={filteredScatter} fill="#6366f1">
                {filteredScatter.map((entry, index) => {
                  const isBomb = entry.revenue < entry.budget * 1.5;
                  const isHuge = entry.revenue > 1200;
                  return (
                    <Cell
                      key={`scatter-cell-${index}`}
                      fill={isBomb ? '#f43f5e' : isHuge ? '#10b981' : '#818cf8'}
                    />
                  );
                })}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800 gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Mega Blockbuster / High ROI</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Profitable Theatrical</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> High-Budget Box Office Bomb</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Interactive Tooltip Enabled</span>
        </div>
      </div>

      {/* SECTION 3 & SECTION 4: CORRELATION HEATMAP & MISSING VALUES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SECTION 3: CORRELATION HEATMAP (6 cols) */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-purple-400" />
              <h3 className="text-base font-bold text-white font-display">
                Section 3 — Correlation Analysis
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Pearson correlation matrix across continuous numeric dataset features
            </p>
          </div>

          {/* Highlight Callout */}
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-purple-300">
              <AlertCircle className="w-4 h-4" />
              <span>Redundancy Detection: vote_count & numVotes correlation = 0.91</span>
            </div>
            <p className="text-[11px] text-slate-300">
              High correlation indicates possible redundancy; one feature may be removed before model training to eliminate multicollinearity.
            </p>
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs">
              <thead>
                <tr>
                  <th className="p-1 text-left text-[10px] text-slate-400">Feature</th>
                  {CORRELATION_FEATURES.map((f, i) => (
                    <th key={i} className="p-1 text-[10px] text-slate-400 font-semibold truncate max-w-[50px]">
                      {f.replace('Average Rating', 'Rating').replace('Vote Count', 'Votes')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CORRELATION_MATRIX.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    <td className="p-1.5 text-left text-[11px] font-semibold text-slate-300 whitespace-nowrap">
                      {CORRELATION_FEATURES[rowIdx]}
                    </td>
                    {row.map((val, colIdx) => {
                      const isHighRedundancy = (rowIdx === 4 && colIdx === 6) || (rowIdx === 6 && colIdx === 4);
                      const isSelf = rowIdx === colIdx;

                      let bgClass = "bg-slate-950 text-slate-400";
                      if (isSelf) {
                        bgClass = "bg-indigo-600 text-white font-bold";
                      } else if (isHighRedundancy) {
                        bgClass = "bg-rose-500 text-white font-black ring-2 ring-rose-400 animate-pulse";
                      } else if (val >= 0.7) {
                        bgClass = "bg-indigo-700/80 text-white font-semibold";
                      } else if (val >= 0.5) {
                        bgClass = "bg-indigo-900/60 text-indigo-200";
                      } else if (val >= 0.25) {
                        bgClass = "bg-slate-800 text-slate-300";
                      }

                      return (
                        <td key={colIdx} className="p-1">
                          <div className={`py-1 px-1.5 rounded text-[10px] font-mono transition ${bgClass}`}>
                            {val.toFixed(2)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: MISSING VALUES (6 cols) */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <FileQuestion className="w-4 h-4 text-rose-400" />
              <h3 className="text-base font-bold text-white font-display">
                Section 4 — Missing Values Analysis
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Missingness frequency and data imputation strategy across columns
            </p>
          </div>

          {/* Explanation Box */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
            <p className="font-semibold text-white">Data Cleaning Directive:</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              High-missingness and low-relevance fields should be removed, while useful fields may be imputed.
            </p>
          </div>

          {/* Horizontal Bar Chart */}
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={MISSING_VALUES_DATA}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis
                  type="number"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                />
                <YAxis
                  type="category"
                  dataKey="feature"
                  tick={{ fill: '#e2e8f0', fontSize: 11 }}
                />
                <Tooltip
                  formatter={(val, name, item) => [
                    `${val.toLocaleString()} missing (${item.payload.percentage}%)`,
                    'Missing Count'
                  ]}
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="missingCount" radius={[0, 6, 6, 0]}>
                  {MISSING_VALUES_DATA.map((entry, index) => (
                    <Cell key={`cell-missing-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Exact values listed as required by prompt */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[11px] font-mono">
            {MISSING_VALUES_DATA.map((item, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="text-slate-400 block truncate">{item.feature}:</span>
                <span className="text-white font-bold">{item.missingCount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
