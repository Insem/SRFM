<template>
  <div class="news">
    <h2>Последнее</h2>
    <div class="cont" v-for="post in last" v-bind:key="post.id">
      <n-link
        prefetch
        :to="{
          path: 'post',
          query: {
            id: post.id,
          },
        }"
        class="block"
      >
        <h3>
          {{ post.header }}
          <!--<div class="arr">
            <div>
              <img src="~/assets/img/svg/news_arr.svg" alt="Перейти к публикации" />
            </div>
          </div>-->
        </h3>
      </n-link>
      <div class="date">
        <h4>
          <img src="~/assets/img/svg/clock.svg" alt="Время публикации" />
          {{ toDate(post.time) }}
        </h4>
      </div>
    </div>
    <div class="tags">
      <div class="tag" v-for="tag in tags" v-bind:key="tag.id">
        <h3>{{ tag.val }}</h3>
        <!--<h2>{{tag.count}}</h2>-->
        <img src="~/assets/img/svg/tag_arr.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import toDate from "~/assets/js/GetDate.js";
export default {
  methods: {
    toDate,
  },
  props: { last: Array, tags: Array },
};
</script>
<style lang="scss">
.news {
  width: 300px;
  background-color: #0c0c0c;
  color: white;
  margin-left: 30px;
  padding-right: 8px !important;
  padding: 20px;

  .tags {
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 5px;
    .tag {
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
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
