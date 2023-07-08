import { defineConfig } from 'astro/config'

// Official Astro plugins
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

// 3rd party Astro plugins
import robotsTxt from 'astro-robots-txt'
import UnoCSS from 'unocss/astro'

// Vite plugins
import yaml from '@rollup/plugin-yaml'

// Global site config
import site from './src/data/site'

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [
    svelte(),
    sitemap(),
    prefetch(),
    robotsTxt(),
    UnoCSS(),
  ],
  vite: {
    plugins: [yaml()],
  },
})
