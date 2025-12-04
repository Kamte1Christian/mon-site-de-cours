// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['../app/assets/css/tailwind.css',
      'primeicons/primeicons.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  buildDir: '.nuxt',
  build: {
    transpile: []
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000
      }
    }
  }
})
