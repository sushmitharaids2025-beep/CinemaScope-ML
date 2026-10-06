// EDA Data for Charts and Visual Analytics

// Section 1: Revenue Distribution (Original Skewed vs Log Normalized)
export const REVENUE_DISTRIBUTION_ORIGINAL = [
  { range: "$0 - $5M", count: 284500, label: "< $5M", percentage: "64.7%", desc: "Indie / VOD / Local releases" },
  { range: "$5M - $20M", count: 68200, label: "$5M-$20M", percentage: "15.5%", desc: "Low budget theatricals" },
  { range: "$20M - $50M", count: 42100, label: "$20M-$50M", percentage: "9.6%", desc: "Mid-tier studio releases" },
  { range: "$50M - $100M", count: 23800, label: "$50M-$100M", percentage: "5.4%", desc: "Moderate box office hits" },
  { range: "$100M - $250M", count: 12900, label: "$100M-$250M", percentage: "2.9%", desc: "Substantial commercial hits" },
  { range: "$250M - $500M", count: 5800, label: "$250M-$500M", percentage: "1.3%", desc: "Major studio blockbusters" },
  { range: "$500M - $1B", count: 2100, label: "$500M-$1B", percentage: "0.5%", desc: "Global tentpoles" },
  { range: "> $1 Billion", count: 334, label: "> $1B", percentage: "0.1%", desc: "Mega-franchise outliers" }
];

export const REVENUE_DISTRIBUTION_LOG = [
  { range: "log(Rev) 0 - 2", count: 8200, label: "0 - 2 (Low)", density: 0.02 },
  { range: "log(Rev) 2 - 4", count: 24500, label: "2 - 4", density: 0.06 },
  { range: "log(Rev) 4 - 6", count: 59300, label: "4 - 6", density: 0.14 },
  { range: "log(Rev) 6 - 8", count: 122400, label: "6 - 8 (Median)", density: 0.28 },
  { range: "log(Rev) 8 - 10", count: 135800, label: "8 - 10 (Peak)", density: 0.31 },
  { range: "log(Rev) 10 - 12", count: 64200, label: "10 - 12", density: 0.15 },
  { range: "log(Rev) 12 - 14", count: 21800, label: "12 - 14", density: 0.05 },
  { range: "log(Rev) > 14", count: 3534, label: "> 14 (High)", density: 0.01 }
];

