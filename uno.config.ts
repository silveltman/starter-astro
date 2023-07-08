// uno.config.ts
import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { presetRadix } from 'unocss-preset-radix'
import { presetShortcuts, presetResponsive } from './homme'

export default defineConfig({
  theme: {
    lineHeight: {
      base: 1.625,
      heading: 1.25,
    },
    fontWeight: {
      base: 400,
      heading: 600,
      button: 600,
    },
    borderRadius: {
      panel: '16px',
      card: '8px',
      image: '8px',
      button: '4px',
      input: '4px',
    },
  },
  presets: [
    presetUno(),
    presetResponsive(),
    presetShortcuts(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        heading: {
          name: 'Inter',
          weights: [600],
          italic: true,
        },
        text: {
          name: 'Inter',
          weights: [300, 400, 500, 600, 700],
          italic: true,
        },
      },
    }),
    // @ts-ignore
    presetRadix({
      lightSelector: '.light',
      darkSelector: '.dark',
      palette: ['slate', 'blue', 'red'],
      aliases: {
        base: 'slate',
        primary: 'blue',
      },
    }),
  ],
})
