/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      backgroundColor:{
        'black-blue' : '#1f242d',
        'second-black-blue': '#323946',
        'main-color' : '#0ef',
        'marka-blue': 'rgba(0,0,0,.1)',
      },
      colors:{
        'black-blue' : '#1f242d',
        'second-black-blue': '#323946',
        'main-color' : '#0ef'
      },
      zIndex:{
        '100': '100'
      },
      width:{
        '500':'500px',
        '400': '400px',
        '450': '450px',
        '3-screen':'35vw',
        '48%':'48%'
      },
      height:{
        '500':'500px',
        '400': '400px',
        '450': '450px',
      },
      boxShadow:{
        'aqua': '-1px 1px 11px 0px rgba(0,238,255,0.52)'
      },
      screens:{
        'xs': '400px',
        'ss': '500px'
      }

    },
  },
  plugins: [],
}
