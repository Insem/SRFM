const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schemas = require("../Schemas.js");


function getRandPost(req, res) {
  console.log('Get post', req.body);
  get_from_db()
    .then((doc) => {
      res.status(200);
      console.log('User got rand post. Id: ', doc);
      res.end(JSON.stringify(doc));
    })
    .catch((e) => {
      console.log('Error happened with getting rand post.', e);
      res.status(500);
      res.end(JSON.stringify(e));
    });
}

function get_from_db() {
  return new Promise(async function (resolve, reject) {

    await mongoose.connect(CONSTS.DB.CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).catch(function (e) {
      console.log('RandomPost error 14', e);
      reject(e);
    });

    const count = await Schemas.post.countDocuments().catch(function (e) {
      console.log('RandomPost error 1', e);
      reject(e);
    });
    const post = await Schemas.post.findOne().exec().catch(function (e) {
      console.log('RandomPost error 2', e);
      reject(e);
    });
    console.log('Rand post count, id', count, post.id);
    mongoose.disconnect();
    resolve(post.id);
  })
}

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
module.exports = getRandPost;
