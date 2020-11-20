export default {
  head: {
    ttitle:'Radoslaw Wawrzyk - Front End Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap'},
    ]
  },

  css: [
    '@/styles/main.scss',
  ],

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

  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
 
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    },
  },
}
