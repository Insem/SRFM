const shortHash = require('short-hash');
const config = require('./auth.json');
const frontendConsts = require('../assets/js/frontend.consts.js');
const CONSTS = {
  SERVER: {
    HASH() {
      return shortHash(Date.now().toString());
    },
    ROUTER: {
      PATHS: frontendConsts.PATHS
    },
    get PORT() {
      return config.serverPort;
    },
    get HOST() {
      return config.serverHost;
    },
    get PROTOCOL() {
      return config.protocol
    }
  },
  DB: {
    AUTH: {
      get USER() {
        return config.user
      },
      get PASS() {
        return config.pass
      },

    },
    COLLECTION: {
      get POSTS() {
        return "posts";
      },
      get TAGS() {
        return "tags";
      },
    },
    get SERVER() {
      return "localhost";
    },
    get NAME() {
      return "SRFM";
    },
    get PORT() {
      return config.dbPort;
    },
    get CONNECT() {
      return "mongodb://" + this.SERVER + ":" + this.PORT + "/" + this.NAME;
    }
  }
};
module.exports = CONSTS;
