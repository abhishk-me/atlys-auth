/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    colors: {
      accent: "rgb(74,150,255)",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      dark: 'rgb(19,19,25)',
      white: colors.white,
      contrast: {
        3: 'rgba(255,255,255,0.03)',
        5: 'rgba(255,255,255,0.05)',
        8: 'rgba(255,255,255,0.08)',
        10: 'rgba(255,255,255,0.1)',
        15: 'rgba(255,255,255,0.15)',
        20: 'rgba(255,255,255,0.20)',
      },
      red: colors.red,
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