// Section 2: Budget vs Revenue Scatter Points (Sample representative set of movies)
export const BUDGET_VS_REVENUE_POINTS = [
  { title: "Avatar", budget: 237, revenue: 2923, genre: "Sci-Fi", rating: 7.9, year: 2009, roi: "12.3x", status: "Super Hit" },
  { title: "Avengers: Endgame", budget: 356, revenue: 2799, genre: "Action", rating: 8.4, year: 2019, roi: "7.9x", status: "Super Hit" },
  { title: "Titanic", budget: 200, revenue: 2264, genre: "Drama", rating: 7.9, year: 1997, roi: "11.3x", status: "Super Hit" },
  { title: "Star Wars: Ep VII", budget: 245, revenue: 2071, genre: "Sci-Fi", rating: 7.8, year: 2015, roi: "8.5x", status: "Super Hit" },
  { title: "Jurassic World", budget: 150, revenue: 1671, genre: "Action", rating: 7.0, year: 2015, roi: "11.1x", status: "Super Hit" },
  { title: "The Lion King", budget: 260, revenue: 1663, genre: "Animation", rating: 6.9, year: 2019, roi: "6.4x", status: "Super Hit" },
  { title: "Top Gun: Maverick", budget: 170, revenue: 1495, genre: "Action", rating: 8.3, year: 2022, roi: "8.8x", status: "Super Hit" },
  { title: "Frozen II", budget: 150, revenue: 1450, genre: "Animation", rating: 6.8, year: 2019, roi: "9.7x", status: "Super Hit" },
  { title: "Barbie", budget: 145, revenue: 1445, genre: "Comedy", rating: 6.9, year: 2023, roi: "10.0x", status: "Super Hit" },
  { title: "Oppenheimer", budget: 100, revenue: 957, genre: "Drama", rating: 8.9, year: 2023, roi: "9.6x", status: "Super Hit" },
  { title: "Inception", budget: 160, revenue: 836, genre: "Sci-Fi", rating: 8.8, year: 2010, roi: "5.2x", status: "Hit" },
  { title: "Interstellar", budget: 165, revenue: 773, genre: "Sci-Fi", rating: 8.7, year: 2014, roi: "4.7x", status: "Hit" },
  { title: "The Dark Knight", budget: 185, revenue: 1006, genre: "Action", rating: 9.0, year: 2008, roi: "5.4x", status: "Hit" },
  { title: "Joker", budget: 55, revenue: 1074, genre: "Drama", rating: 8.4, year: 2019, roi: "19.5x", status: "Blockbuster Outlier" },
  { title: "Get Out", budget: 4.5, revenue: 255, genre: "Horror", rating: 7.7, year: 2017, roi: "56.7x", status: "Indie Phenomenon" },
  { title: "A Quiet Place", budget: 17, revenue: 341, genre: "Horror", rating: 7.5, year: 2018, roi: "20.1x", status: "High ROI Hit" },
  { title: "Paranormal Activity", budget: 0.2, revenue: 193, genre: "Horror", rating: 6.3, year: 2007, roi: "965x", status: "Micro-budget Miracle" },
  { title: "John Wick: Chapter 4", budget: 100, revenue: 440, genre: "Action", rating: 7.7, year: 2023, roi: "4.4x", status: "Hit" },
  { title: "The Martian", budget: 108, revenue: 630, genre: "Sci-Fi", rating: 8.0, year: 2015, roi: "5.8x", status: "Hit" },
  { title: "Dune: Part Two", budget: 190, revenue: 714, genre: "Sci-Fi", rating: 8.5, year: 2024, roi: "3.8x", status: "Hit" },
  { title: "Blade Runner 2049", budget: 150, revenue: 259, genre: "Sci-Fi", rating: 8.0, year: 2017, roi: "1.7x", status: "Moderate Flop" },
  { title: "John Carter", budget: 263, revenue: 284, genre: "Sci-Fi", rating: 6.6, year: 2012, roi: "1.08x", status: "Heavy Box Office Loss" },
  { title: "Battleship", budget: 209, revenue: 303, genre: "Action", rating: 5.8, year: 2012, roi: "1.45x", status: "Loss (High Budget)" },
  { title: "The Lone Ranger", budget: 225, revenue: 260, genre: "Action", rating: 6.4, year: 2013, roi: "1.15x", status: "Box Office Bomb" },
  { title: "The Marvels", budget: 270, revenue: 206, genre: "Action", rating: 5.5, year: 2023, roi: "0.76x", status: "Severe Flop" },
  { title: "Green Lantern", budget: 200, revenue: 219, genre: "Action", rating: 5.5, year: 2011, roi: "1.09x", status: "Loss" },
  { title: "Tomorrowland", budget: 190, revenue: 209, genre: "Sci-Fi", rating: 6.4, year: 2015, roi: "1.10x", status: "Loss" },
  { title: "King Arthur: Legend", budget: 175, revenue: 148, genre: "Action", rating: 6.7, year: 2017, roi: "0.84x", status: "Severe Loss" },
  { title: "Jupiter Ascending", budget: 176, revenue: 183, genre: "Sci-Fi", rating: 5.3, year: 2015, roi: "1.04x", status: "Loss" },
  { title: "Moonfall", budget: 140, revenue: 67, genre: "Sci-Fi", rating: 5.1, year: 2022, roi: "0.48x", status: "Severe Flop" },
  { title: "Whiplash", budget: 3.3, revenue: 49, genre: "Drama", rating: 8.5, year: 2014, roi: "14.8x", status: "Indie Hit" },
  { title: "Everything Everywhere", budget: 25, revenue: 143, genre: "Sci-Fi", rating: 7.8, year: 2022, roi: "5.7x", status: "Hit" },
  { title: "The Conjuring", budget: 20, revenue: 319, genre: "Horror", rating: 7.5, year: 2013, roi: "15.9x", status: "Super Hit" },
  { title: "Knives Out", budget: 40, revenue: 312, genre: "Comedy", rating: 7.9, year: 2019, roi: "7.8x", status: "Hit" },
  { title: "La La Land", budget: 30, revenue: 472, genre: "Drama", rating: 8.0, year: 2016, roi: "15.7x", status: "Super Hit" },
  { title: "The Grand Budapest Hotel", budget: 25, revenue: 173, genre: "Comedy", rating: 8.1, year: 2014, roi: "6.9x", status: "Hit" }
];

// Section 3: Correlation Matrix Data
export const CORRELATION_FEATURES = [
  "Budget",
  "Revenue",
  "Popularity",
  "Runtime",
  "Vote Count",
  "Average Rating",
  "numVotes"
];

