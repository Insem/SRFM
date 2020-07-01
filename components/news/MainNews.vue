<template>
  <div class="mainNews">
    <img :src="news.img" alt="Главная новость" />
    <div class="newsCont">
      <div class="newsAttr">
        <Time :time="news.time" />
        <Views :views="news.viewCount" />
        <Tag :text="news.media" :color="'#000'" />
      </div>
      <Title :text="news.title" :fontSize="64" />
    </div>
  </div>
</template>
<style lang="scss">
.mainNews > img {
  width: 100%;
}
.mainNews {
  width: 870px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  .newsCont {
    display: flex;
    justify-content: start;
    flex-direction: column;
    margin-top: 40px;

    .newsAttr {
      display: flex;
      justify-content: start;
      flex-direction: row;
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
      news: {
        title: "Что делать, если подбросили наркотики",
        img: "/img/mainNews.png",
        media: "Медиазона",
        time: "Месяц назад",
        viewCount: 224
      }
    };
  },
  components: {
    Title,
    Tag,
    Time,
    Views
  }
};
</script>