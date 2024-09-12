import { defineConfig } from 'astro/config'
// import netlify from '@astrojs/netlify/functions';
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 3000
  },
  site: 'https://wymieranie.mvu.pl',
  integrations: [mdx(), tailwind()],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Przypisy'
    }
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/workspace.xml', '**/.idea/workspace.xml.tmp']
      }
    }
  }
})
