const CONSTS = require("~/assets/js/frontend.consts.js");
export default {
  get ApiPath() {
    return "http://localhost:8080";
  },
  async GetReq(path, data, redirect) {
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
    console.log('Fetch status', res.status, redirect);
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
