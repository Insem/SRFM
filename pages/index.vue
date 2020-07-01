<template>
  <div class="main_cont">
    <div class="container">
      <App-Header />
      <div class="backgrounFigure">
        <Background-Figures />
      </div>
      <div class="face_block">
        <Main-News />
        <div>
          <News />
        </div>
      </div>
      <div class="smallNews_block">
        <Small-News v-for="(news, i) in smallNews" :news="news" :key="i" />
      </div>
      <div class="pageNews_block">
        <Page-news :news="pageNews" />
      </div>
      <div class="category_news">
        <div class="head">
          <h1>Московское дело</h1>
          <Tag :count="16" :color="'#98393F'"></Tag>
        </div>
        <div class="news_block">
          <div class="left">
            <Small-News :news="smallNews[0]" />
            <Small-News :news="smallNews[1]" />
          </div>
          <div class="right">
            <Square-News :news="smallNews[2]" />
          </div>
        </div>
      </div>
      <App-Footer />
    </div>
  </div>
</template>
<script>
import AppHeader from "~/components/page-parts/Header.vue";
import AppFooter from "~/components/page-parts/Footer.vue";
import BackgroundFigures from "~/components/page-parts/BackgroundFigures.vue";
import News from "~/components/News.vue";
import MainNews from "~/components/news/MainNews.vue";
import SmallNews from "~/components/news/SmallNews.vue";
import PageNews from "~/components/news/PageNews.vue";
import SquareNews from "~/components/news/SquareNews.vue";
import Tag from "~/components/news/news-parts/TagCategory.vue";
export default {
  data() {
    return {
      squareNews: {
        title: "Как прекратить произвол",
        img: "/img/SquareNews.png",
        media: "Медиазона",
        time: "День назад",
        mediaColor: "black",

        viewCount: 2024
      },
      pageNews: {
        title: "Как прекратить произвол",
        img: "/img/pageNews.png",
        media: "Медиазона",
        time: "День назад",
        mediaColor: "black",

        viewCount: 2024
      },
      smallNews: [
        {
          title: "Полицейские беспорядки на улицах Москвы",
          img: "/img/small_news/small_news_1.png",
          media: "Медиазона",
          time: "Год назад",
          mediaColor: "black",
          viewCount: 1024
        },
        {
          title: "Полицейские несут меня на работу",
          img: "/img/small_news/small_news_2.png",
          media: "Новая газета",
          time: "2 Дня назад",
          mediaColor: "#60A4D6",
          viewCount: 513
        },
        {
          title: "Полицейские беспорядки на улицах Санкт-Петербурга",
          img: "/img/small_news/small_news_3.png",
          media: "Фонтанка",
          time: "2 Месяца назад",
          mediaColor: "orange",
          viewCount: 666
        }
      ]
    };
  },
  components: {
    AppFooter,
    AppHeader,
    BackgroundFigures,
    News,
    MainNews,
    SmallNews,
    PageNews,
    SquareNews,
    Tag
  }
};
</script>
<style lang="scss">
@import "~/assets/css/vars.scss";

.container {
  .smallNews_block {
    margin-top: 95px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .pageNews_block {
    margin-top: 60px;
  }
  .face_block {
    z-index: 5;
    margin-top: 105px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .category_news {
    margin-top: 65px;
    .head {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      border-bottom: 1px solid rgba(196, 196, 196, 0.2);
      padding-bottom: 30px;
      align-items: center;

      h1 {
        font-family: Inter;
        font-style: normal;
        font-weight: 900;
        font-size: 42px;
        line-height: 120.5%;
        color: #ffffff;
      }
    }
    .news_block {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 30px;

      .left {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      .left:first-child > div {
        margin-bottom: 45px;
      }
    }
  }
}
.backgrounFigure {
  position: absolute;
  top: 140px;
  right: -300px;
}
</style>
