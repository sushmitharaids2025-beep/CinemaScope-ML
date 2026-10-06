import React from 'react';
import {
  Users,
  GraduationCap,
  Award,
  BookOpen,
  Film,
  Sparkles,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Code
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/datasetInfo';

export default function AboutProject() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-white font-display">
            About CinemaScope AI & Project Team
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Sections 13 & 14
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Machine Learning Project Review-II Documentation & Academic Specifications.
        </p>
      </div>

      {/* SECTION 13: PROJECT TEAM & REVIEW DETAILS */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Section 13 — Academic Project Metadata & Team
              </h3>
              <p className="text-xs text-slate-400">II-Year Project Based Learning (PBL) Review</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
            {PROJECT_METADATA.review}
          </span>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECT_METADATA.team.map((member, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 relative overflow-hidden group hover:border-indigo-500/40 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition">
                      {member.name}
                    </h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {member.section}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500">{member.id}</span>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs">
                <span className="text-slate-400 block mb-0.5 font-semibold">Core Responsibilities:</span>
                <p className="text-slate-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Details Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-slate-400 font-semibold uppercase text-[10px] block">Project Name:</span>
            <span className="text-white font-bold text-sm font-display mt-0.5 block">{PROJECT_METADATA.title}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-slate-400 font-semibold uppercase text-[10px] block">Course Code & Name:</span>
            <span className="text-indigo-400 font-bold text-sm font-mono mt-0.5 block">{PROJECT_METADATA.course}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-slate-400 font-semibold uppercase text-[10px] block">Review Milestone:</span>
            <span className="text-purple-300 font-bold text-sm mt-0.5 block">{PROJECT_METADATA.review}</span>
          </div>
        </div>
      </div>

      {/* SECTION 14: PROBLEM STATEMENT & INNOVATION */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-indigo-400" />
            <h3 className="text-base font-bold text-white font-display">
              Section 14 — Problem Statement & Architectural Innovation
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Why explainable machine learning is essential for film investment and box office decision-making
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Problem Statement Box */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-rose-500/30 space-y-3">
            <div className="flex items-center gap-2 text-rose-400">
              <span className="text-xs font-bold uppercase tracking-wider">The Problem</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              Opaque Black-Box Predictions in Entertainment
            </h4>
            <blockquote className="text-xs text-slate-300 leading-relaxed italic p-3 rounded-lg bg-rose-500/5 border border-rose-500/20">
              "{PROJECT_METADATA.problem}"
            </blockquote>
            <p className="text-xs text-slate-400 leading-relaxed">
              Traditional ML tools output a single raw revenue figure without explaining which underlying factors (budget allocation, star power, runtime, or viral buzz) contributed positively or negatively to the estimate.
            </p>
          </div>

          {/* Innovation Box */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">The Innovation</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              Explainability + Risk Classification + Decision AI
            </h4>
            <blockquote className="text-xs text-slate-300 leading-relaxed italic p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              "{PROJECT_METADATA.innovation}"
            </blockquote>
            <p className="text-xs text-slate-400 leading-relaxed">
              CinemaScope AI breaks down the black box by generating feature-level contribution cards, a 3-tier financial risk profile, and actionable recommendations before major production capital is committed.
            </p>
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            Technology Stack & Implementation Framework:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Frontend UI</span>
              <p className="font-bold text-white mt-0.5">React + Vite</p>
              <span className="text-[10px] text-indigo-400 font-mono">Modern Single-Page App</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Styling System</span>
              <p className="font-bold text-white mt-0.5">Tailwind CSS</p>
              <span className="text-[10px] text-purple-400 font-mono">Dark Cinematic Glassmorphism</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Data Visualization</span>
              <p className="font-bold text-white mt-0.5">Recharts</p>
              <span className="text-[10px] text-emerald-400 font-mono">Interactive Responsive Charts</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">ML Regressors</span>
              <p className="font-bold text-white mt-0.5">RF + XGBoost</p>
              <span className="text-[10px] text-amber-400 font-mono">29-Feature Ensemble</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
