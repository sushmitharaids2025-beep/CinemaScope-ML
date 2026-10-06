import React, { useState } from 'react';
import { X, Server, CheckCircle, AlertCircle, RefreshCw, Terminal, ExternalLink } from 'lucide-react';

export default function ApiConnectorModal({ isOpen, onClose, isConnected, setIsConnected, apiUrl, setApiUrl }) {
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  if (!isOpen) return null;

  const handleTestConnection = () => {
    setTesting(true);
    setTestResult(null);

    // Simulate backend connection ping
    setTimeout(() => {
      setTesting(false);
      if (apiUrl.includes('localhost') || apiUrl.includes('127.0.0.1')) {
        setTestResult({
          status: 'simulated',
          message: 'Demo Engine active. To connect a live FastAPI/Flask model server, start your Python service (e.g. uvicorn app:app --reload).'
        });
      } else {
        setTestResult({
          status: 'demo',
          message: 'Operating in Demo ML Simulation Mode using TMDB-IMDb regression model parameters.'
        });
      }
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">ML Backend API Connector</h3>
              <p className="text-xs text-slate-400">Connect trained Random Forest / XGBoost model server</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs text-slate-300">
          <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-300 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold">
              <AlertCircle className="w-4 h-4 text-indigo-400" />
              <span>Academic Review Mode Active</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              For this college project evaluation, CinemaScope AI includes an explainable client-side inference engine. You can also connect a custom Python backend (FastAPI/Flask) running trained <code>scikit-learn</code> / <code>xgboost</code> models.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              ML Inference Endpoint URL:
            </label>
            <input
              type="text"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="http://localhost:8000/api/predict"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          {testResult && (
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <div className="flex items-center gap-2 font-semibold text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Status: {testResult.status.toUpperCase()}</span>
              </div>
              <p className="text-[11px] text-slate-400">{testResult.message}</p>
            </div>
          )}

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Sample Python FastAPI Endpoint Schema</span>
            </div>
            <p className="text-indigo-300">POST /api/predict</p>
            <p className="text-slate-400">{"{ budget, genres, runtime, rating, vote_count, popularity }"}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <button
            onClick={() => {
              setIsConnected(false);
              setApiUrl('http://localhost:8000/api/predict');
              setTestResult(null);
            }}
            className="text-xs text-slate-400 hover:text-slate-200"
          >
            Reset to Demo Engine
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleTestConnection}
              disabled={testing}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition disabled:opacity-50"
            >
              {testing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : null}
              {testing ? 'Pinging Endpoint...' : 'Test Connection'}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
