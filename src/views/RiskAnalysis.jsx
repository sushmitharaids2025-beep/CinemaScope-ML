import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  PieChart as PieChartIcon,
  TrendingUp,
  Info,
  Sliders,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { RISK_DISTRIBUTION_DEMO } from '../data/edaData';

export default function RiskAnalysis({ setActiveTab }) {
  const [activeRiskTab, setActiveRiskTab] = useState('all');

  const riskCards = [
    {
      id: "low",
      title: "LOW RISK",
      subtitle: "Favorable Box Office Profile",
      description: "Expected stronger performance based on selected input factors.",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/40",
      textAccent: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      icon: ShieldCheck,
      keyCriteria: [
        "High Popularity / Organic Buzz index relative to budget",
        "Strong Audience Rating (> 7.2/10) or favorable genre multiplier",
        "Well-controlled production expenditure (< $40M for indies, or high presales)",
        "Optimal theatrical runtime (100 - 135 mins) maximizing daily screenings"
      ],
      action: "Proceed with standard theatrical windowing and prime holiday/summer slots."
    },
    {
      id: "moderate",
      title: "MODERATE RISK",
      subtitle: "Conditional Market Viability",
      description: "Some factors require attention before release.",
      color: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/40",
      textAccent: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      icon: AlertTriangle,
      keyCriteria: [
        "Mid-tier budget ($40M - $90M) facing heavy marquee competition",
        "Moderate audience sentiment scores (6.0 - 7.1/10)",
        "Sub-optimal release window or crowded theatrical calendar",
        "Uneven trailer engagement requiring intensified digital marketing push"
      ],
      action: "Conduct test-screenings and focus marketing dollars on opening weekend conversion."
    },
    {
      id: "high",
      title: "HIGH RISK",
      subtitle: "Capital Exposure Concern",
      description: "Multiple factors indicate potential performance concerns.",
      color: "from-rose-500/20 to-pink-500/10",
      border: "border-rose-500/40",
      textAccent: "text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      icon: AlertOctagon,
      keyCriteria: [
        "High budget expenditure ($150M+) with low pre-release popularity index",
        "Weak audience response metrics or polarized test-screening ratings (< 6.0/10)",
        "Excessive runtime (> 155 mins) causing daily showtime reduction",
        "Low vote counts indicating weak opening awareness"
      ],
      action: "Restructure marketing campaign, consider international pre-sales, or adjust release date."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-white font-display">
            Pre-Release Risk Analysis & Classification
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Section 7
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Multivariate risk modeling to prevent box office losses and protect production capital.
        </p>
      </div>

      {/* 3 Visual Risk Profile Cards (Section 7) */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          Performance Risk Tiers (Decision Taxonomy)
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {riskCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`p-5 rounded-2xl bg-gradient-to-b ${card.color} bg-slate-900/90 border ${card.border} backdrop-blur-md shadow-xl flex flex-col justify-between space-y-4`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${card.badgeBg}`}>
                      {card.title}
                    </span>
                    <Icon className={`w-5 h-5 ${card.textAccent}`} />
                  </div>

                  <h4 className="text-base font-bold text-white font-display">
                    {card.subtitle}
                  </h4>

                  <p className="text-xs text-slate-200 mt-2 font-medium italic p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    "{card.description}"
                  </p>

                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Identifying Factors:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {card.keyCriteria.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${card.textAccent} bg-current`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <span className="font-bold text-slate-400 text-[10px] uppercase block">
                    Strategic Action:
                  </span>
                  <p className="text-slate-300 mt-0.5">{card.action}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Donut Chart: Risk Distribution Across TMDB-IMDb Dataset */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Donut Chart Visual (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <PieChartIcon className="w-4 h-4 text-indigo-400" />
                <h4 className="text-sm font-bold text-white font-display">
                  Dataset Risk Tier Distribution
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                Sample distribution calculated across theatrical releases in TMDB–IMDb
              </p>
            </div>
            <span className="text-[10px] px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold self-start sm:self-auto">
              Demo Sample Data
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={RISK_DISTRIBUTION_DEMO}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {RISK_DISTRIBUTION_DEMO.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value}% (~${props.payload.count.toLocaleString()} movies)`,
                    name
                  ]}
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  formatter={(value) => <span className="text-slate-300 text-xs">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-slate-400 italic">
            * Clearly labeled as DEMO sample data for college project review demonstration.
          </div>
        </div>

        {/* Risk Threshold Matrix (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-indigo-400 border-b border-slate-800 pb-3">
            <Sliders className="w-4 h-4" />
            <h4 className="text-sm font-bold text-white">Risk Boundary Thresholds</h4>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-emerald-400">Low Risk Threshold</span>
                <span className="text-slate-300 font-mono">Score ≥ 70%</span>
              </div>
              <p className="text-[11px] text-slate-400">
                High popularity ratio, positive rating trends, and safe ROI margins.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-amber-400">Moderate Risk Threshold</span>
                <span className="text-slate-300 font-mono">45% ≤ Score &lt; 70%</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Borderline buzz or competitive release windows requiring marketing adjustments.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-rose-400">High Risk Threshold</span>
                <span className="text-slate-300 font-mono">Score &lt; 45%</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Significant capital exposure ($150M+) with low engagement or ratings &lt; 6.0.
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('predictor')}
            className="w-full py-2.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-bold transition flex items-center justify-center gap-2"
          >
            <span>Test a Movie in Predictor</span>
            <TrendingUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
