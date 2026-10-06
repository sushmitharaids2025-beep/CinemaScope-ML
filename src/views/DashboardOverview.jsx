import React from 'react';
import {
  Film,
  Database,
  Layers,
  Target,
  Cpu,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  FileSpreadsheet,
  AlertTriangle,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/datasetInfo';
import { PRESET_MOVIES } from '../data/presetMovies';

export default function DashboardOverview({ setActiveTab, onSelectPreset }) {
  const kpiList = [
    {
      title: "Total Movies",
      value: PROJECT_METADATA.kpis.totalMovies,
      subtitle: "TMDB & IMDb Merged",
      icon: Film,
      color: "from-blue-500/20 to-indigo-500/10",
      border: "border-indigo-500/30",
      accent: "text-indigo-400"
    },
    {
      title: "Dataset Features",
      value: PROJECT_METADATA.kpis.features,
      subtitle: "Continuous & Categorical",
      icon: Layers,
      color: "from-purple-500/20 to-pink-500/10",
      border: "border-purple-500/30",
      accent: "text-purple-400"
    },
    {
      title: "Target Variable",
      value: PROJECT_METADATA.kpis.targetVariable,
      subtitle: "Worldwide Gross ($ USD)",
      icon: Target,
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
      accent: "text-emerald-400"
    },
    {
      title: "Problem Type",
      value: PROJECT_METADATA.kpis.problemType,
      subtitle: "Continuous Value Output",
      icon: TrendingUp,
      color: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30",
      accent: "text-cyan-400"
    },
    {
      title: "ML Algorithms",
      value: "RF + XGBoost",
      subtitle: "Ensemble Architecture",
      icon: Cpu,
      color: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/30",
      accent: "text-amber-400"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/70 to-purple-950/60 border border-slate-700/70 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PBL Machine Learning Project Review-II</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Welcome to <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">CinemaScope AI</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Analyze movie characteristics, predict potential success, understand risk factors, and generate actionable recommendations using explainable machine learning.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('predictor')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Movie Predictor</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('eda')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition"
            >
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span>Explore EDA Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('models')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition"
            >
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Model Comparison</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Project Overview & Dataset Metrics
          </h3>
          <span className="text-xs text-slate-500 font-mono">Dataset: TMDB–IMDb Merged</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {kpiList.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl bg-gradient-to-b ${kpi.color} bg-slate-900/80 border ${kpi.border} backdrop-blur-md relative overflow-hidden transition-all duration-200 hover:scale-[1.02] shadow-lg`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-400">{kpi.title}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-800/80 ${kpi.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
                  {kpi.value}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-medium truncate">
                  {kpi.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Interactive Predictor Showcase */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/30 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Quick Test: Movie Success Prediction Presets
              </h3>
              <p className="text-xs text-slate-400">
                Click any scenario below to instantly run the explainability engine and view risk profiles
              </p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold self-start sm:self-auto">
            1-Click Review Demos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRESET_MOVIES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className="p-4 rounded-xl bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 transition-all text-left group flex flex-col justify-between space-y-2"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-xs sm:text-sm text-white group-hover:text-indigo-300 transition">
                    {preset.name}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${preset.badgeColor}`}>
                    {preset.data.genre}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{preset.tagline}</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Budget: ${preset.data.budget}M</span>
                <span>Rating: {preset.data.rating}/10</span>
                <span className="text-indigo-400 font-bold group-hover:translate-x-0.5 transition flex items-center gap-0.5">
                  Predict →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Key Project Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Pillar 1: Explainability Framework */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <Cpu className="w-5 h-5" />
            <h4 className="font-bold text-white text-sm">Explainability Framework</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Unlike opaque black-box models, CinemaScope AI decomposes predictions into clear feature contribution cards (Budget, Rating, Popularity, Runtime, Genre) with directional impacts.
          </p>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between text-slate-400">
              <span>Budget Impact:</span>
              <span className="text-emerald-400">+16% (Controlled cost)</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Popularity Buzz:</span>
              <span className="text-indigo-400">+20% (High organic)</span>
            </div>
          </div>
        </div>

        {/* Pillar 2: Risk Tier Classification */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-amber-400">
            <ShieldAlert className="w-5 h-5" />
            <h4 className="font-bold text-white text-sm">3-Tier Risk Analytics</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Categorizes prospective movie releases into Low, Moderate, and High Risk tiers to guide financial green-lighting and production budgeting before major capital deployment.
          </p>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-bold">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Low Risk
            </div>
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Moderate Risk
            </div>
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
              High Risk
            </div>
          </div>
        </div>

        {/* Pillar 3: AI-Driven Recommendations */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-purple-400">
            <Lightbulb className="w-5 h-5" />
            <h4 className="font-bold text-white text-sm">Actionable Decision AI</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Generates structured decision-support suggestions across Production, Marketing, Theatrical Release timing, and Audience targeting based on detected model risk factors.
          </p>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Decision Domains:</span> Production • Marketing • Release Windows • Audience Appeal
          </div>
        </div>
      </div>
    </div>
  );
}
