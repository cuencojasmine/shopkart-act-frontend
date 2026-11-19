// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Guide step 4: make the Strapi base URL available to client-side code
  runtimeConfig: {
    public: {
      strapiUrl: 'http://localhost:1337',
    },
  },

  css: ['@mdi/font/css/materialdesignicons.css'],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error plugins array exists on the vite config
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
