// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/device'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  devServer: {
    host: '0.0.0.0'
  },
  app: {
    head: {
      title: 'Music Keys - Interactive Musical Keyboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Transform your keyboard into a musical instrument. Play different sounds with dynamic particle effects using A-Z keys.'
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Music Keys - Interactive Musical Keyboard' },
        { property: 'og:description', content: 'Transform your keyboard into a musical instrument with dynamic particle effects.' },
        { property: 'og:image', content: 'https://music-keys.vercel.app/images/preview-image.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Music Keys - Interactive Musical Keyboard' },
        { name: 'twitter:description', content: 'Interactive musical keyboard with dynamic particle effects.' },
        { name: 'twitter:image', content: 'https://music-keys.vercel.app/images/preview-image.png' },

        // 主题色
        { name: 'theme-color', content: '#111827' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://music-keys.vercel.app' }
      ]
    }
  }
})
