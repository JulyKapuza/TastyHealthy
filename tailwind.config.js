/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      'logo': ['Permanent Marker']
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1824px'
      // => @media (min-width: 1824px) { ... }
    },
    colors: {
      inherit: 'inherit',
      current: 'CurrentColor',
      transparent: 'transparent',
      white: 'white',
      black: '#000',
      green: '#64ff86',
      blue: '#38bdf8',
      dark: '#263238',
      panel: 'rgb(255 255 255 / 10%)',
      gradient: 'linear-gradient(121.17deg,#263238,#37474f 94.02%)',
      main: "#0891b2",

    },
    extend: {
      gradient: {
        background: 'linear-gradient(121.17deg,#263238,#37474f 94.02%)'
      },
      container: {
        center: true,
        padding: '16px'
      },
    }
  },
  plugins: []
}