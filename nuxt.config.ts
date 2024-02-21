// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    '@vee-validate/nuxt',
  ],
  shadcn: {
    prefix: 'Ui',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