// 7x7 correlation matrix values
export const CORRELATION_MATRIX = [
  // Budget
  [1.00, 0.72, 0.50, 0.31, 0.61, 0.08, 0.59],
  // Revenue
  [0.72, 1.00, 0.64, 0.24, 0.78, 0.19, 0.75],
  // Popularity
  [0.50, 0.64, 1.00, 0.16, 0.67, 0.14, 0.65],
  // Runtime
  [0.31, 0.24, 0.16, 1.00, 0.28, 0.38, 0.27],
  // Vote Count
  [0.61, 0.78, 0.67, 0.28, 1.00, 0.26, 0.91],
  // Average Rating
  [0.08, 0.19, 0.14, 0.38, 0.26, 1.00, 0.25],
  // numVotes
  [0.59, 0.75, 0.65, 0.27, 0.91, 0.25, 1.00]
];

// Section 9: Feature Importance Data (Demo values clearly labeled)
export const FEATURE_IMPORTANCE_DATA = [
  { feature: "Budget", importance: 0.284, pct: "28.4%", color: "#6366f1", category: "Financial" },
  { feature: "Popularity", importance: 0.218, pct: "21.8%", color: "#8b5cf6", category: "Pre-Release Buzz" },
  { feature: "Vote Count", importance: 0.192, pct: "19.2%", color: "#a855f7", category: "Audience Engagement" },
  { feature: "Average Rating", importance: 0.136, pct: "13.6%", color: "#ec4899", category: "Critical Reception" },
  { feature: "Runtime", importance: 0.078, pct: "7.8%", color: "#38bdf8", category: "Structural Attribute" },
  { feature: "Genre", importance: 0.062, pct: "6.2%", color: "#06b6d4", category: "Market Segment" },
  { feature: "numVotes (Redundant)", importance: 0.030, pct: "3.0%", color: "#64748b", category: "Pruned / Redundant" }
];

// Risk Distribution (Sample Demo across dataset subsets)
export const RISK_DISTRIBUTION_DEMO = [
  { name: "Low Risk", value: 38, count: 167100, color: "#10b981", desc: "Solid budget-to-buzz ratio, favorable genre, balanced metrics" },
  { name: "Moderate Risk", value: 43, count: 189085, color: "#f59e0b", desc: "Mid-tier budget with moderate popularity or competitive release window" },
  { name: "High Risk", value: 19, count: 83549, color: "#f43f5e", desc: "High production budget without proportional engagement, or niche appeal" }
];

// Section 12: EDA Insight Cards
export const EDA_INSIGHT_CARDS = [
  {
    id: 1,
    title: "1. Revenue Distribution",
    headline: "Extreme Right-Skewness",
    summary: "Revenue is heavily right-skewed. Over 64% of films earn under $5M, while a minuscule 0.1% surpass $1 Billion.",
    action: "Requires Log1p transformation (log(Revenue + 1)) before feeding into regression models to stabilize variance and avoid skewness bias.",
    icon: "BarChart3",
    badge: "Distribution Finding",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-indigo-500/30",
    accent: "text-indigo-400"
  },
  {
    id: 2,
    title: "2. Correlation Analysis",
    headline: "vote_count & numVotes = 0.91",
    summary: "High collinearity detected between TMDB vote_count and IMDb numVotes (r = 0.91). Budget also correlates (r = 0.72) with Revenue.",
    action: "Multicollinearity prunes redundant numVotes to prevent coefficient inflation and tree split distortion in Random Forest/XGBoost.",
    icon: "Network",
    badge: "Redundancy Alert",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/30",
    accent: "text-purple-400"
  },
  {
    id: 3,
    title: "3. Budget vs Revenue",
    headline: "Budget Alone Cannot Safely Predict Success",
    summary: "While budget correlates with gross revenue, numerous high-budget films ($150M+) underperformed heavily, while low-budget horror/indies generated 20x-50x ROI.",
    action: "A multi-feature ML ensemble factoring in popularity, runtime, genre dynamics, and engagement is non-negotiable.",
    icon: "TrendingUp",
    badge: "Key Finding",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    accent: "text-cyan-400"
  },
  {
    id: 4,
    title: "4. Missing Values",
    headline: "Selective Imputation vs Removal",
    summary: "Production Companies (40.3% missing) and Genres (18.6% missing) show heavy gaps, whereas Directors (2.3%) and Dates (5.3%) are mostly intact.",
    action: "High-missingness and low-relevance metadata dropped; critical fields imputed via target grouping and category flagging.",
    icon: "FileQuestion",
    badge: "Data Cleaning",
    color: "from-amber-500/20 to-rose-500/10",
    border: "border-amber-500/30",
    accent: "text-amber-400"
  }
];
