/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700' 
      },
      colors: {
        orange: '#D87D4A',
        orangeLight: '#FBAF85'
      }
    },
  },
  plugins: [],
}

