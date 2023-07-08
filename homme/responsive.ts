import { Preset } from 'unocss'

function createSizeVariant(size) {
  return function (matcher) {
    if (!matcher.startsWith(`${size}:`)) return matcher
    return {
      matcher: matcher.slice(size.length + 1),
      selector: (s) => `.${size}${s}, .${size} ${s}`,
    }
  }
}

export default function myPreset(options: any = null): Preset {
  return {
    name: 'homme-responsive',
    preflights: [
      {
        getCSS: () => `
          body, html {
            scroll-behavior: smooth;
            width: 100%;
            height: 100%;
          }
        `,
      },
    ],
    rules: [
      [
        /^small$/,
        () => `
          .small {
            --space-multiplier: 0.375;
            --text-sm: 12px;
            --text-md: 14px;
            --text-lg: 24px;
          }
          @media (min-width: 640px) {
            .small{
              --space-multiplier: 0.5;
              --text-sm: 14px;
              --text-md: 16px;
              --text-lg: 26px;
            }
          }
        `,
      ],
      [
        /^medium$/,
        () => `
          .medium {
            --space-multiplier: 0.75;
            --text-sm: 14px;
            --text-md: 16px;
            --text-lg: 28px;
          }
          @media (min-width: 640px) {
            .medium {
              --space-multiplier: 1;
              --text-sm: 16px;
              --text-md: 18px;
              --text-lg: 30px;
            }
          }
        `,
      ],
      [
        /^large$/,
        () => `
            .large {
              --space-multiplier: 1.125;
              --text-sm: 16px;
              --text-md: 18px;
              --text-lg: 32px;
            }
            @media (min-width: 640px) {
              .large {
                --space-multiplier: 1.5;
                --text-sm: 18px;
                --text-md: 20px;
                --text-lg: 34px;
              }
            }
          `,
      ],
    ],
    variants: [
      createSizeVariant('small'),
      createSizeVariant('medium'),
      createSizeVariant('large'),
    ],
    theme: {
      spacing: {
        xs: 'calc( 4px * var(--space-multiplier, 1))',
        sm: 'calc( 8px * var(--space-multiplier, 1))',
        md: 'calc( 16px * var(--space-multiplier, 1))',
        lg: 'calc( 32px * var(--space-multiplier, 1))',
        xl: 'calc( 64px * var(--space-multiplier, 1))',
        '2xl': 'calc( 128px * var(--space-multiplier, 1))',
        '3xl': 'calc( 256px * var(--space-multiplier, 1))',
      },
      fontSize: {
        sm: 'var(--text-sm)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
      },
    },
  }
}
