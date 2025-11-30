/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          red: "#FF5555",
          yellow: "#FFD700",
          green: "#00FF99",
          blue: "#00CCFF"
        }
      },
      boxShadow: {
        "neon-green": "0 0 16px rgba(0,255,153,0.45)",
        "neon-yellow": "0 0 16px rgba(255,215,0,0.45)",
        "neon-red": "0 0 16px rgba(255,85,85,0.5)",
        "neon-blue": "0 0 16px rgba(0,204,255,0.5)",
        "neon-orange": "0 0 16px rgba(251,146,60,0.45)"
      }
    }
  },
  plugins: []
};
