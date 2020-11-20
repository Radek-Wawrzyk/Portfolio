export default {
  head: {
    ttitle:'Radoslaw Wawrzyk - Front End Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    // '@nuxtjs/eslint-module'
  ],

  styleResources: {
    scss: [
      './styles/modules/variables.scss',
      './styles/modules/mixins.scss',
    ],
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  axios: {},

  build: {}
}
