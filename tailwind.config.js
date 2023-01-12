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
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
  ],
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
