const CONSTS = require("../Consts.js");
const Schemas = require("../DataBase/Schemas.js");
const logger = require("../logger/logger.js");

function getPost(req, res) {
  console.log('Get post post', req.body);
  get_from_db(req.body)
    .then((doc) => {
      res.status(200);
      res.end(JSON.stringify(doc));
    }, (e) => {
      logger.err('005', e);
      res.status(500);
      res.end(JSON.stringify(e));
    });
}

function get_from_db(post) {
  return new Promise(function (resolve, reject) {

    logger.info('Find post', post.id);
    Schemas.post.find(post).sort({
      time: -1
    }).exec(function (err, doc) {

      if (err || !doc || doc.length == 0) return reject(err);

      resolve(doc);
    });
  })
}
module.exports = getPost;
