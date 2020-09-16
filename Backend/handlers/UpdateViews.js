const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function updateViews(req, res) {
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
  return new Promise(function (resolve, reject) {

    let connect = mongoose.connect(CONSTS.DB.CONNECT, {
        useNewUrlParser: true
      })
      .then(() => {
        console.log('Connection ok update views');
      })
      .catch(function (e) {
        console.log('RandomPost error 14', e);
        reject(e);
      });

    let views = 0;
    console.log('begin');
    Schemas.post.findOne(query, function (err, doc) {

      if (err || !doc) return reject(err);
      views = doc.views + 1;
      console.log('middle++++++++++++++++++++++++++++++++++++++++++++++++', doc.views, views);
    })
    console.log('Views Updated', views, query);
    Schemas.post.updateOne(query, {
        views: views
      },
      function (err, doc) {
        //    
        if (err) return reject(err);
        console.log('final--------------------------------------------------');

      });

    connect.close();
    console.log('vefore disconnect');
    resolve(views);
  })
}
module.exports = updateViews;
