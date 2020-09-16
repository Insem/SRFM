<template>
  <div class="container" v-if="postData.mainImg">
    <div class="post_content">
      <Post-Img :src="postData.mainImg.file.url" :source="postData.mainImg.caption" />
      <div class="newsAttr">
        <Time :time="postData.time" />
        <Views :views="postData.views" />
        <div class="postTags">
          <Tag v-for="tag in tags" :key="tag.id" :tag="tag" :color="'black'" />
        </div>
      </div>

      <h1>{{postData.header}}</h1>
      <template v-for="(block,i) in postData.blocks">
        <p v-if="block.type == 'paragraph'" v-bind:key="i" v-html="block.data.text"></p>
        <Quote
          v-if="block.type == 'quote'"
          :text="block.data.text"
          v-bind:key="i"
        >{{block.data.text }}</Quote>
        <Post-Img
          v-if="block.type == 'image'"
          :src="block.data.file.url"
          :source="block.data.caption"
          v-bind:key="i"
        >{{block.data.text }}</Post-Img>
        <p v-if="block.type == 'personality'" v-bind:key="i">
          <Expert
            :src="block.data.photo"
            :author="block.data.name"
            :description="block.data.description"
          >{{block.data.text }}</Expert>
        </p>
      </template>
      <div class="postAttr">
        <div class="postAttr_block">
          <Time :time="postData.time" />
          <Views :views="postData.views" />
          <Author :author="postData.author" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostImg from "~/components/post/PostImg.vue";
import Tag from "~/components/news/news-parts/Tag.vue";
import Time from "~/components/news/news-parts/Time.vue";
import Views from "~/components/news/news-parts/Views.vue";
import Quote from "~/components/post/Quote.vue";
import Expert from "~/components/post/Expert.vue";
import Author from "~/components/post/Author.vue";
import Api from "~/assets/js/api/fetch.js";

const CONSTS = require("~/assets/js/frontend.consts.js");

export default {
  data() {
    return { postData: Object, tags: [] };
  },
  methods: {},
  validate({ redirect, route }) {
    if (!route.query.id || route.query.id == "") redirect("/404");
    return true;
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("activePost");
    });
  },
  created() {
    Api.UpdateViews({ id: this.postData.id });
  },
  async fetch() {
    const redirect = this.$nuxt.context.redirect;
    const data = (
      await Api.GetReq(
        CONSTS.PATHS.GETPOST,
        {
          id: this.$route.query.id,
        },
        redirect
      )
    )[0];
    this.postData = data;
    this.tags = await Api.GetReq(CONSTS.PATHS.GETTAGS, {}, redirect);
  },
  components: {
    PostImg,
    Tag,
    Time,
    Views,
    Quote,
    Expert,
    Author,
  },
};
</script>
<style lang="scss">
@import "~/pages/post/css/main.scss";
</style>
