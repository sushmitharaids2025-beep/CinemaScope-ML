/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinema: {
          bg: '#080b13',
          card: '#0f172a',
          surface: '#131d38',
          border: '#1e293b',
          accent: '#6366f1',
          accentGlow: '#818cf8',
          purple: '#a855f7',
          cyan: '#06b6d4',
          rose: '#f43f5e',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon-blue': '0 0 20px -3px rgba(99, 102, 241, 0.45)',
        'neon-purple': '0 0 20px -3px rgba(168, 85, 247, 0.45)',
        'neon-cyan': '0 0 20px -3px rgba(6, 182, 212, 0.45)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
