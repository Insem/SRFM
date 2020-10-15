export default ({
  app
}) => {
  app.router.afterEach(async function (to, from) {
    let id = app.store.dispatch("randPost").then(
      async function (id) {
        console.log("Rand post route", id, to.query.id);
        while (id == to.query.id) {
          id = await app.store.dispatch("randPost");
          console.log("Rand post route d", id, to.query.id);
        }
      })
    //app.store.dispatch("randPost");
  })
}
