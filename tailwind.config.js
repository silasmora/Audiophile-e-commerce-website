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
        orangeLight: '#FBAF85',
        listItems: '#FFFFFF',
        blackProject: '#101010',
        rectangleLine: '#fffff',
        grayWhite: '#F1F1F1',
        backgroundWhite: '#FAFAFA',
      },
      backgroundImage: {
        heroMobile: "url(/home/mobile/image-header.jpg)",
        heroTablet: "url(/home/tablet/image-header.jpg)",
        heroDesktop: "url(/home/desktop/image-hero.jpg)"
      }
    },
  },
  plugins: [],
}

