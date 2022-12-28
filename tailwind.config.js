/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/backgrand/PolygonLuminary.svg')",
        'footer-texture': "url('/backgrand/BackgroundPattern54Colour (1).svg')",
        'ehihgt-backgrand': "url('/backgrand/G68b-1.svg')",
        'orange-backgrand': "url('/backgrand/Background-18.jpg')",
        'menBook-backgrand': "url('/backgrand/librarybook.png')",

      }

       },
    fontFamily: {
     'body':['FashionVictim'],
     'bookman':['URW Bookman L']

    }
  },
  plugins: [],
}
