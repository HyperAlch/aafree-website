
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:image', content: 'https://i.imgur.com/PRN3mvf.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo/favicon.ico' },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/css/themify-icons.css" },
      { rel: "stylesheet", href: "/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/responsive.css" }
    ],

    script: [
      { src: "/plugins/mediabox/mediabox.min.js", body: true },
      { src: "/plugins/accordion/accordion.min.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#d5057f', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  generate: {
    fallback: '/error'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/index',
        components: {
          default: resolve(__dirname, 'pages/index'),
        }
      })
    }
  }

}
