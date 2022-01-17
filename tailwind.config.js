const colors = require('tailwindcss/colors')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {},
    colors: {
      primary: withOpacityValue('--color-primary'),
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      stone: colors.stone,
      rose: colors.rose
    },
    fontFamily: {
      'primary': ['var(--font-primary)']
    }
  },
  plugins: [],
}
