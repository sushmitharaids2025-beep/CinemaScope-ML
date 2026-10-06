import React from 'react';
import {
  LayoutDashboard,
  Sparkles,
  ShieldAlert,
  BarChart3,
  GitCompare,
  Database,
  Lightbulb,
  Info,
  Film,
  X,
  ChevronRight
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: 'Overview' },
  { id: 'predictor', label: 'Movie Predictor', icon: Sparkles, badge: 'Core ML', highlight: true },
  { id: 'risk', label: 'Risk Analysis', icon: ShieldAlert, badge: '3 Tiers' },
  { id: 'eda', label: 'EDA Analytics', icon: BarChart3, badge: '4 Charts' },
  { id: 'models', label: 'Model Comparison', icon: GitCompare, badge: 'RF vs XGB' },
  { id: 'dataset', label: 'Dataset & Pipeline', icon: Database, badge: '439k Rows' },
  { id: 'recommendations', label: 'Recommendations', icon: Lightbulb, badge: 'Decision AI' },
  { id: 'about', label: 'About Project', icon: Info, badge: 'Team & PBL' }
];

export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#090e1c]/95 backdrop-blur-xl border-r border-slate-800/80 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
              <Film className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg text-white tracking-tight">CinemaScope</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">AI</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Box Office ML Analytics</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Navigation Menu
          </div>

          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={`w-full group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/90 to-purple-600/80 text-white shadow-lg shadow-indigo-600/20 border border-indigo-400/30'
                    : item.highlight
                    ? 'bg-indigo-950/30 hover:bg-indigo-900/40 text-indigo-300 hover:text-white border border-indigo-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isActive ? 'bg-white/20 text-white' : item.highlight ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800/80 text-slate-400 group-hover:text-indigo-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium tracking-normal text-left">{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : item.highlight
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'bg-slate-800 text-slate-400 group-hover:text-slate-300'
                  }`}>
                    {item.badge}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                    isActive ? 'opacity-100 translate-x-0 text-white' : 'text-slate-400'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Project Info Footer */}
        <div className="p-4 m-3 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-300">PBL Review Status</span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Review-II Ready
            </span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1">
            <p className="flex justify-between">
              <span>Course:</span>
              <span className="text-slate-200 font-mono">CS5403 – ML</span>
            </p>
            <p className="flex justify-between">
              <span>Team:</span>
              <span className="text-slate-200 font-medium">Tamil Vizhi & Sushmitha</span>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
