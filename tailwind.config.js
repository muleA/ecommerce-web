/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#9a3412',
          900: '#7c2d12',
          950:'#431407',
          DEFAULT: '#f97316',
        },
      },
    },
  }
}


