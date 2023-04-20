import { defineConfig } from 'astro/config'

// Astro plugins
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'
import partytown from '@astrojs/partytown'

// Third party plugins
import robotsTxt from 'astro-robots-txt'
import yaml from '@rollup/plugin-yaml'

// Global site config
import siteConfig from './src/data/config.mjs'

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  integrations: [
    tailwind(),
    svelte(),
    sitemap(),
    prefetch(),
    robotsTxt(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [yaml()],
  },
})
