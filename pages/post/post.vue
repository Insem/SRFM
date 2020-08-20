<template>
  <div class="container" v-if="postData.mainImg">
    <div class="post_content">
      <Post-Img :src="postData.mainImg.file.url" :source="postData.mainImg.caption" />
      <div class="newsAttr">
        <Time :time="postData.time" />
        <Views :views="postData.views" />
        <Tag v-for="tag in tags" :key="tag.id" :tag="tag" :color="'black'" />
      </div>

      <h1>{{postData.header}}</h1>
      <template v-for="(block,i) in postData.blocks">
        <p v-if="block.type == 'paragraph'" v-bind:key="i">{{block.data.text }}</p>
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

      vm.$store.dispatch("randPost");
    });
  },

  async fetch() {
    console.log("ctxx");
    //this.$parent.$root.context.redirect("/404");
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
    console.log("post daffffffffffffffffffffffffffffffffffffffffta", data);
    this.postData = data;
    this.tags = await Api.GetReq(CONSTS.PATHS.GETTAGS, {}, redirect);
    await Api.UpdateViews({ id: this.postData.id });
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
@import "~/assets/css/vars.scss";
$pd-left: 40px;
$pd-right: 35px;

.post_content {
  margin-top: $main_mg-top;
  padding: 0px 150px;
  .tag {
    margin-right: 5px;
  }
  .postAttr {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 70px;

    .postAttr_block > div {
      display: inline-flex !important;
    }
    .postAttr_block {
      padding-bottom: 15px;
      position: relative;
    }
    .postAttr_block:after {
      content: "";
      position: absolute;
      width: 70%;
      left: 15%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.1);
      bottom: 0px;
    }
  }
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 120.5%;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 70px;
    padding-left: $pd-left;
    padding-right: $pd-right;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 152%;
    color: #ffffff;
    padding-left: $pd-left;
    padding-right: $pd-right;
    margin-bottom: 25px;
  }
}
.post_content .newsAttr {
  margin-top: 45px;
  padding-left: $pd-left;
  padding-right: $pd-right;
}
</style>
