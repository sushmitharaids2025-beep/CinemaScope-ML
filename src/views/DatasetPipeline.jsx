import React, { useState } from 'react';
import {
  Database,
  Layers,
  CheckCircle2,
  Sliders,
  Filter,
  ArrowDown,
  ChevronRight,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Lightbulb,
  FileSpreadsheet,
  Info,
  CopyCheck,
  Crosshair,
  ShieldAlert,
  Binary,
  Maximize2
} from 'lucide-react';
import {
  PROJECT_METADATA,
  PREPROCESSING_STEPS,
  DATASET_FEATURES
} from '../data/datasetInfo';

export default function DatasetPipeline({ setActiveTab }) {
  const [selectedStep, setSelectedStep] = useState(1);

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case "Database": return Database;
      case "Filter": return Filter;
      case "CopyCheck": return CopyCheck;
      case "Crosshair": return Crosshair;
      case "ShieldAlert": return ShieldAlert;
      case "Binary": return Binary;
      case "Maximize2": return Maximize2;
      case "Sliders": return Sliders;
      case "Cpu": return Cpu;
      case "TrendingUp": return TrendingUp;
      case "Lightbulb": return Lightbulb;
      default: return Database;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-white font-display">
            Dataset Specifications & Preprocessing Pipeline
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Sections 10 & 11
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          End-to-end data engineering architecture from raw TMDB-IMDb records to ML inference.
        </p>
      </div>

      {/* SECTION 10: DATASET METRICS & SPECIFICATIONS */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-400" />
            <h3 className="text-base font-bold text-white font-display">
              Section 10 — Dataset Metadata & Engineering
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Merged TMDB & IMDb movie records schema and feature taxonomy
          </p>
        </div>

        {/* 5 Core Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Dataset</span>
            <p className="text-sm font-bold text-white mt-1">TMDB–IMDb Movies</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Records</span>
            <p className="text-sm font-bold text-indigo-400 font-mono mt-1">439,734</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Features</span>
            <p className="text-sm font-bold text-purple-400 font-mono mt-1">29 Columns</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Target Variable</span>
            <p className="text-sm font-bold text-emerald-400 mt-1">Revenue ($ USD)</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Problem Type</span>
            <p className="text-sm font-bold text-cyan-400 mt-1">Regression</p>
          </div>
        </div>

        {/* Preprocessing Applied List */}
        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            Applied Data Preprocessing Techniques:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {[
              { name: "Missing value handling", desc: "Selective imputation & removal of irrecoverable fields" },
              { name: "Duplicate checking", desc: "Cross-platform TMDB & IMDb ID matching and deduplication" },
              { name: "Outlier detection using IQR", desc: "Interquartile Range Q1/Q3 thresholding on financial values" },
              { name: "Outlier capping", desc: "1.5×IQR boundary Winsorization to stabilize gradients" },
              { name: "Categorical encoding", desc: "Multi-hot for genres, target encoding for production studios" },
              { name: "Feature scaling", desc: "Log1p transformation for Revenue and Budget variables" },
              { name: "Date conversion", desc: "Decomposed release dates to Year, Month, Day-of-week & Season" },
              { name: "Removal of irrelevant columns", desc: "Pruned non-predictive metadata (posters, taglines, raw URLs)" }
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item.name}</span>
                </div>
                <p className="text-[11px] text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Dictionary Sample */}
        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Key Feature Dictionary Sample (29 Attributes):
          </h4>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-3 uppercase text-[10px]">Feature Name</th>
                  <th className="py-2.5 px-3 uppercase text-[10px]">Data Type</th>
                  <th className="py-2.5 px-3 uppercase text-[10px]">ML Role</th>
                  <th className="py-2.5 px-3 uppercase text-[10px]">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
                {DATASET_FEATURES.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-mono text-indigo-300 font-bold">{feat.name}</td>
                    <td className="py-2.5 px-3 text-slate-400">{feat.type}</td>
                    <td className="py-2.5 px-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                        feat.role.includes('Target')
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : feat.role.includes('Redundant')
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {feat.role}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-300">{feat.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 11: PREPROCESSING PIPELINE (VISUAL FLOWCHART) */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-purple-400" />
            <h3 className="text-base font-bold text-white font-display">
              Section 11 — Interactive Preprocessing & Inference Pipeline
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Step-by-step visual execution path of CinemaScope AI architecture
          </p>
        </div>

        {/* Visual Pipeline Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {PREPROCESSING_STEPS.map((step) => {
            const Icon = getStepIcon(step.icon);
            const isSelected = selectedStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(step.step)}
                className={`p-3.5 rounded-xl text-left transition border relative flex flex-col justify-between space-y-2 group ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-900/80 to-purple-950/80 border-indigo-400 shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-950/80 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-300' : 'text-slate-500 group-hover:text-slate-300'}`} />
                </div>
                <div>
                  <h5 className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {step.name}
                  </h5>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                    {step.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Inspector Box */}
        {selectedStep && (
          <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-400 uppercase font-mono">
                  Step {selectedStep} of 11:
                </span>
                <h4 className="text-sm font-bold text-white">
                  {PREPROCESSING_STEPS[selectedStep - 1].name}
                </h4>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {PREPROCESSING_STEPS[selectedStep - 1].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
