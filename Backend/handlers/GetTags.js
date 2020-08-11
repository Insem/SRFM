const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function getTags(req, res) {
  console.log('Get tags', req.body);
  get_from_db(req.body)
    .then((doc) => {
      res.status(200);
      console.log('got tags', doc);
      res.end(JSON.stringify(doc));
    })
    .catch((e) => {
      res.status(500);
      res.send('Error');
    });
}

function get_from_db(tags) {
  return new Promise(function (resolve, reject) {

    mongoose.connect(CONSTS.DB.CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });


    Schemas.tags.find(tags, function (err, doc) {
      mongoose.disconnect();

      if (err || !doc) return reject(err);

      resolve(doc);
    });
  })
}
module.exports = getTags;
