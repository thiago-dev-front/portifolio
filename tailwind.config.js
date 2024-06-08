/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#191919',
        secondary: '#A7A7A7',
        heading: '#D9D9D9',
        darkMode: '#CCCCCC'
      },
    },
  },
  plugins: [],
}
