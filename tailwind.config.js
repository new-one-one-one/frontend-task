/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      "2xl": '1.75rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem'
    },
    colors:{
      'blue':{
        400: "#2E90EA",
        500: "#428BC1"
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
      height:{
        "card":"30.938rem",
        "category-img":"25rem",
        "count-card":"17.688rem"
      },
      width:{
        "card":"23.5rem",
        "category-img":"37rem",
        "count-card":"17.688rem",
        "sectional-underline":"9rem"
      }
    },
  },
  plugins: [],
}