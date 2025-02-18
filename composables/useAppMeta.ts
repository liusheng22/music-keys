export function useAppMeta() {
  const config = {
    title: 'Music Keys',
    titleTemplate: '%s - Interactive Musical Keyboard',
    description: 'Transform your keyboard into a musical instrument. Play different sounds with dynamic particle effects using A-Z keys.',
    image: 'https://music-keys.vercel.app/images/preview-image.png',
    keywords: 'music keys, music keyboard, musical keyboard, keyboard sound, music, keyboard, interactive, musical, instrument, particle, effects, A-Z, numbers',
    url: 'https://music-keys.vercel.app'
  }

  useSeoMeta({
    title: config.title,
    titleTemplate: config.titleTemplate,
    description: config.description,
    ogTitle: `${config.title} - Interactive Musical Keyboard`,
    ogDescription: config.description,
    ogImage: config.image,
    ogUrl: config.url,
    twitterCard: 'summary_large_image',
    twitterTitle: `${config.title} - Interactive Musical Keyboard`,
    twitterDescription: config.description,
    twitterImage: config.image
  })

  useHead({
    title: config.title,
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: config.url }
    ],
    meta: [
      {
        name: 'keywords',
        content: config.keywords
      },
      {
        name: 'description',
        content: config.description
      },
      { property: 'og:title', content: config.title },
      {
        property: 'og:description',
        content: config.description
      },
      { property: 'og:image', content: config.image }
    ]
  })

  return config
}
