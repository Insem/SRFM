<template>
  <div class="quote_cont">
    <div class="quote">
      <div class="qoute_left">
        <img src="~/assets/img/svg/quote_left.svg" alt />
      </div>
      <div class="text" v-html="text"></div>
      <div class="qoute_right">
        <img src="~/assets/img/svg/quote_right.svg" alt />
      </div>
    </div>
    <Subtitle :caption="caption" />
  </div>
</template>
<script>
import Subtitle from "~/components/post/Source.vue";
export default {
  components: {
    Subtitle,
  },
  props: {
    text: String,
    caption: String,
  },
};
</script>
<style lang="scss">
@import "~/assets/css/vars.scss";
.quote_cont {
  margin-bottom: $post_content_margin;
}
.quote_cont > .quote {
  padding: 20px 25px;
  margin-top: 35px;
  background-color: #333333;
  .qoute_right {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  }
  img {
    width: 35px;
  }
  h3 {
  }
  .text {
    word-break: break-word;
    padding: 15px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 152%;
    color: #ffffff;
  }
}
</style>