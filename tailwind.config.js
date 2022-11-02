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
      "1xl":'1.5rem',
      "2xl": '1.75rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem',
      "6xl": '4rem'
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
    borderRadius:{
      "2xl":"1.25rem",
      "3xl":"1.50rem",
      "4xl":"1.85rem",
      "5xl":"2.00rem"

    },
    extend: {
      height:{
        "card":"30.938rem",
        "category-img":"25rem",
        "count-card":"17.688rem",
        "blog-card-sm":"17rem",
        "blog-card-md":"37.438rem",
        "subscribe-card":"23.375rem",
        "15":"3.813rem"
      },
      width:{
        "card":"23.5rem",
        "category-img":"37rem",
        "count-card":"17.688rem",
        "sectional-underline":"9rem",
        "blog-card-sm":"37.438rem",
        "blog-card-md":"37.438rem",
      }
    },
  },
  plugins: [],
}