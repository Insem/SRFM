const express = require('express')
const app = express();
const cors = require('cors');
const DB = require("./DataBase/db").init();
const loadImg = require('./handlers/LoadImg.js');
//const addPost = require('./handlers/AddPost.js');
const getPost = require('./handlers/GetPost.js');
const getRandPost = require('./handlers/GetRandPostId.js');
const getTags = require('./handlers/GetTags.js');
const updateViews = require('./handlers/UpdateViews.js');
const bodyParser = require("body-parser");
const CONSTS = require("./Consts.js");
const logger = require("./logger/logger.js");

process.on('warning', e => logger.warning(e.stack));
logger.info(CONSTS.DB.CONNECT);

app.use(bodyParser.json({
  limit: '50mb'
}));
app.options(CONSTS.SERVER.ROUTER.PATHS.UPLOADIMG, cors());
//app.options(CONSTS.SERVER.ROUTER.PATHS.ADDPOST, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.GETPOST, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.GETTAGS, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.UPDATEVIEWS, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.GETRANDPOST, cors());

app.post(CONSTS.SERVER.ROUTER.PATHS.UPLOADIMG, cors(), loadImg.upload, loadImg.callBack);
//app.post(CONSTS.SERVER.ROUTER.PATHS.ADDPOST, cors(), addPost);
app.post(CONSTS.SERVER.ROUTER.PATHS.GETPOST, cors(), getPost);
app.post(CONSTS.SERVER.ROUTER.PATHS.GETTAGS, cors(), getTags);
app.post(CONSTS.SERVER.ROUTER.PATHS.UPDATEVIEWS, cors(), updateViews);
app.post(CONSTS.SERVER.ROUTER.PATHS.GETRANDPOST, cors(), getRandPost);
app.get('/test', function (req, res) {
  console.log('listen');
  res.send('ok');
  res.end();
});

module.exports = app;
