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
@import "~/assets/css/vars.scss";

.PagePost {
  width: 100%;
}
.PagePost .img {
  height: 485px;
}

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
    .newsAttr * {
      //fix
    }
    .newsAttr {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      margin-bottom: 10px;
      flex-direction: row;
    }
  }
}
@media (min-width: $lg) {
  .smallNews .largeFont {
    font-size: 64px;
  }
  .smallNews .smallFont {
    font-size: 30px;
  }
  .MainPost {
    width: 870px;
  }
  .MainPost .img {
    height: 500px;
  }

  .SmallPost {
    width: 350px;
  }
  .SmallPost .img {
    height: 275px;
  }

  .SquarePost {
    width: 815px;
  }
  .SquarePost .img {
    height: 730px;
  }
}
@media (min-width: $md) and (max-width: $lg) {
  .smallNews .largeFont {
    font-size: 56px;
  }
  .smallNews .smallFont {
    font-size: 30px;
  }
  .SquarePost {
    max-width: 815px;
    width: 63vw;
  }
  .SquarePost .img {
    max-height: 730px;
    height: 68vw;
  }

  .SmallPost {
    max-width: 350px;
    width: 30vw;
  }
  .SmallPost .img {
    height: 275px;
  }

  .MainPost {
    max-width: 870px;
    width: 100%;
  }
  .MainPost .img {
    max-height: 500px;
    height: 38vw;
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