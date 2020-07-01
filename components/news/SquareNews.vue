<template>
  <div class="squareNews">
    <img :src="news.img" alt="Главная новость" />
    <div class="newsCont">
      <div class="newsAttr">
        <Time :time="news.time" />
        <Views :views="news.viewCount" />
        <Tag :text="news.media" :color="news.mediaColor" />
      </div>
      <Title :text="news.title" :fontSize="64" />
    </div>
  </div>
</template>
<style lang="scss">
.squareNews > img {
  width: 100%;
}
.squareNews {
  width: 815px;
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
  props: {
    news: Object
  },
  components: {
    Title,
    Tag,
    Time,
    Views
  }
};
</script>