// @type {import('tailwindcss').Config} */
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
const nativewind = require('nativewind/tailwind/native');
const COLORS = require('./src/theme/colors');
const FONTS = require('./src/theme/typography');

module.exports = {
  mode: 'jit',
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    // "./<custom-folder>/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        background: COLORS.background,
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        google: COLORS.google,
        displayRed: COLORS.red,
        displayBlack: COLORS.black,
        displayWhite: COLORS.white,
        displayGray: COLORS.gray,
        displayLightGray: COLORS.lightGray,
        displayGreen: COLORS.green,
      },
      fontFamily: {
        display: FONTS.display,
        displayBold: FONTS.displayBold,
        displayMedium: FONTS.displayMedium,
        displayThin: FONTS.displayThin,
        displayLight: FONTS.displayLight,
      },
    },
  },
  plugins: [nativewind()],
};
