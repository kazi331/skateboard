/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        active1: "#FF7551",
        active2: "#32A7E2",
        active3: "#6C5ECF",
        active4: "#32A7E2",
        active5: "#6C5ECF",
        inactivebg: "#353340",
      },
    },
  },
  plugins: [],
}