<template>
  <div class="newsTitle">
    <h4 :class="fontClass">{{text}}</h4>
  </div>
</template>
<style lang="scss">
.newsTitle h4 {
  color: white;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 120.5%;
  transition: color 0.3s ease-out;
}
.newsTitle h4:hover {
  color: #98393f;
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
  margin-left: 15px;
}
</style>
<script>
export default {
  props: {
    fontClass: String,
    text: String,
  },
};
</script>