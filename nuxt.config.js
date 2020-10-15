const conf = require('./Backend/auth.json');
const fs = require('fs');
const path = require('path');
const {
  getHeapCodeStatistics
} = require('v8');
const {
  config
} = require('process');

function getConf() {
  return conf
}

function getServer() {
  let server = {
    port: conf.clientPort,
    host: conf.clientHost
  };
  if (conf.protocol == 'https') {
    server.https = {
      key: fs.readFileSync(path.resolve(__dirname, './Backend/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './Backend/server.crt'))
    };
  }
  return server;
}

function getHead() {
  const description = "Сайт, который описывает насилие государтсвенных структур по отношению к оппозиционерам";
  //console.log('config', getConf());
  const img = `/seo/logo.png`;
  const title = "СРОМ"
  return {
    title: title,
    meta: [{
        charset: "utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        hid: "description",
        name: "description",
        content: description
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Политика, насилие, полиция, новости, сми",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: title,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: img,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: description,
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title ",
        content: title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `${conf.protocol}://${conf.clientHost}/seo/twitter-logo.png`,
      },
    ],
    link: [{
      rel: "icon",
      type: "image/svg+xml",
      href: "/fav.svg"
    }]

  }
}
module.exports = {
  /*
   ** Headers of the page
   */

  server: getServer(),
  modules: [
    [
      '@nuxtjs/sitemap',

      ["nuxt-compress",
        {
          gzip: {
            cache: true
          },
          brotli: {
            threshold: 10240
          }
        }
      ]
    ]
  ],
  sitemap: {
    hostname: 'https://xn-----6kckmc0cckgeczcte.org/',
    exclude: [
      '/404'
    ],
    routes: [{
        url: '/',
        priority: 1,
        changefreq: 'weekly',
      },
      {
        url: '/post-navigation',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=a1f64536',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=bfefefba',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=a04d3074',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=c1797ef9',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=4cf4389a',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=ff37aef7',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=543d7f3a',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=2912d3d7',
        priority: 0.5,
        changefreq: 'weekly',
      },
      {
        url: '/post?id=6c7c42d7',
        priority: 0.5,
        changefreq: 'weekly',
      },

    ],
    gzip: true
  },
  plugins: [{
    src: '~/plugins/route.js',
    mode: 'client'
  }],
  loading: {
    color: 'rgba(152,57,63,0.7)',
    height: '2px',
    continuous: true
  },
  head: getHead(),
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
   ** Build configuration
   */
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    },
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
