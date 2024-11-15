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
      dropShadow: {
        // TO DO: Add drop shadow customization for accent triangle in hero so that it has depth
      },
      colors: {
        forestGreen: '#2B4141',
        backgroundGrey: '#dbdfe6',
        clayBlueGrey: '#cfe2f3ff',
        rust: '#af3800',
        // First color pass, green with orange accent and grey secondaries
        // background: '#2b4141',
        // accentOne: '#a24936',
        // accentTwo: '#ffd29d',
        // titleColor: '#f0f9ff',
        // navbarDefaultColor: '#94a3b8',
        // navbarSelectedColor: '#dbdfe6',
        // Second color pass, based off blue cinos and cream crewneck combo
        // background: '#1D6087',
        background: '#144866',
        accentOne: '#6A3125',             //chestnut: 994636      //best brown?: 6A3125
        accentTwo: '#af3800',
        titleColor: '#000000',
        navbarDefaultColor: '#dbdfe6',
        navbarSelectedColor: '#a24936'
      },
    },
  },
  plugins: [],
}

