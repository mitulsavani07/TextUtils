/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        primary: '-3px 26px 49px #b6bacb59'
      },
      colors: {
        dark: '#171A21',
        primary: '#584ED2'
      }
    },
  },
  plugins: [],
}