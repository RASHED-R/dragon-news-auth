/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-color': '#403F3F',
        'second-color': '#706F6F',
        'third-color': '#9F9F9F',
        'border-color': '#E7E7E7',
        'star-color': '#FF8C47',

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

