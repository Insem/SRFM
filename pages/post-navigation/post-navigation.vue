<template v-cloak>
  <div class="container">
    <div class="tags">
      <h2>ТЕГИ НОВОСТЕЙ:</h2>
      <div class="tag_content">
        <Tag
          v-for="tag in tags"
          :key="tag.id"
          :pale="true"
          v-on:click.native="active(tag)"
          :tag="tag"
          :active="tag.active"
        />
      </div>
      <hr />

      <h2>НОВОСТИ ПО ТЕГАМ:</h2>
      <div class="posts">
        <Small-Post
          v-for="post in posts"
          :key="post.id"
          :tag="getTagById(post.tags[0])"
          :news="post"
          :type="'SmallPost'"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/pages/post-navigation/css/main.scss";
</style>
<script>
import Api from "~/assets/js/api/fetch.js";
import SmallPost from "~/components/news/PreviewPost/PreviewPost.vue";
import Tag from "~/components/news/news-parts/Tag.vue";

const api = Api.ApiPath;

const CONSTS = require("~/assets/js/frontend.consts.js");
export default {
  components: {
    SmallPost,
    Tag,
  },
  data() {
    return {
      tags: [],
      posts: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("activeTags");
    });
  },
  methods: {
    async build() {
      console.log("mounted", this.$route.query.tags);
      const tags = [];
      const rowTags = (this.$route.query.tags || "").split(",");
      rowTags.forEach((it) => {
        const tag = parseInt(it);
        if (!isNaN(tag) && this.tags[tag]) {
          tags.push(this.getTagById(tag));
        }
      });
      console.log("Uri tags", tags);
      if (tags.length != 0) {
        +tags.forEach((el) => {
          this.active(el);
        });
      } else {
        this.posts = await this.searchPosts({});
        console.log(
          "Uri tags wasnt defined",
          tags,
          this.tags.length,
          this.posts
        );
      }
    },
    async searchPosts(query) {
      return await Api.GetReq(CONSTS.PATHS.GETPOST, query);
    },
    async active(tag) {
      this.$set(tag, "active", !tag.active);
      let search = { $and: [] };
      this.tags.forEach((it) => {
        if (it.active) {
          if (process.client) {
            console.log("location", this.$route.query.tags);
          }
          search.$and.push({ tags: { $in: [it.id] } });
        }
      });
      console.log("search", search);
      if (!search.$and.length) search = {};

      this.posts = await this.searchPosts(search);
      this.$route.query.tags = "jgfjgg";
      console.log("Posts", this.posts);
    },
    getTagById(id) {
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].id == id) return this.tags[i];
      }
      //throw err
    },
  },
  async beforeCreate() {
    const data = await Api.GetReq(CONSTS.PATHS.GETTAGS, {});
    data.forEach((it) => {
      it.active = false;
    });
    this.tags = data;
    await this.build();
    console.log("Tags", this.tags);
  },
};
</script>