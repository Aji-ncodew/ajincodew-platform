/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ajincodew community platform',
  author: 'Achraf TAFFAH',
  headerTitle: 'Ajincodew ',
  description: 'Ajincodew moroccan IT community',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://ajincodew.netlify.app',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'taffahachraf184@gmail.com',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=%2B212612527672&text=im+interested&type=phone_number&app_absent=0',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com/@aji_ncodew',
  linkedin: 'https://www.linkedin.com/company/ajincodew2024/',
  instagram: 'https://www.instagram.com/ajincodew_/',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
