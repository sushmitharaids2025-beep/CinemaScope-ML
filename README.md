# CinemaScope AI
### Explainable Movie Success Prediction and Box Office Performance Analytics Framework

> **Course:** CS5403 – Machine Learning  
> **Milestone:** II-Year Project-Based Learning (PBL) Review-II  
> **Project Team (Section E):**  
> - **Tamil Vizhi S** (Section E) – ML Modeling & Explainability Framework  
> - **Sushmitha R** (Section E) – EDA, Preprocessing & Decision Analytics  

---

## 🎬 Project Overview

**CinemaScope AI** addresses the limitations of traditional "black-box" machine learning models in film performance forecasting. Rather than outputting an opaque revenue figure, the framework provides:
1. **Explainable Predictions:** Multi-feature contribution breakdown (SHAP-like positive/negative factors) across Budget, Popularity, Ratings, Vote Count, Runtime, and Genres.
2. **Performance Risk Classification:** Automated 3-tier risk profiling (**Low Risk**, **Moderate Risk**, **High Risk**) with clear financial safety margins.
3. **AI Pre-Release Recommendations:** Actionable decision-support for Producers, Marketers, Distributors, and Content Executives.

---

## 🚀 Key Features & Sections

| Section | Component | Description |
|---|---|---|
| **Dashboard** | KPI Overview & Quick Presets | Dataset metrics (439k records, 29 features), welcome section, and 1-click review presets. |
| **Movie Predictor** | 🌟 **Core Feature Highlight** | Interactive multi-slider form, animated ML inference pipeline, Success Score %, Risk Level, Explainability Factor cards, and ROI estimates. |
| **Risk Analysis** | 3-Tier Risk Taxonomy | Deep dive into Low, Moderate, and High Risk profiles, sensitivity thresholds, and sample risk distribution donut chart. |
| **EDA Analytics** | Exploratory Data Analysis | Revenue distribution histogram (Original vs Log1p toggle), Budget vs Revenue interactive scatter plot, Correlation Heatmap matrix ($r=0.91$ redundancy highlight), and Missing values horizontal bar chart. |
| **Model Comparison** | Random Forest vs XGBoost | Non-linear regression vs Gradient boosting cards, hyperparameter architectures, and comparison matrix (*with academic evaluation policy disclaimers*). |
| **Dataset & Pipeline** | Data Engineering | TMDB–IMDb 439,734 records, 29 attributes, IQR outlier treatment, and an interactive 11-step visual preprocessing pipeline. |
| **Recommendations** | Decision-Support AI | Actionable strategic playbooks across Production, Marketing, Release Windows, and Audience Appeal with interactive scenario tuner. |
| **About Project** | Review Documentation | Problem statement, innovation architecture, tech stack, and team credentials. |
| **Executive Export** | PDF & Print Reports | One-click modal to generate and print comprehensive academic project review summaries. |

---

## 🛠️ Technology Stack

- **Frontend:** React 19 + Vite 8 (JavaScript)
- **Styling:** Tailwind CSS v4 with glassmorphism design tokens and dark cinematic theme
- **Visualization:** Recharts (Histograms, Scatter plots, Heatmap tables, Donut charts, Bar charts)
- **Icons & Utilities:** Lucide React, Canvas-Confetti, Tailwind Merge

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to: **`http://localhost:5173/`**

### 3. Production Build
```bash
npm run build
```

---

## 📊 Dataset Specifications
- **Dataset:** TMDB–IMDb Merged Theatrical Dataset
- **Records:** 439,734
- **Features:** 29 Attributes
- **Target Variable:** Worldwide Gross Revenue ($ USD)
- **Problem Type:** Continuous Supervised Regression
- **Outlier Handling:** 1.5×IQR boundary capping on financial distributions
- **Redundancy Filter:** Removed $r=0.91$ collinearity between `vote_count` and `numVotes`
