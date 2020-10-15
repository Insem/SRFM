const mongoose = require("mongoose");
const CONSTS = require("../Consts.js");
const Schema = mongoose.Schema;
const tagScheme = new Schema({
  id: Number,
  val: String,
  type: Number
}, {
  collection: CONSTS.DB.COLLECTION.TAGS
});
const postScheme = new Schema({
  id: {
    type: String,
    default: function () {
      return CONSTS.SERVER.HASH()
    }
  },
  level: Number,
  tags: [Number],
  views: {
    type: Number,
    default: 0
  },
  mainImg: Object,
  header: String,
  author: {
    type: String,
    default: 'Тыртымыр кучков'
  },
  time: Number,
  version: String,
  blocks: Array
}, {
  collection: CONSTS.DB.COLLECTION.POSTS
});
const Post = mongoose.model("Post", postScheme);
const Tags = mongoose.model("Tags", tagScheme);
module.exports = {
  post: Post,
  tags: Tags
}
