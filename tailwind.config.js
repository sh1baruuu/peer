/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-100": "#F5F5F5",
        "black-100": "#202020",
        "green": "#049507",
        "green-dark": "#036805",
        "yellow": "rgb(255, 187, 0)"
      },
      boxShadow: {
        "inner": "inset 2px 2px 5px 5px rgba(255, 255, 255, 0.2), inset -2px -2px 5px 5px rgba(0, 0, 0, 0.4)"
      }
    },
  },
  plugins: [],
}

