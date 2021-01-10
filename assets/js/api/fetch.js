const CONSTS = require("~/assets/js/frontend.consts.js");
export default {

  get ApiPath() {
    return `${CONSTS.SERVER.PROTOCOL}://${CONSTS.SERVER.HOST}:${CONSTS.SERVER.PORT}`;
  },
  async GetReq(path, data, redirect) {
    console.log('GetReq', path, data);
    let res = await fetch(this.ApiPath + path, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.status != 200 && redirect) {

      redirect('/404')
    }
    return await res.json();
  },
  async SendReq(path, data) {
    await fetch(this.ApiPath + path, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },

  async UpdateViews(data) {
    await fetch(this.ApiPath + CONSTS.PATHS.UPDATEVIEWS, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
