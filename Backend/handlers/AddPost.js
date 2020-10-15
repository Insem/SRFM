const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../DataBase/Schemas.js");
const logger = require("../logger/logger.js");

function addPost(req, res) {
  add_to_db(req.body)
    .then(() => {
      res.status(200);
      res.send('OK');
    }, (e) => {
      logger.err('004', e);
      res.status(500);
      res.send('Error');
    });
}



function add_to_db(posts) {
  return new Promise(function (resolve, reject) {
    Schemas.post.create(posts, function (err, doc) {
      if (err) return reject(err);

      logger.info("Post created", doc.id);
      resolve();
    });
  })
}
module.exports = addPost;
