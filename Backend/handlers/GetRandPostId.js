const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function getRandPost(req, res) {
  console.log('Get post', req.body);
  get_from_db()
    .then((doc) => {
      res.status(200);
      console.log('User got post. Id: ', doc);
      res.end(JSON.stringify(doc));
    })
    .catch((e) => {
      console.log('Error happened with getting post.', e);
      res.status(500);
      res.end('Error');
    });
}

function get_from_db() {
  return new Promise(async function (resolve, reject) {

    mongoose.connect(CONSTS.DB.CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const count = await Schemas.post.countDocuments().catch(function (e) {
      console.log('RandomPost error', e);
      reject(e);
    });
    let post = await Schemas.post.findOne().skip(randomInt(1, count)).catch(function (e) {
      console.log('RandomPost error', e);
      reject(e);
    });
    console.log('Rand post count, id', count, post.id);
    resolve(post.id);
  })
}

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
module.exports = getRandPost;
