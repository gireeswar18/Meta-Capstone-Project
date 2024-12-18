/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': "rgb(73, 94, 87)"
      },
      fontFamily: {
        "markazi": "Markazi Text",
        "karla" : "Karla"
      }
    },
  },
  plugins: [],
}