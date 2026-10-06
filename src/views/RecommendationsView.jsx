import React, { useState } from 'react';
import {
  Lightbulb,
  Film,
  Megaphone,
  Calendar,
  Users,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Sliders,
  DollarSign,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function RecommendationsView({ setActiveTab }) {
  const [selectedBudgetTier, setSelectedBudgetTier] = useState('mid'); // low, mid, tentpole
  const [selectedGenre, setSelectedGenre] = useState('Sci-Fi');
  const [selectedBuzzTier, setSelectedBuzzTier] = useState('moderate'); // low, moderate, viral

  // Dynamic recommendation builder based on strategy selections
  const getStrategicRecommendations = () => {
    return [
      {
        category: "PRODUCTION",
        title: "Budget Calibration & Cost Controls",
        icon: Film,
        color: "from-blue-500/20 to-indigo-500/10",
        border: "border-indigo-500/30",
        accent: "text-indigo-400",
        text: selectedBudgetTier === 'tentpole'
          ? "Review budget allocation and ensure production spending is aligned with expected audience reach. For tentpoles ($150M+), lock VFX vendor turnover schedules early to prevent $20M+ emergency post-production overruns."
          : (selectedBudgetTier === 'low'
            ? "Agile budget allocation provides strong downside protection. Channel 40% of production savings directly into high-impact sound design and color grading to achieve premium aesthetic."
            : "Review budget allocation and ensure production spending is aligned with expected audience reach. Maintain a 12% contingency buffer for reshoots and final mix tweaks."),
        priority: selectedBudgetTier === 'tentpole' ? "Critical Risk Control" : "Standard Procedure"
      },
      {
        category: "MARKETING",
        title: "Audience Engagement & Viral Acceleration",
        icon: Megaphone,
        color: "from-purple-500/20 to-pink-500/10",
        border: "border-purple-500/30",
        accent: "text-purple-400",
        text: selectedBuzzTier === 'low'
          ? "Increase audience engagement and promotional planning when expected vote count/popularity is low. Deploy teaser trailers on TikTok, Reddit AMAs, and YouTube shorts 8 weeks prior to build organic baseline."
          : (selectedBuzzTier === 'viral'
            ? "High organic momentum detected. Shift marketing spend from broad awareness ads to targeted opening weekend pre-order conversion campaigns."
            : "Increase audience engagement and promotional planning when expected vote count/popularity is low. Launch interactive trailers and early influencer partner reviews."),
        priority: selectedBuzzTier === 'low' ? "High Priority Action" : "Optimization"
      },
      {
        category: "RELEASE",
        title: "Theatrical Scheduling & Windowing",
        icon: Calendar,
        color: "from-amber-500/20 to-orange-500/10",
        border: "border-amber-500/30",
        accent: "text-amber-400",
        text: selectedGenre === 'Horror'
          ? "Consider target audience, genre and timing when planning the release. October/Halloween or January/February offer prime counter-programming windows with minimal tentpole overlap."
          : (selectedGenre === 'Sci-Fi' || selectedGenre === 'Action'
            ? "Consider target audience, genre and timing when planning the release. Target Summer (May–July) or Thanksgiving corridors to lock IMAX/Dolby Cinema large-format premium screens."
            : "Consider target audience, genre and timing when planning the release. Platformed rollout starting in key metro theaters (NY/LA) following major film festival reviews."),
        priority: "Release Strategy"
      },
      {
        category: "AUDIENCE",
        title: "Audience Appeal & Sentiment Tuning",
        icon: Users,
        color: "from-emerald-500/20 to-teal-500/10",
        border: "border-emerald-500/30",
        accent: "text-emerald-400",
        text: "Improve audience appeal and gather feedback before release through double-blind test-screenings. Utilize audience exit surveys to calibrate pacing, emotional resonance, and ending clarity.",
        priority: "Quality Assurance"
      }
    ];
  };

  const currentRecs = getStrategicRecommendations();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-white font-display">
            AI Decision-Support & Strategic Recommendations
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Section 8
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Prescriptive decision framework tailored for film producers, studio executives, and distributors.
        </p>
      </div>

      {/* Academic Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-indigo-500/30 text-xs text-indigo-200 flex items-start gap-3 shadow-lg">
        <Lightbulb className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-white">Decision Support Framework Notice:</span>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Present these recommendations as <strong>decision-support suggestions</strong>, not guaranteed commercial outcomes. The AI framework evaluates risk factors and identifies highest-leverage pre-release interventions.
          </p>
        </div>
      </div>

      {/* Interactive Strategy Simulator Bar */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-white">Interactive Scenario Tuner</h3>
          </div>
          <span className="text-[11px] text-slate-400">Simulate different production conditions</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Budget Tier */}
          <div className="space-y-1">
            <label className="block font-semibold text-slate-300">Production Budget Tier:</label>
            <select
              value={selectedBudgetTier}
              onChange={(e) => setSelectedBudgetTier(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="low">Low Budget (&lt; $15M)</option>
              <option value="mid">Mid-Tier Budget ($15M – $80M)</option>
              <option value="tentpole">Mega Tentpole ($150M+)</option>
            </select>
          </div>

          {/* Genre Selection */}
          <div className="space-y-1">
            <label className="block font-semibold text-slate-300">Film Genre:</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="Sci-Fi">Sci-Fi / Tentpole</option>
              <option value="Horror">Horror / Thriller</option>
              <option value="Drama">Drama / Awards</option>
              <option value="Action">Action / Franchise</option>
              <option value="Comedy">Comedy</option>
            </select>
          </div>

          {/* Pre-Release Buzz */}
          <div className="space-y-1">
            <label className="block font-semibold text-slate-300">Expected Pre-Release Buzz:</label>
            <select
              value={selectedBuzzTier}
              onChange={(e) => setSelectedBuzzTier(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="low">Subdued / Low Awareness</option>
              <option value="moderate">Moderate / Normal</option>
              <option value="viral">Viral / High Pre-sales</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4 Core Recommendation Cards (Section 8) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {currentRecs.map((rec, idx) => {
          const Icon = rec.icon;
          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-b ${rec.color} bg-slate-900/90 border ${rec.border} backdrop-blur-md shadow-xl flex flex-col justify-between space-y-4`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider font-mono ${rec.accent}`}>
                    {rec.category}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 font-semibold">
                    {rec.priority}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-white">
                    <Icon className={`w-4 h-4 ${rec.accent}`} />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    {rec.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 mt-3">
                  {rec.text}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Domain: Pre-Release ML Optimization</span>
                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                  Active Rule <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
