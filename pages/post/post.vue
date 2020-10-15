<template>
  <div class="container post_cont" v-cloak>
    <div class="post_content" v-if="postData.mainImg">
      <Post-Img
        class="mainImg"
        :src="postData.mainImg.file.url"
        :source="postData.mainImg.caption"
        v-cloak
      />
      <div class="newsAttr" v-cloak>
        <Time :time="postData.time" />
        <Views :views="postData.views" />
        <div class="postTags">
          <Tag v-for="tag in tags" :key="tag.id" :tag="tag" :color="'black'" />
        </div>
      </div>

      <h1>{{ postData.header }}</h1>
      <template v-for="(block, i) in postData.blocks" v-cloak>
        <p
          v-if="block.type == 'paragraph'"
          v-bind:key="i"
          v-html="block.data.text"
        ></p>
        <Quote
          v-if="block.type == 'quote'"
          :text="block.data.text"
          :caption="block.data.caption"
          v-bind:key="i"
        />
        <Post-Img
          v-if="block.type == 'image'"
          :src="block.data.file.url"
          :source="block.data.caption"
          v-bind:key="i"
        />
        <p v-if="block.type == 'embed'" v-bind:key="i">
          <client-only>
            <Embed
              :src="block.data.source"
              :caption="block.data.caption"
              v-bind:key="i"
            />
          </client-only>
        </p>
        <p v-if="block.type == 'personality'" v-bind:key="i">
          <client-only>
            <Expert
              :src="block.data.photo"
              :author="block.data.name"
              :description="block.data.description"
              v-bind:key="i"
            />
          </client-only>
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
import Embed from "~/components/post/Embed.vue";
import Api from "~/assets/js/api/fetch.js";

const CONSTS = require("~/assets/js/frontend.consts.js");

export default {
  data() {
    return { postData: Object, tags: [] };
  },
  head() {
    const self = this;
    console.log("head", self.$route, self.postData);
    function getImg() {
      if (self.postData.mainImg) return `/${self.postData.mainImg.file.url}`;
      return "";
    }
    function getPath() {
      if (self.$route.fullPath) return self.$route.fullPath;
      return "";
    }
    function getFirstParagraph() {
      if (self.postData.blocks) {
        for (let i = 0; i < self.postData.blocks.length; i++) {
          const item = self.postData.blocks[i];
          if (item.type == "paragraph") {
            const contentStr = item.data.text
              .substring(0, 160)
              .match(/.*[,.?!]/)[0];
            return contentStr.substring(0, contentStr.length - 1);
          }
        }
      }
      return "fgdfg";
    }
    function getKeyWords() {
      let str = "";
      for (let i = 0; i < self.tags.length; i++) {
        const item = self.tags[i];
        if (i != self.tags.length - 1) {
          str += `${item.val}, `;
        } else {
          str += item.val;
        }
      }
      return str;
    }
    const description = getFirstParagraph();
    return {
      title: this.postData.header,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: getKeyWords(),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: self.postData.header,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: getImg(),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: getPath(),
        },
        {
          hid: "twitter:title ",
          property: "twitter:title ",
          content: self.postData.header,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: getImg(),
        },
      ],
    };
  },
  methods: {},
  validate({ redirect, route }) {
    if (!route.query.id || route.query.id == "") {
      console.log("Not validated");
      redirect("/404");
    }
    return true;
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("activePost");
    });
  },
  mounted() {
    console.log(this.postData.id, "Update views down");
  },
  async fetch() {
    console.log("Fetch for post");

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
    this.tags = await Api.GetReq(
      CONSTS.PATHS.GETTAGS,
      {
        $or: this.postData.tags.map((tag) => {
          return { id: tag };
        }),
      },
      redirect
    );
    Api.UpdateViews({ id: this.postData.id });
  },
  components: {
    PostImg,
    Tag,
    Time,
    Views,
    Quote,
    Expert,
    Author,
    Embed,
  },
};
</script>
<style lang="scss">
@import "~/pages/post/css/main.scss";
</style>