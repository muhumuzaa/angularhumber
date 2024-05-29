/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        primary: '#7561FF',
        background1: '#35306C',
        background2: '#06040e',
        secondary: {
          100: '#ED6363',
          200: '#B6363'
        },
        accent: '#7561FF',
        bgSec: '#1B163C'
      },
      fontFamily:{
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

