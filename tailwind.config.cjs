/** @type {import('tailwindcss').Config} */

const radixColors = require('@radix-ui/colors')

function getRadixColors(object) {
  const newObject = {}
  Object.keys(object).forEach((item, index) => {
    newObject[index + 1] = object[item]
  })
  return newObject
}

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/fulldev-ui/dist/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      base: '"Inter", sans-serif',
      heading: '"Inter", sans-serif',
      subheading: '"Inter ", sans-serif',
    },
    fontWeight: {
      base: 300,
      heading: 700,
      subheading: 600,
      eyebrow: 500,
      label: 500,
      button: 500,
    },
    lineHeight: {
      heading: 1.125,
      subheading: 1.25,
      base: 1.625,
    },
    borderRadius: {
      box: '1rem',
      card: '0.5rem',
      button: '0.2rem',
      input: '0.5rem',
      image: '0.5rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('rippleui')({
      defaultStyle: false,
      themes: [],
    }),
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'light',
          extend: {
            colors: {
              base: getRadixColors(radixColors.sand),
            },
          },
        },
        {
          name: 'dark',
          extend: {
            colors: {
              base: getRadixColors(radixColors.sandDark),
            },
          },
        },
      ],
    }),
    require('fulldev-ui/plugin'),
  ],
}
