<template>
  <div class="smallNews" :style="{width:post.width}">
    <n-link :to="'/post?id='+news.id">
      <div
        class="img"
        :style="{height:post.height, backgroundImage: `url(${news.mainImg.file.url})`}"
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
        <Title :text="news.header" :fontSize="post.fontSize" />
      </n-link>
    </div>
  </div>
</template>
<style lang="scss">
.smallNews .img {
  width: 100%;
  background-position: center;
  background-size: cover;
}
.smallNews {
  display: flex;
  justify-content: start;
  flex-direction: column;
  .newsCont {
    display: flex;
    justify-content: start;
    flex-direction: column;
    margin-top: 15px;

    .newsAttr {
      display: flex;
      justify-content: start;
      flex-direction: row;
      margin-bottom: 10px;
    }
  }
}
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
        { name: "SmallPost", width: "350px", height: "275px", fontSize: 30 },
        { name: "MainPost", width: "870px", height: "500px", fontSize: 64 },
        { name: "PagePost", width: "100%", height: "485px", fontSize: 64 },
        { name: "SquarePost", width: "815px", height: "730px", fontSize: 64 },
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