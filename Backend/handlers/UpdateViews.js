const CONSTS = require("../Consts.js");
const Schemas = require("../DataBase/Schemas.js");
const logger = require("../logger/logger.js");

async function updateViews(req, res) {
  await update_db(req.body)
    .then((doc) => {
      res.status(200);
      res.end();
    }, (e) => {
      logger.err('009', e);
      res.status(500);
      res.end('Error');
    })
}

function update_db(query) {
  return new Promise(async function (resolve, reject) {
    let views = 0;
    await Schemas.post.findOne(query, function (err, doc) {

      if (err || !doc) return reject(err);
      views = doc.views + 1;
    });
    console.log('Views Updated', views, query);
    await Schemas.post.updateOne(query, {
        views: views
      },
      function (err, doc) {

        if (err) return reject(err);

      });
    resolve(views);
  })
}
module.exports = updateViews;
