// tailwind.config.js
/**
 * Tailwind CSS configuration for the Swaraj Fort project.
 * Includes heritage color palette, dark mode support, and typography plugin.
 */
module.exports = {
  darkMode: "class", // enable class‑based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a1f44",
        saffron: "#ffb400",
        parchment: "#f5e6c4",
      },
      fontFamily: {
        serif: ["'Noto Serif'", "serif"],
        sans: ["'Noto Sans'", "sans-serif"],
        devnagri: ["'Noto Sans Devanagari'", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
