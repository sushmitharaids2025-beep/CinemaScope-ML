import React, { useState } from 'react';
import {
  GitCompare,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Server,
  Zap,
  Sliders,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/datasetInfo';

export default function ModelComparison({ openApiModal }) {
  const [activeModelDetail, setActiveModelDetail] = useState('both');

  const modelCards = [
    {
      id: "rf",
      name: "RANDOM FOREST REGRESSOR",
      tagline: "Bagging Ensemble of Decision Trees",
      purpose: "Non-linear regression for movie revenue prediction.",
      color: "from-blue-500/20 to-indigo-500/10",
      border: "border-indigo-500/30",
      textAccent: "text-indigo-400",
      icon: Cpu,
      architecture: [
        { label: "Ensemble Technique", value: "Bootstrap Aggregation (Bagging)" },
        { label: "Base Estimators", value: "300 Decision Trees" },
        { label: "Max Tree Depth", value: "18 levels (controlled pruning)" },
        { label: "Split Criterion", value: "MSE (Mean Squared Error)" },
        { label: "Feature Subsampling", value: "sqrt(total_features) = ~5 per split" }
      ],
      strengths: [
        "Robust against overfitting on high-cardinality features",
        "Natural handling of non-linear interactions without feature scaling",
        "Computes out-of-bag (OOB) variance estimates"
      ],
      evaluationStatus: "Pending actual evaluation metrics (Connect trained model)"
    },
    {
      id: "xgb",
      name: "XGBOOST REGRESSOR",
      tagline: "Extreme Gradient Boosted Decision Trees",
      purpose: "Gradient boosting regression for movie revenue prediction.",
      color: "from-purple-500/20 to-pink-500/10",
      border: "border-purple-500/30",
      textAccent: "text-purple-400",
      icon: Zap,
      architecture: [
        { label: "Ensemble Technique", value: "Sequential Residual Gradient Boosting" },
        { label: "Learning Rate (η)", value: "0.05 with shrinkage regularization" },
        { label: "Objective Function", value: "reg:squarederror (Log-loss RMSE)" },
        { label: "Regularization", value: "L1 (Lasso α=0.1) & L2 (Ridge λ=1.0)" },
        { label: "Tree Growth Strategy", value: "Exact greedy split with max_depth=7" }
      ],
      strengths: [
        "Exceptional predictive power on tabular tabular numerical data",
        "Built-in L1/L2 regularization prevents individual tree domination",
        "Fast parallelized histogram building"
      ],
      evaluationStatus: "Pending actual evaluation metrics (Connect trained model)"
    }
  ];

  const comparisonAttributes = [
    {
      attribute: "Core Algorithm",
      rf: "Bagging (Parallel decision trees averaging)",
      xgb: "Boosting (Sequential error-correcting gradient trees)"
    },
    {
      attribute: "Handling Non-Linearity",
      rf: "High (Partitions feature space via recursive splits)",
      xgb: "Very High (Optimizes second-order Taylor gradients)"
    },
    {
      attribute: "Resistance to Overfitting",
      rf: "High (Subsampling & averaging lowers variance)",
      xgb: "High (Explicit L1/L2 penalty on leaf weights)"
    },
    {
      attribute: "Sensitivity to Hyperparameters",
      rf: "Low (Reasonable performance with default params)",
      xgb: "Moderate-High (Requires tuned learning rate & depth)"
    },
    {
      attribute: "Feature Scaling Dependency",
      rf: "None (Invariant to monotonic transformations)",
      xgb: "None (Invariant to scale on tree splits)"
    },
    {
      attribute: "Target Variable",
      rf: "log1p(Revenue) Continuous Regression",
      xgb: "log1p(Revenue) Continuous Regression"
    },
    {
      attribute: "Evaluation Metrics",
      rf: "RMSE / MAE / R² (Pending actual evaluation metrics)",
      xgb: "RMSE / MAE / R² (Pending actual evaluation metrics)"
    },
    {
      attribute: "Integration Status",
      rf: "Demo Simulation active • Connect trained model",
      xgb: "Demo Simulation active • Connect trained model"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-white font-display">
            Model Comparison: Random Forest vs XGBoost
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Section 5
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Comparative framework of ensemble algorithms for box office continuous regression.
        </p>
      </div>

      {/* Crucial Academic Disclaimer Banner as requested by prompt */}
      <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block">
              Evaluation Metrics Policy Notice (Project Review-II):
            </span>
            <p className="text-slate-300 text-[11px] mt-0.5">
              To maintain absolute academic integrity, numerical RMSE / R² / MAE benchmarks are designated as <strong>"Pending actual evaluation metrics"</strong> until the trained model Python backend is connected.
            </p>
          </div>
        </div>

        <button
          onClick={openApiModal}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 transition"
        >
          <Server className="w-3.5 h-3.5" />
          <span>Connect Model Backend</span>
        </button>
      </div>

      {/* Model Cards (Section 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modelCards.map((model) => {
          const Icon = model.icon;
          return (
            <div
              key={model.id}
              className={`p-6 rounded-2xl bg-gradient-to-b ${model.color} bg-slate-900/90 border ${model.border} shadow-xl flex flex-col justify-between space-y-5`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800 text-white">
                      <Icon className={`w-5 h-5 ${model.textAccent}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white font-display tracking-tight">
                        {model.name}
                      </h3>
                      <p className="text-xs text-slate-400">{model.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Purpose Block */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Purpose:
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {model.purpose}
                  </p>
                </div>

                {/* Architecture Specs */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Hyperparameter & Model Architecture:
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {model.architecture.map((item, idx) => (
                      <div key={idx} className="flex justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="text-slate-200 font-mono font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Key Advantages for CinemaScope AI:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {model.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${model.textAccent} shrink-0`} />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Evaluation Status:</span>
                <span className="text-amber-400 font-bold font-mono text-[11px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Pending actual evaluation metrics
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Side-by-Side Model Comparison Table */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <GitCompare className="w-4 h-4 text-indigo-400" />
            <h3 className="text-base font-bold text-white font-display">
              Technical Comparison Matrix
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Architectural tradeoffs for movie box office regression modeling
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="py-3 px-4 uppercase text-[10px] tracking-wider">Evaluation Dimension</th>
                <th className="py-3 px-4 uppercase text-[10px] tracking-wider text-indigo-300 font-bold">Random Forest</th>
                <th className="py-3 px-4 uppercase text-[10px] tracking-wider text-purple-300 font-bold">XGBoost Regressor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {comparisonAttributes.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition">
                  <td className="py-3 px-4 font-semibold text-white whitespace-nowrap">
                    {row.attribute}
                  </td>
                  <td className="py-3 px-4 text-slate-300">
                    {row.rf.includes('Pending') ? (
                      <span className="text-amber-400 font-mono text-[11px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {row.rf}
                      </span>
                    ) : (
                      row.rf
                    )}
                  </td>
                  <td className="py-3 px-4 text-slate-300">
                    {row.xgb.includes('Pending') ? (
                      <span className="text-amber-400 font-mono text-[11px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {row.xgb}
                      </span>
                    ) : (
                      row.xgb
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
