/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Baloo":["Baloo Bhai 2" , "sans"]
      },
      letterSpacing: {
        "1px":"1px",
      }
    },
  },
  plugins: [],
}

