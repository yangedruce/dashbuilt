const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js}',
    './*.html'
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