/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sofia':['Sofia', 'cursive'],
      },
    },
  },
  plugins: [],
}