const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {},
    colors: {
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      stone: colors.stone,
      sky: colors.sky,
      green: colors.green
    }
  },
  plugins: [],
}
