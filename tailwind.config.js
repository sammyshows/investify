module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "bg-blue": "#aedfe2"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
