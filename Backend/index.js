const express = require('express')
const app = express();
const cors = require('cors');

const loadImg = require('./handlers/LoadImg.js');
const addPost = require('./handlers/AddPost.js');
const getPost = require('./handlers/GetPost.js');
const getTags = require('./handlers/GetTags.js');
const updateViews = require('./handlers/UpdateViews.js');

const bodyParser = require("body-parser");
const CONSTS = require("./Consts.js");
console.log(CONSTS.DB.CONNECT);
app.use(bodyParser.json());
app.options(CONSTS.SERVER.ROUTER.PATHS.UPLOADIMG, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.ADDPOST, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.GETPOST, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.GETTAGS, cors());
app.options(CONSTS.SERVER.ROUTER.PATHS.UPDATEVIEWS, cors());

app.post(CONSTS.SERVER.ROUTER.PATHS.UPLOADIMG, cors(), loadImg.upload, loadImg.callBack);
app.post(CONSTS.SERVER.ROUTER.PATHS.ADDPOST, cors(), addPost);
app.post(CONSTS.SERVER.ROUTER.PATHS.GETPOST, cors(), getPost);
app.post(CONSTS.SERVER.ROUTER.PATHS.GETTAGS, cors(), getTags);
app.post(CONSTS.SERVER.ROUTER.PATHS.UPDATEVIEWS, cors(), updateViews);

app.listen(CONSTS.SERVER.PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${CONSTS.SERVER.PORT}`)
})
