import React from 'react';
import { X, Printer, Download, Film, CheckCircle2, AlertTriangle, Sparkles, Database } from 'lucide-react';
import { PROJECT_METADATA } from '../data/datasetInfo';

export default function ExportModal({ isOpen, onClose, lastPrediction, activeTab }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">PBL Project Executive Report</h3>
              <p className="text-xs text-slate-400">CinemaScope AI • Machine Learning Analytics Summary</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Content Area */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-slate-200">
          {/* Project Header Banner */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
                {PROJECT_METADATA.course} • {PROJECT_METADATA.review}
              </span>
              <span className="text-xs text-slate-400">
                Generated: {new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1 font-display">{PROJECT_METADATA.fullTitle}</h2>
            <p className="text-xs text-slate-300 leading-relaxed">{PROJECT_METADATA.innovation}</p>
          </div>

          {/* Team & Dataset Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Team (Section E)</h4>
              <ul className="space-y-1 text-xs">
                <li className="flex justify-between font-medium">
                  <span className="text-white">Tamil Vizhi S</span>
                  <span className="text-indigo-400">ML Modeling & Explainability</span>
                </li>
                <li className="flex justify-between font-medium">
                  <span className="text-white">Sushmitha R</span>
                  <span className="text-indigo-400">EDA, Preprocessing & Decision AI</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Dataset Specifications</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400">Records:</span>
                  <p className="text-white font-bold font-mono">439,734</p>
                </div>
                <div>
                  <span className="text-slate-400">Features:</span>
                  <p className="text-white font-bold font-mono">29 Columns</p>
                </div>
                <div>
                  <span className="text-slate-400">Target:</span>
                  <p className="text-emerald-400 font-bold">Revenue ($ USD)</p>
                </div>
                <div>
                  <span className="text-slate-400">Models:</span>
                  <p className="text-purple-400 font-bold">Random Forest + XGBoost</p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Prediction Results if available */}
          {lastPrediction ? (
            <div className="p-5 rounded-xl bg-slate-800/80 border border-indigo-500/40 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-white">Movie Success Prediction Summary</h4>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${lastPrediction.riskBadgeColor}`}>
                  {lastPrediction.riskLevel}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase">Success Score</span>
                  <p className="text-2xl font-bold text-indigo-400 font-display mt-0.5">{lastPrediction.successScore}%</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase">Est. Revenue</span>
                  <p className="text-base font-bold text-emerald-400 mt-1 font-mono">{lastPrediction.estimatedRevenue}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase">Est. Box Office ROI</span>
                  <p className="text-xl font-bold text-purple-400 font-display mt-0.5">{lastPrediction.estimatedRoi}</p>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-slate-300 mb-2">Key Explainability Factors:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {lastPrediction.factors.slice(0, 4).map((f, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs">
                      <div className="flex justify-between font-semibold mb-1">
                        <span className="text-white">{f.name}</span>
                        <span className={f.status === 'positive' ? 'text-emerald-400' : f.status === 'negative' ? 'text-rose-400' : 'text-slate-400'}>
                          {f.impact}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 text-center text-xs text-slate-400">
              No movie prediction has been run in this session yet. Run a prediction in the "Movie Predictor" tab to attach full simulation results to this report.
            </div>
          )}

          {/* Preprocessing & EDA Findings */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-2">
            <h4 className="font-semibold text-slate-300 uppercase tracking-wider">Key EDA & Preprocessing Findings</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li><strong className="text-slate-300">Revenue Skewness:</strong> Addressed via Log1p normalization; 64.7% of movies earn under $5M worldwide.</li>
              <li><strong className="text-slate-300">Multicollinearity:</strong> TMDB vote_count and IMDb numVotes have 0.91 correlation; one was selected for pruning.</li>
              <li><strong className="text-slate-300">Missing Values:</strong> Production Companies (40.3%) and Genres (18.6%) handled via selective categorical encoding and imputation.</li>
              <li><strong className="text-slate-300">Outliers:</strong> Handled via 1.5×IQR boundary capping to avoid model distortion.</li>
            </ul>
          </div>

          {/* Academic Project Disclaimer */}
          <div className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-[11px] text-indigo-300 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <p>
              <strong>Academic Review Notice:</strong> This report represents project demonstration data for College PBL Review-II. All model evaluation metrics are clearly demarcated as demo/sample values until connected to a live production model endpoint.
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <span className="text-xs text-slate-500">Ready for print or PDF export</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
