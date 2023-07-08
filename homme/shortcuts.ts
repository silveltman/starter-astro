import { Preset } from 'unocss'

export default function myPreset(options: any = null): Preset {
  return {
    name: 'homme-shortcuts',
    shortcuts: {
      heading: 'text-hue12 text-lg leading-heading font-heading',
      text: 'text-hue11 text-base leading-base font-base',
    },
  }
}
