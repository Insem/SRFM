<template>
  <div class="smallNews" :class="post.name">
    <n-link :to="'/post?id='+news.id">
      <div
        class="img"
        :style="{ backgroundImage: `url(${news.mainImg.file.url})`}"
        alt="Главная новость"
      ></div>
    </n-link>
    <div class="newsCont">
      <div class="newsAttr">
        <Time :time="news.time" />
        <Views :views="news.views" />
        <Tag :tag="tag" :color="'black'" />
      </div>
      <n-link :to="'/post?id='+news.id">
        <Title :text="news.header" :fontClass="post.fontClass" />
      </n-link>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/components/news/PreviewPost/css/main.scss";
</style>

<script>
import Title from "~/components/news/news-parts/Title.vue";
import Tag from "~/components/news/news-parts/Tag.vue";
import Time from "~/components/news/news-parts/Time.vue";
import Views from "~/components/news/news-parts/Views.vue";
export default {
  data() {
    return {
      post: null,
      types: [
        {
          name: "SmallPost",
          width: "350px",
          height: "275px",
          fontClass: "smallFont",
        },
        {
          name: "MainPost",
          width: "870px",
          height: "500px",
          fontClass: "largeFont",
        },
        {
          name: "PagePost",
          width: "100%",
          height: "485px",
          fontClass: "largeFont",
        },
        {
          name: "SquarePost",
          width: "815px",
          height: "730px",
          fontClass: "largeFont",
        },
      ],
    };
  },
  created() {
    this.types.forEach((it) => {
      if (this.type == it.name) this.post = it;
    });
    if (!this.post) {
      throw new SyntaxError("Не корректно введен тип поста");
    }
  },
  props: {
    news: Object,
    tag: Object,
    type: String,
  },
  components: {
    Title,
    Tag,
    Time,
    Views,
  },
};
</script>