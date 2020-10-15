const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../DataBase/Schemas.js");
const logger = require("../logger/logger.js");

function getRandPost(req, res) {
  get_from_db()
    .then((doc) => {
      res.status(200);
      res.end(JSON.stringify(doc));
    }, (e) => {
      res.status(500);
      res.end(JSON.stringify(e));
    });
}

function get_from_db() {
  return new Promise(async function (resolve, reject) {
    const count = await Schemas.post.countDocuments().catch(function (e) {
      logger.err('006', e);
      reject(e);
    });
    const post = await Schemas.post.findOne({}, {}, {
      skip: randomInt(1, count)
    }).exec().catch(function (e) {
      logger.err('007', e);
      reject(e);
    });
    logger.info('Rand post count, id', post.id);
    resolve(post.id);
  })
}

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
module.exports = getRandPost;
