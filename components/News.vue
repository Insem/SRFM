<template>
  <div class="news">
    <h2>Последнее</h2>
    <div class="cont" v-for="(the_news, i) in news" v-bind:key="i">
      <div class="block">
        <h3>
          {{the_news.title}}
          <!--<div class="arr">
            <div>
              <img src="~/assets/img/svg/news_arr.svg" alt="Перейти к публикации" />
            </div>
          </div>-->
        </h3>
      </div>
      <div class="date">
        <h4>
          <img src="~/assets/img/svg/clock.svg" alt="Время публикации" />
          {{the_news.date}}
        </h4>
      </div>
    </div>
    <div class="tags">
      <div class="tag" v-for="(tag, id) in tags" v-bind:key="id">
        <h3>{{tag.title}}</h3>
        <h2>{{tag.count}}</h2>
        <img src="~/assets/img/svg/tag_arr.svg" alt />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.news {
  width: 300px;
  background-color: #0c0c0c;
  color: white;
  padding-right: 8px !important;
  padding: 20px;

  .tags {
    padding-top: 10px;
    display: flex;
    justify-content: start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 5px;
    .tag {
      cursor: pointer;
      display: flex;
      justify-content: start;
      flex-direction: row;
      align-items: center;
      margin-top: 6px;
      padding: 5px 10px;
      background-color: #2e2e2e;
      margin-right: 5px;
      h3 {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 120.5%;
        color: white;
      }
      h2 {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 120.5%;
        margin: 0px 5px;
        color: #949494;
      }
      img {
        margin-bottom: 2.2px;
      }
    }
    .tag:first-child {
      margin-left: 0px !important;
    }
  }
  h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 16px;
  }

  .cont {
    padding-top: 20px;
    border-bottom: 1px solid rgba(196, 196, 196, 0.1);
    width: 100%;
    .block {
      display: inline;
      h3 {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        .arr {
          display: inline-block;
          height: 10px;
        }
        .arr img {
          display: inline;
          height: 10px;
          margin-bottom: 3px;
        }
      }
    }
  }

  .date h4 {
    display: flex;
    padding: 15px 0px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120.5%;
    color: #949494;
  }
}
</style>
<script>
export default {
  data() {
    return {
      news: [
        {
          title: "Житель Калининграда сварился заживо в отделении полиции",
          date: "Февраль 2020"
        },
        {
          title: "Трое полицейских изнасиловали свою коллегу",
          date: "Декабрь 2019"
        },
        {
          title: "Полицейские пытали электрошокером многодетную мать",
          date: "Январь 2016"
        },
        {
          title: "В Саратове полицейские прижигали ягодицы задержанного утюгом",
          date: "Сентябрь 2018"
        },
        {
          title: "Полицейские избили подростка",
          date: "Май 2019"
        }
      ],
      tags: [
        {
          title: "Пытки",
          count: "20"
        },
        {
          title: "Заключения",
          count: "18"
        },
        {
          title: "Пензенское дело",
          count: "6"
        }
      ]
    };
  }
  //props: { news: Array }
};
</script>
