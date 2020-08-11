const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function updateViews(req, res) {
  console.log('Get post', req.body);
  update_db(req.body)
    .then((doc) => {
      res.status(200);
      console.log('Got views', doc);
      res.end(doc);
    })
    .catch((e) => {
      res.status(500);
      res.send('Error');
    });
}

function update_db(query) {
  return new Promise(async function (resolve, reject) {

    mongoose.connect(CONSTS.DB.CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    let views = 0;
    console.log('begin');
    await Schemas.post.findOne(query, function (err, doc) {

      if (err || !doc) return reject(err);
      views = doc.views + 1;
      console.log('middle', doc.views, views);
    });
    console.log('Views Updated', views, query);
    await Schemas.post.updateOne(query, {
        views: views
      },
      function (err, doc) {
        console.log('final', err);
        mongoose.disconnect();
        if (err) return reject(err);

      });
    resolve(views);
  })
}
module.exports = updateViews;
