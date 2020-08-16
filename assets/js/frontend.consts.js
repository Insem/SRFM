module.exports = {
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
