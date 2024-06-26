/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico':["Pacifico", 'cursive'],
      },
      dropShadow: {
        'green': '5px 5px 2px rgba(155, 55, 55, 0.9)',
        'smaller': '3px 3px 1px rgba(55, 55, 55, 0.9)',
      },
      boxShadow: {
        'type': '3px 3px 5px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}