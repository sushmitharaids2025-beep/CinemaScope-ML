// Preset movie configurations for instant demonstration in PBL review
export const PRESET_MOVIES = [
  {
    id: "preset-1",
    name: "Summer Sci-Fi Tentpole",
    tagline: "High-Budget Global Franchise",
    badge: "Low Risk • High ROI",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    data: {
      title: "Chronicles of Nebula",
      budget: 185, // in Millions USD
      genre: "Sci-Fi",
      runtime: 142, // in minutes
      rating: 8.2, // out of 10
      voteCount: 16500,
      popularity: 145.8,
      releaseYear: 2026,
      releaseSeason: "Summer"
    }
  },
  {
    id: "preset-2",
    name: "Indie Horror Sensation",
    tagline: "Micro-budget High Viral Multiplier",
    badge: "Low Risk • Viral ROI",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    data: {
      title: "The Whispering Walls",
      budget: 4.8,
      genre: "Horror",
      runtime: 92,
      rating: 7.5,
      voteCount: 8900,
      popularity: 88.4,
      releaseYear: 2026,
      releaseSeason: "Fall / Halloween"
    }
  },
  {
    id: "preset-3",
    name: "Overbudget Action Venture",
    tagline: "High Budget with Low Buzz / Low Rating",
    badge: "High Risk • Loss Concern",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    data: {
      title: "Velocity Overdrive",
      budget: 260,
      genre: "Action",
      runtime: 168,
      rating: 5.4,
      voteCount: 2800,
      popularity: 31.2,
      releaseYear: 2026,
      releaseSeason: "Spring"
    }
  },
  {
    id: "preset-4",
    name: "Prestige Drama / Biopic",
    tagline: "Mid-budget Quality Driven",
    badge: "Moderate Risk • Steady",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    data: {
      title: "The Silent Maestro",
      budget: 32,
      genre: "Drama",
      runtime: 135,
      rating: 8.5,
      voteCount: 7100,
      popularity: 58.0,
      releaseYear: 2026,
      releaseSeason: "Winter / Awards"
    }
  },
  {
    id: "preset-5",
    name: "Family Animated Adventure",
    tagline: "Broad Demographic Appeal",
    badge: "Low Risk • Solid",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    data: {
      title: "Pip & The Forest Realm",
      budget: 85,
      genre: "Animation",
      runtime: 98,
      rating: 7.7,
      voteCount: 11200,
      popularity: 92.6,
      releaseYear: 2026,
      releaseSeason: "Holiday"
    }
  }
];

export const GENRE_OPTIONS = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller"
];
