const config = require("../../Backend/auth.json");
module.exports = {
  get SERVER() {
    return {
      get HOST() {
        return config.serverHost
      },
      get PORT() {
        return config.serverPort
      },
      get PROTOCOL() {
        return config.protocol
      }
    }
  },
  get PATHS() {
    return {
      get UPLOADIMG() {
        return "/api/uploadImg";
      },
      get ADDPOST() {
        return "/api/sendPost";
      },
      get GETPOST() {
        return "/api/getPost";
      },
      get GETTAGS() {
        return "/api/getTags";
      },
      get UPDATEVIEWS() {
        return "/api/updateViews";
      },
      get GETRANDPOST() {
        return "/api/getRandPostId";
      }
    }
  }
}
