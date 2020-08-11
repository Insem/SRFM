const shortHash = require('short-hash');
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
      return 8080;
    }
  },
  DB: {
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
      return "27017";
    },
    get CONNECT() {
      return "mongodb://" + this.SERVER + ":" + this.PORT + "/" + this.NAME;
    }
  }
};
module.exports = CONSTS;
