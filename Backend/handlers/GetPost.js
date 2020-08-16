const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function getPost(req, res) {
  console.log('Get post', req.body);
  get_from_db(req.body)
    .then((doc) => {
      res.status(200);
      console.log('User got post. Id: ', doc.id);
      res.end(JSON.stringify(doc));
    })
    .catch((e) => {
      console.log('Error happened with getting post.', e);
      res.status(500);
      res.end('Error');
    });
}

function get_from_db(post) {
  return new Promise(function (resolve, reject) {

    mongoose.connect(CONSTS.DB.CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Find post', JSON.stringify(post));
    Schemas.post.find(post).sort({
      time: -1
    }).exec(function (err, doc) {
      mongoose.disconnect();

      if (err || !doc || doc.length == 0) return reject(err);

      resolve(doc);
    });
  })
}
module.exports = getPost;
