/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerif: ["DM Serif Text", "serif"],
        fatFace: ["Abril Fatface", "serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors: {
        forestGreen: '#2B4141',
        backgroundGrey: '#dbdfe6',
        clayBlueGrey: '#cfe2f3ff',
        rust: '#af3800',
        background: '#2b4141',
        accentOne: '#a24936',
        accentTwo: '#ffd29d',
        titleColor: '#f0f9ff',
        navbarDefaultColor: '#94a3b8',
        navbarSelectedColor: '#dbdfe6'
      },
    },
  },
  plugins: [],
}

