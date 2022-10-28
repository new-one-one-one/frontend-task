/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'blue':{
        400: "#2E90EA",
      },
      'white': {
        100: "#FFFFFF"
      },
      'black':{
        900:"#000000"
      },
      'grey':{
        500:"#5F5F5F",
        600:"#0F0F0F"
      }
    },
    extend: {
    },
  },
  plugins: [],
}