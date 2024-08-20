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
        clayBlueGrey: '#cfe2f3ff'
      },
    },
  },
  plugins: [],
}

