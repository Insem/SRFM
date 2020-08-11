const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function getPosts(req, res) {
  console.log('Get post', req.body);
  get_from_db(req.body)
    .then((doc) => {
      res.status(200);
      console.log('got', doc);
      res.end(JSON.stringify(doc));
    })
    .catch((e) => {
      res.status(500);
      res.send('Error');
    });
}

function get_from_db(post) {
  return new Promise(function (resolve, reject) {

    mongoose.connect(CONSTS.DB.CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });


    Schemas.post.findOne(post, function (err, doc) {
      mongoose.disconnect();

      if (err || !doc) return reject(err);

      resolve(doc);
    });
  })
}
module.exports = getPosts;
