/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'primary': ['Outfit']
    },
    extend: {
      dropShadow: {
        primary: '-3px 26px 49px #b6bacb59'
      },
      colors: {
        light: '#F8FAFB',
        dark: '#171A21',
        darksecondary: '#292A33',
        highlight: '#F2F2FD',
        primary: '#584ED2'
      }
    },
  },
  plugins: [],
}