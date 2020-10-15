const CONSTS = require("../Consts.js");
const Schemas = require("../DataBase/Schemas.js");
const logger = require("../logger/logger.js");

function getTags(req, res) {
  get_from_db(req.body)
    .then((doc) => {
      res.status(200);
      res.end(JSON.stringify(doc));
    })
    .catch((e) => {
      logger.err('007', e);
      res.status(500);
      res.send('Error');
    });
}

function get_from_db(tags) {
  return new Promise(function (resolve, reject) {

    Schemas.tags.find(tags, function (err, doc) {

      if (err || !doc) return reject(err);

      resolve(doc);
    });
  })
}
module.exports = getTags;
