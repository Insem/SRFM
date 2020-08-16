<template>
  <div class="container">
    <div class="backgrounFigure">
      <Background-Figures />
    </div>
    <div class="face_block">
      <Small-Post :tag="getTagById(bigPosts.up.tags[0])" :news="bigPosts.up" :type="'MainPost'" />
      <div>
        <Last-News :tags="tags" :last="posts.slice(0,5)" />
      </div>
    </div>
    <div class="smallNews_block">
      <Small-Post
        v-for="post in upPosts"
        :key="post.id"
        :tag="getTagById(post.tags[0])"
        :news="post"
        :type="'SmallPost'"
      />
    </div>
    <div class="pageNews_block">
      <Small-Post :tag="getTagById(bigPosts.bot.tags[0])" :news="bigPosts.bot" :type="'PagePost'" />
    </div>
    <div class="category_news">
      <div class="head">
        <h1>{{mainCategory.val}}</h1>
        <Tag :count="mainCategory.count" :color="'#98393F'" />
      </div>
      <div class="news_block">
        <div class="left">
          <Small-Post
            v-for="post in botPosts"
            :key="post.id"
            :tag="getTagById(post.tags[0])"
            :news="post"
            :type="'SmallPost'"
          />
        </div>
        <div class="right">
          <Small-Post :tag="getTagById(0)" :news="squarePost" :type="'SquarePost'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BackgroundFigures from "~/components/page-parts/BackgroundFigures.vue";
import LastNews from "~/components/LastNews.vue";
import SmallPost from "~/components/news/SmallPost.vue";
import Tag from "~/components/news/news-parts/TagCategory.vue";

import Api from "~/assets/js/api/fetch.js";
const CONSTS = require("~/assets/js/frontend.consts.js");
export default {
  data() {
    return {
      squarePost: Object,
      bigPosts: Object,
      upPosts: [],
      botPosts: [],
      tags: [],
      posts: [],
      mainCategory: {
        count: 0,
        val: String,
      },
    };
  },
  methods: {
    getTagById(id) {
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].id == id) return this.tags[i];
      }
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("activeMain");
    });
  },
  async fetch() {
    console.log("tags", CONSTS.PATHS.GETTAGS);
    this.tags = await Api.GetReq(CONSTS.PATHS.GETTAGS, {});
    this.posts = await Api.GetReq(CONSTS.PATHS.GETPOST, { level: 3 });

    let mainTag = this.tags.filter((it) => it.type == 1)[0];
    console.log("Tag", mainTag);

    this.posts.forEach((it) => {
      if (it.tags.indexOf(mainTag.id) != -1) {
        if (this.botPosts.length != 3) {
          console.log("Bot posts");
          this.botPosts.push(it);
        }
        this.mainCategory.count++;
      } else if (this.upPosts.length != 3) this.upPosts.push(it);
    });
    this.mainCategory.val = mainTag.val;
    this.squarePost = this.botPosts.splice(0, 1)[0];
    console.log("Squarepost", this.getTagById(this.squarePost.tags[0]));

    const level = {};
    (
      await Api.GetReq(CONSTS.PATHS.GETPOST, {
        $or: [{ level: 1 }, { level: 2 }],
      })
    ).forEach((it) => {
      if (it.level == 1) level.up = it;
      else if (it.level == 2) level.bot = it;
    });
    this.bigPosts = level;
  },
  components: {
    BackgroundFigures,
    LastNews,
    SmallPost,
    Tag,
  },
};
</script>
<style lang="scss">
@import "~/pages/main/css/main.scss";
</style>
