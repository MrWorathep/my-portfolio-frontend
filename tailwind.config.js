/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#fefcf7",
          "background-card": "#f5f5f7",
          "background-soft-card": "#f1f5f9",
        },
        dark: {
          background: "#171c28",
          "background-card": "#222a44",
          "background-soft-card": "#1f2640",
        },
      },
    },
  },
  plugins: [],
};
