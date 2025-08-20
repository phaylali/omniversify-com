// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    typescript: {
    typeCheck: true
  },
  modules: ['@nuxt/ui','@nuxtjs/i18n','@nuxt/fonts','@nuxt/content'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ar', name: 'Arabic', file: 'ar.json' },
      { code: 'amz', name: 'Amazigh', file: 'amz.json' },
    ]
  },
  css: ['~/assets/css/main.css'],
  
  ui: {
    fonts: true,


  }
})