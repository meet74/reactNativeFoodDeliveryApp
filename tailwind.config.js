// @type {import('tailwindcss').Config} */
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
const nativewind = require("nativewind/tailwind/native");

module.exports = {
  mode: "jit",
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./<custom-folder>/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#FFF8EE",
        primary: "#EEA734",
        secondary: "#EEA374",
        google: "#4285F4",
      },
      fontFamily: {
        display: ["Inter-Regular", "sans-serif"],
        displayBold: ["Inter-Bold", "sans-serif"],
        displayMedium: ["Inter-Medium", "sans-serif"],
        displayThin: ["Inter-Thin", "sans-serif"],
      },
    },
  },
  plugins: [nativewind()],
};
