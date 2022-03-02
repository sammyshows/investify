const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        'bright-green': '#45FF58'
      },

      fontSize: {
        'tiny': '0.6rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
