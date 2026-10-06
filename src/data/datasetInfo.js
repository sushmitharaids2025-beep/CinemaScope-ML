// Dataset metadata and PBL project constants
export const PROJECT_METADATA = {
  title: "CinemaScope AI",
  fullTitle: "CinemaScope AI: Explainable Movie Success Prediction and Box Office Performance Analytics Framework",
  subtitle: "Explainable Movie Success Prediction & Box Office Analytics",
  problem: "Existing movie-success prediction systems can behave like black boxes and may provide predictions without clear explanations.",
  innovation: "CinemaScope AI combines movie success prediction, explainability, performance-risk classification and AI-driven recommendations to support better pre-release decisions.",
  course: "CS5403 – Machine Learning",
  review: "II-Year PBL Project Review-II",
  team: [
    {
      name: "Tamil Vizhi S",
      section: "Section E",
      role: "ML Modeling & Explainability Framework",
      id: "PBL-E-01"
    },
    {
      name: "Sushmitha R",
      section: "Section E",
      role: "EDA, Preprocessing & Decision Analytics",
      id: "PBL-E-02"
    }
  ],
  kpis: {
    totalMovies: "439,734",
    features: "29",
    targetVariable: "Revenue",
    problemType: "Regression",
    models: "Random Forest + XGBoost",
    datasetName: "TMDB–IMDb Movies Dataset"
  }
};

export const MISSING_VALUES_DATA = [
  { feature: "Production Companies", missingCount: 177325, percentage: 40.32, action: "High missingness - Extract major studio flag / categorical encoding", color: "#f43f5e" },
  { feature: "Genres", missingCount: 81720, percentage: 18.58, action: "Impute with 'Unknown' or multi-label binary indicators", color: "#fb7185" },
  { feature: "Cast", missingCount: 69219, percentage: 15.74, action: "Extract top-billed actor star-power index", color: "#f59e0b" },
  { feature: "Writers", missingCount: 64954, percentage: 14.77, action: "Categorize as Known/Unknown writer tier", color: "#fbbf24" },
  { feature: "Release Date", missingCount: 23268, percentage: 5.29, action: "Drop rows or impute median release month & year", color: "#6366f1" },
  { feature: "Directors", missingCount: 9961, percentage: 2.27, action: "Impute with director historical mean box office", color: "#38bdf8" }
];

export const PREPROCESSING_STEPS = [
  { step: 1, name: "Raw Dataset", description: "TMDB–IMDb raw export with 439,734 records and 29 initial columns.", icon: "Database" },
  { step: 2, name: "Missing Value Handling", description: "Removal of irrecoverable fields; median and category imputation for key predictors.", icon: "Filter" },
  { step: 3, name: "Duplicate Check", description: "Deduplication of overlapping TMDB and IMDb movie entries using title and release year.", icon: "CopyCheck" },
  { step: 4, name: "Outlier Detection", description: "Interquartile Range (IQR = Q3 - Q1) applied on Budget and Revenue distributions.", icon: "Crosshair" },
  { step: 5, name: "Outlier Capping", description: "Winsorization / 1.5×IQR boundary capping to prevent extreme skewness in regression.", icon: "ShieldAlert" },
  { step: 6, name: "Categorical Encoding", description: "One-hot & target encoding for Genres, Production Studios, and Release Quarters.", icon: "Binary" },
  { step: 7, name: "Feature Scaling", description: "Log1p transformation for Revenue & Budget; Standard/RobustScaler for numerical inputs.", icon: "Maximize2" },
  { step: 8, name: "Feature Selection", description: "Multicollinearity check (VIF) and removal of redundant features (e.g. vote_count vs numVotes).", icon: "Sliders" },
  { step: 9, name: "Random Forest / XGBoost", description: "Ensemble training with non-linear decision trees and gradient boosted regression trees.", icon: "Cpu" },
  { step: 10, name: "Prediction", description: "Continuous revenue estimate and success score calculation with uncertainty bounds.", icon: "TrendingUp" },
  { step: 11, name: "Risk Analysis & Recommendations", description: "Categorization into Low/Moderate/High risk tiers with SHAP explainability and actionable suggestions.", icon: "Lightbulb" }
];

export const DATASET_FEATURES = [
  { name: "budget", type: "Numerical (USD)", description: "Production cost of the movie", role: "Primary Predictor" },
  { name: "revenue", type: "Numerical (USD)", description: "Worldwide box office gross earnings", role: "Target Variable (y)" },
  { name: "popularity", type: "Numerical (Float)", description: "TMDB dynamic popularity metric", role: "Key Predictor" },
  { name: "vote_count", type: "Numerical (Int)", description: "Total user ratings count on TMDB", role: "Engagement Feature" },
  { name: "numVotes", type: "Numerical (Int)", description: "Total user ratings count on IMDb (r=0.91 with vote_count)", role: "Redundant / Selected for pruning" },
  { name: "vote_average", type: "Numerical (1-10)", description: "Average rating score given by viewers", role: "Quality Predictor" },
  { name: "runtime", type: "Numerical (Mins)", description: "Duration of the movie in minutes", role: "Structural Predictor" },
  { name: "genres", type: "Categorical / List", description: "Assigned genre classifications (Action, Sci-Fi, etc.)", role: "Categorical Feature" },
  { name: "release_date", type: "Datetime", description: "Theatrical release date (decomposed to year, month, season)", role: "Temporal Feature" },
  { name: "production_companies", type: "Categorical / List", description: "Studios involved in production", role: "High Missingness Feature" },
  { name: "cast", type: "Text / List", description: "Leading cast members", role: "Actor Star-power Feature" },
  { name: "director", type: "Categorical", description: "Primary director of the title", role: "Historical Track-record Feature" },
  { name: "original_language", type: "Categorical", description: "Primary spoken language of the film", role: "Demographic Feature" },
  { name: "status", type: "Categorical", description: "Release status (Released, Post Production, etc.)", role: "Filter Condition" }
];
