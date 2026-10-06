import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Bell,
  UserCheck,
  Printer,
  Menu,
  Sparkles,
  Server,
  ChevronDown,
  CheckCircle2,
  Info,
  TrendingUp,
  X,
  ExternalLink
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/datasetInfo';

export default function Header({
  activeTab,
  setActiveTab,
  toggleSidebar,
  openExportModal,
  openApiModal,
  isApiConnected,
  searchQuery,
  setSearchQuery
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTeamInfo, setShowTeamInfo] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const notifRef = useRef(null);
  const teamRef = useRef(null);

  const notifications = [
    {
      id: 1,
      title: "PBL Review-II Milestone Active",
      time: "Now",
      text: "CS5403 Machine Learning Project Review presentation mode initialized.",
      type: "info"
    },
    {
      id: 2,
      title: "Dataset Ingestion Complete",
      time: "Cached",
      text: "TMDB–IMDb 439,734 records preprocessed with IQR outlier boundary capping.",
      type: "success"
    },
    {
      id: 3,
      title: "Feature Pruning Highlight",
      time: "EDA Alert",
      text: "Multicollinearity between vote_count and numVotes (r=0.91) flagged for removal.",
      type: "alert"
    }
  ];

  // Close popovers on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (teamRef.current && !teamRef.current.contains(event.target)) {
        setShowTeamInfo(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#080c18]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
      {/* Left: Mobile Toggle & Project Titles */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="font-display font-bold text-base sm:text-lg text-white truncate tracking-tight">
              CinemaScope AI
            </h1>
            <span className="hidden sm:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              PBL Review-II
            </span>
          </div>
          <p className="text-xs text-slate-400 truncate hidden md:block">
            Explainable Movie Success Prediction & Box Office Analytics
          </p>
        </div>
      </div>

      {/* Center: Search Box */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search metrics, EDA insights, predictors, or models..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Right: Action Buttons & Popovers */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* ML Engine Status Pill */}
        <button
          onClick={openApiModal}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/60 text-slate-300 transition"
          title="Configure backend ML model endpoint"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>Demo Engine</span>
          <Server className="w-3 h-3 text-slate-400 ml-0.5" />
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setUnreadCount(0);
            }}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition relative"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-[#080c18]" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-88 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-4 space-y-3 z-50 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-white">Project Notifications</span>
                <span className="text-[10px] text-slate-400">PBL Review-II Updates</span>
              </div>
              <div className="space-y-2.5 max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-indigo-300">{n.title}</span>
                      <span className="text-[10px] text-slate-500">{n.time}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{n.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Team Profile Info */}
        <div className="relative" ref={teamRef}>
          <button
            onClick={() => setShowTeamInfo(!showTeamInfo)}
            className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/50 hover:from-slate-800 hover:to-indigo-900/50 border border-slate-700/60 transition text-left"
          >
            <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="hidden xl:block">
              <p className="text-xs font-semibold text-white leading-none">Team Section E</p>
              <p className="text-[10px] text-slate-400 leading-none mt-1">CS5403 ML Project</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
          </button>

          {/* Team Dropdown */}
          {showTeamInfo && (
            <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-4 space-y-3 z-50 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-white font-display">Project Team Profile</span>
                <span className="text-[10px] text-indigo-400 font-mono">Section E</span>
              </div>
              <div className="space-y-2">
                {PROJECT_METADATA.team.map((member, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">{member.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                        {member.section}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
              <div className="pt-1 text-[11px] text-slate-400 border-t border-slate-800">
                <p><strong>Course:</strong> CS5403 – Machine Learning</p>
                <p><strong>Milestone:</strong> II-Year PBL Project Review-II</p>
              </div>
            </div>
          )}
        </div>

        {/* Export Report CTA */}
        <button
          onClick={openExportModal}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/20 border border-indigo-400/20 transition"
        >
          <Printer className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export Report</span>
        </button>
      </div>
    </header>
  );
}
