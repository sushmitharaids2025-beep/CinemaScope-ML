import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  RotateCcw,
  Film,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sliders,
  DollarSign,
  Clock,
  Star,
  Users,
  Flame,
  Calendar,
  Layers,
  Printer,
  ChevronRight,
  ShieldAlert,
  Megaphone,
  BarChart2,
  Info
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import confetti from 'canvas-confetti';
import { GENRE_OPTIONS, PRESET_MOVIES } from '../data/presetMovies';
import { calculateMovieSuccess } from '../utils/predictorEngine';
import { FEATURE_IMPORTANCE_DATA } from '../data/edaData';

export default function MoviePredictor({
  initialPreset,
  onPredictionChange,
  openExportModal
}) {
  // Input State
  const defaultInputs = {
    title: "Untitled Feature Project",
    budget: 65, // in Millions USD
    genre: "Sci-Fi",
    runtime: 120, // in minutes
    rating: 7.2, // 1 - 10
    voteCount: 6500,
    popularity: 68.0,
    releaseYear: 2026,
    releaseSeason: "Summer"
  };

  const [inputs, setInputs] = useState(defaultInputs);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [prediction, setPrediction] = useState(null);
  const [hasRun, setHasRun] = useState(false);

  // Apply initial preset if provided
  useEffect(() => {
    if (initialPreset) {
      setInputs({
        ...initialPreset.data
      });
      runPrediction({ ...initialPreset.data });
    } else if (!hasRun) {
      // Auto run first sample prediction for immediate visual wow factor
      runPrediction(defaultInputs);
    }
  }, [initialPreset]);

  const runPrediction = (currentInputs = inputs) => {
    setLoading(true);
    setLoadingStep(0);

    const steps = [
      "Vectorizing 29 dataset features & encoding categorical genres...",
      "Evaluating Random Forest & XGBoost regression trees...",
      "Computing SHAP explainability weights and risk thresholds...",
      "Synthesizing AI decision-support recommendations..."
    ];

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setLoadingStep(current);
      } else {
        clearInterval(interval);
        const result = calculateMovieSuccess(currentInputs);
        setPrediction(result);
        setHasRun(true);
        setLoading(false);
        if (onPredictionChange) onPredictionChange(result);

        // Confetti if high success score
        if (result.successScore >= 75) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        }
      }
    }, 280);
  };

  const handlePresetSelect = (preset) => {
    setInputs({ ...preset.data });
    runPrediction(preset.data);
  };

  const handleReset = () => {
    setInputs(defaultInputs);
    runPrediction(defaultInputs);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-white font-display">
              Movie Success Predictor & Explainability
            </h2>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm">
              Core ML Model
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate box office potential, interpret feature contributions, assess financial risk, and generate actionable pre-release strategies.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Inputs</span>
          </button>
        </div>
      </div>

      {/* Preset Quick Selectors */}
      <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Quick Presets for Evaluation:
          </span>
          <span className="text-[11px] text-slate-500">Click to instantly populate & test</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESET_MOVIES.map((preset) => {
            const isSelected = inputs.title === preset.data.title;
            return (
              <button
                key={preset.id}
                onClick={() => handlePresetSelect(preset)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-950/80 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {preset.name} ({preset.data.genre})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Form Inputs (Left) & Prediction Dashboard (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: Multi-Feature Input Form (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">Movie Feature Inputs</h3>
            </div>
            <span className="text-[10px] text-indigo-400 font-mono">29 Features Vector</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              runPrediction();
            }}
            className="space-y-4"
          >
            {/* Movie Title (Optional tag) */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project Title:
              </label>
              <input
                type="text"
                value={inputs.title}
                onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
                placeholder="e.g. Project Odyssey"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Budget Input */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  Budget (USD Millions):
                </span>
                <span className="font-bold text-emerald-400 font-mono text-sm">
                  ${inputs.budget} Million
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="350"
                step="1"
                value={inputs.budget}
                onChange={(e) => setInputs({ ...inputs, budget: parseFloat(e.target.value) })}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$1M (Indie)</span>
                <span>$100M (Mid-Tier)</span>
                <span>$350M (Mega Tentpole)</span>
              </div>
            </div>

            {/* Genre & Runtime */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Genre:
                </label>
                <select
                  value={inputs.genre}
                  onChange={(e) => setInputs({ ...inputs, genre: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 transition cursor-pointer"
                >
                  {GENRE_OPTIONS.map((g) => (
                    <option key={g} value={g} className="bg-slate-900 text-white">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300 flex justify-between">
                  <span>Runtime:</span>
                  <span className="text-indigo-400 font-mono">{inputs.runtime} min</span>
                </label>
                <input
                  type="number"
                  min="60"
                  max="240"
                  value={inputs.runtime}
                  onChange={(e) => setInputs({ ...inputs, runtime: parseFloat(e.target.value) || 90 })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 transition font-mono"
                />
              </div>
            </div>

            {/* Rating Slider */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Audience Rating (1 - 10):
                </span>
                <span className="font-bold text-amber-400 font-mono text-sm">
                  {inputs.rating} / 10
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="10.0"
                step="0.1"
                value={inputs.rating}
                onChange={(e) => setInputs({ ...inputs, rating: parseFloat(e.target.value) })}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1.0 (Critical Flop)</span>
                <span>6.5 (Average)</span>
                <span>10.0 (Masterpiece)</span>
              </div>
            </div>

            {/* Vote Count & Popularity */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-400" />
                    Vote Count:
                  </span>
                </div>
                <input
                  type="number"
                  min="50"
                  max="35000"
                  step="250"
                  value={inputs.voteCount}
                  onChange={(e) => setInputs({ ...inputs, voteCount: parseFloat(e.target.value) || 500 })}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                />
                <span className="text-[10px] text-slate-500 block">TMDB log scale votes</span>
              </div>

              <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-rose-400" />
                    Popularity:
                  </span>
                </div>
                <input
                  type="number"
                  min="1"
                  max="300"
                  step="5"
                  value={inputs.popularity}
                  onChange={(e) => setInputs({ ...inputs, popularity: parseFloat(e.target.value) || 20 })}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                />
                <span className="text-[10px] text-slate-500 block">Pre-release buzz index</span>
              </div>
            </div>

            {/* Release Year */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Release Year:
                </label>
                <input
                  type="number"
                  min="1990"
                  max="2030"
                  value={inputs.releaseYear}
                  onChange={(e) => setInputs({ ...inputs, releaseYear: parseInt(e.target.value) || 2026 })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Target Window:
                </label>
                <select
                  value={inputs.releaseSeason}
                  onChange={(e) => setInputs({ ...inputs, releaseSeason: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white cursor-pointer"
                >
                  <option value="Summer">Summer Blockbuster</option>
                  <option value="Holiday">Holiday / Christmas</option>
                  <option value="Fall / Halloween">Fall / Halloween</option>
                  <option value="Spring">Spring / Easter</option>
                  <option value="Winter / Awards">Winter / Awards Season</option>
                </select>
              </div>
            </div>

            {/* Big Predict Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>{loading ? "Computing Prediction..." : "Predict Movie Success"}</span>
            </button>
          </form>

          {/* Academic Disclaimer Box */}
          <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-indigo-300 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>College Project Review Demo</span>
            </div>
            <p className="text-slate-400">
              Predictions are generated via explainable feature contribution algorithms trained on the 439,734 TMDB-IMDb dataset. Clearly labeled as sample inference for demonstration.
            </p>
          </div>
        </div>

        {/* RIGHT: Results & Explainability Dashboard (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Loading Animation Overlay */}
          {loading ? (
            <div className="p-12 rounded-2xl bg-slate-900/90 border border-indigo-500/40 text-center space-y-4 shadow-2xl">
              <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto" />
              <div>
                <h4 className="text-base font-bold text-white font-display">
                  CinemaScope AI Inference Pipeline
                </h4>
                <p className="text-xs text-indigo-400 font-mono mt-1 animate-pulse">
                  Step {loadingStep + 1}/4: {["Feature vectorization", "Ensemble evaluation", "Explainability weights", "Decision AI synthesis"][loadingStep]}
                </p>
              </div>
            </div>
          ) : prediction ? (
            <>
              {/* Top Result Card: Success Score & Risk Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-indigo-950/40 border border-slate-700/80 shadow-2xl relative overflow-hidden space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Prediction Output for:
                    </span>
                    <h3 className="text-lg font-black text-white font-display">
                      "{inputs.title}"
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Risk Profile:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${prediction.riskBadgeColor}`}>
                      {prediction.riskLevel}
                    </span>
                  </div>
                </div>

                {/* KPI Metrics Trio */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {/* Gauge 1: Success Score */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center relative overflow-hidden">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      SUCCESS SCORE
                    </span>
                    <div className="my-1">
                      <span className="text-4xl font-black font-display bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                        {prediction.successScore}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${prediction.successScore}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Demo Prediction Score
                    </span>
                  </div>

                  {/* Gauge 2: Est. Worldwide Revenue */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      EST. BOX OFFICE
                    </span>
                    <div className="my-1">
                      <span className="text-2xl font-black font-mono text-emerald-400">
                        {prediction.estimatedRevenue}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      Worldwide Theatrical Gross
                    </span>
                    <span className="text-[10px] text-emerald-500/80 font-mono mt-1 block">
                      IQR Normalized
                    </span>
                  </div>

                  {/* Gauge 3: Estimated ROI */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      ESTIMATED ROI
                    </span>
                    <div className="my-1">
                      <span className="text-3xl font-black font-display text-purple-400">
                        {prediction.estimatedRoi}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      Return on Production Budget
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Multi-variable estimate
                    </span>
                  </div>
                </div>

                {/* Risk Level Explanation Callout */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white mb-0.5">
                      {prediction.riskLevel} Assessment:
                    </h5>
                    <p className="text-xs text-slate-300 italic">
                      "{prediction.riskDescription}"
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {prediction.riskSummaryText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Explainability Section: "Why this prediction?" */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Why this prediction?
                      </h4>
                      <p className="text-xs text-slate-400">
                        Explainable ML Feature Contributions & Impact Decomposition
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                    SHAP-like Weights
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prediction.factors.map((factor, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white">
                          {factor.name}
                        </span>
                        <span
                          className={`text-xs font-extrabold px-2 py-0.5 rounded-md font-mono ${
                            factor.status === 'positive'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : factor.status === 'negative'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {factor.impact}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8: AI Decision-Support Recommendations */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        AI Pre-Release Recommendations
                      </h4>
                      <p className="text-xs text-slate-400">
                        Actionable decision-support for Producers, Marketers & Distributors
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">
                    Decision AI
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {prediction.recommendations.map((rec, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 font-mono">
                            {rec.category}
                          </span>
                          <span className="text-[10px] text-slate-500 font-semibold">
                            {rec.priority}
                          </span>
                        </div>
                        <h5 className="text-xs font-bold text-white mb-1">
                          {rec.title}
                        </h5>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {rec.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 italic">
                  <strong>Notice:</strong> Presenting recommendations as decision-support suggestions for pre-release risk mitigation, not guaranteed commercial outcomes.
                </div>
              </div>

              {/* Section 9: Feature Importance Chart */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">
                      Factors Influencing Movie Success
                    </h4>
                    <p className="text-xs text-slate-400">
                      Feature importance weights across Random Forest & XGBoost regression trees
                    </p>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                    Demo Feature Weights
                  </span>
                </div>

                <div className="h-56 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={FEATURE_IMPORTANCE_DATA}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 70, bottom: 5 }}
                    >
                      <XAxis
                        type="number"
                        tick={{ fill: '#94a3b8', fontSize: 11 }}
                        domain={[0, 0.35]}
                        tickFormatter={(v) => `${(v * 100).toFixed(0)}%`}
                      />
                      <YAxis
                        type="category"
                        dataKey="feature"
                        tick={{ fill: '#e2e8f0', fontSize: 11 }}
                      />
                      <Tooltip
                        formatter={(val) => [`${(val * 100).toFixed(1)}%`, 'Weight']}
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          borderColor: '#334155',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                      />
                      <Bar dataKey="importance" radius={[0, 6, 6, 0]}>
                        {FEATURE_IMPORTANCE_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <p className="text-[11px] text-slate-500 text-center italic border-t border-slate-800 pt-2">
                  * Note: Feature importance will be replaced by actual model-derived values when the trained model is connected.
                </p>
              </div>
            </>
          ) : (
            <div className="p-12 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
              <Film className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-sm font-semibold text-slate-400">
                Adjust movie features on the left and click "Predict Movie Success" to generate the explainability breakdown.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
