<template>
  <div class="newsTitle">
    <h4 :style="{fontSize:fontSize+'px'}">
      {{text}}
      <!--<img src="~/../../assets/img/svg/news_arr.svg" alt="Время публикации" />-->
    </h4>
  </div>
</template>
<style lang="scss">
.newsTitle h4 {
  color: white;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 120.5%;
}

.newsTitle h4:after {
  display: inline-block;
  content: " ";
  background-repeat: no-repeat;
  background-size: contain;
  height: 0.6em;
  width: 1em;
  line-height: 1em;
  background-image: url("~assets/img/svg/news_arr.svg");
}
</style>
<script>
export default {
  props: {
    fontSize: Number,
    text: String
  }
};
</script>