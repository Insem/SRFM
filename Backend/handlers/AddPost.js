const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function addPost(req, res) {
  add_to_db(req.body)
    .then(() => {
      res.status(200);
      res.send('OK');
    })
    .catch((e) => {
      console.log(e);
      res.status(500);
      res.send('Error');
    });
}



function add_to_db(posts) {
  return new Promise(function (resolve, reject) {
    console.log("posts", posts, CONSTS.DB.CONNECT);

    mongoose.connect(CONSTS.DB.CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    //parsePost(posts);
    Schemas.post.create(posts, function (err, doc) {
      mongoose.disconnect();

      if (err) return reject(err);

      console.log("Сохранен объект user", doc);
      resolve();
    });
  })
}
module.exports = addPost;
