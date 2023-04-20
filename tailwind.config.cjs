/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // './node_modules/fulldev-ui/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    fontFamily: {
      heading: '"Rubik", sans-serf',
      body: '"Inter", sans-serif',
    },
    borderRadius: {
      box: '24px',
      button: '4px',
      input: '12px',
      eyebrow: '12px',
      image: '4px',
      full: '9999px',
      none: '0px',
    },
    boxShadow: {
      box: '0 0 0 1px',
      image: '0 0 0 1px',
      'button-primary': '0 0 0 1px',
    },
    boxShadowColor: {
      box: '#000000',
      image: '#000000',
      'button-primary': '#000000',
    },
  },
  plugins: [
    require('fulldev-ui/plugin'),
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          backgroundColor: {
            300: '#ffffff',
            500: '#f0f2f5',
            700: '#d1d5db',
            'button-primary': '#C31114',
          },
          textColor: {
            300: '#353535',
            500: '#181818',
            700: '#0A0A0A',
            'button-primary': '#ffffff',
            'button-secondary': '#C31114',
            'button-tertiary': '#C31114',
            'eyebrow': '#000000',
          },
          borderColor: {
            300: '#e2e8f0',
            500: '#cbd5e1',
            700: '#94a3b8',
          },
          ringColor: {
            'button-secondary': '#C31114',
          },
          colors: {
            accent: {
              300: '#a5b4fc',
              500: '#6366f1',
              700: '#a5b4fc',
            },
            success: {
              300: '#86efac',
              500: '#22c55e',
              700: '#15803d',
            },
            warning: {
              300: '#fdba74',
              500: '#f97316',
              700: '#c2410c',
            },
            danger: {
              300: '#fca5a5',
              500: '#ef4444',
              700: '#b91c1c',
            },
          },
        }
      },
      themes: [
        {
          name: 'dark',
          extend: {
            backgroundColor: {
              300: '#353535',
              500: '#181818',
              700: '#0A0A0A',
              'button-primary': '#C31114',
            },
            textColor: {
              300: '#d1d5db',
              500: '#f0f2f5',
              700: '#ffffff',
              'button-primary': '#ffffff',
              'button-secondary': '#ffffff',
              'button-tertiary': '#ffffff',
              'eyebrow': '#d1d5db',
            },
            borderColor: {
              300: '#e2e8f0',
              500: '#cbd5e1',
              700: '#94a3b8',
            },
            ringColor: {
              'button-secondary': '#C31114',
            },
            colors: {
              accent: {
                300: '#a5b4fc',
                500: '#6366f1',
                700: '#a5b4fc',
              },
              success: {
                300: '#86efac',
                500: '#22c55e',
                700: '#15803d',
              },
              warning: {
                300: '#fdba74',
                500: '#f97316',
                700: '#c2410c',
              },
              danger: {
                300: '#fca5a5',
                500: '#ef4444',
                700: '#b91c1c',
              },
            },
          }
        },
      ]
    })
  ],
}
