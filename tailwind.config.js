/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#15161C',
        'red-color' : '#CF1839',
        'background-color2':  '#F5F5F5',





      },
      lineHeight: {
        'line-h' : '79px'
      },
      height: {
        'hh' : '700px',
        'hh2' : '800px',
        'hh3' : '550px',
        'h1' : '800px',
        'hh4' : '430px',
        'hh5' : '580px',

      },
      width: {
        'ww' : '200px',
        'ww2' : '470px',
        'ww3' : '480px'
        
      },
      maxWidth: {
        'w1' : '1000px',
        'www' : '800px',
        'www2' : '1100px',
        'www3' : '480px',
        'www4' : '280px',
        'www5' : '530px'


      },
      padding: {
        'pp1' : '800px'
        
      }

    },
  },
  plugins: [],
}

