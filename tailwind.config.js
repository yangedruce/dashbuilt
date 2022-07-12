const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './*.{html,js}',
    './src/*/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins, sans-serif'],
      }
    },
  },
  plugins: [],
}