module.exports = {
  /*
   ** Headers of the page
   */

  head: {
    title: "sfrm",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Small app which shows cops violence against russians"
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },
  css: [{
    src: "~/assets/css/global/global.scss",
    lang: "scss"
  }],
  buildModules: [
    '@nuxtjs/router'
  ],
  generate: {
    routes: [
      '/'
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
