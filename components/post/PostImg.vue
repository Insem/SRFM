<template>
  <div class="postImg">
    <div class="postImgCont">
      <img :src="src" />
      <Subtitle :caption="`Источник ${source}`" />
    </div>
  </div>
</template>
<script>
import Subtitle from "~/components/post/Source.vue";
export default {
  components: {
    Subtitle,
  },
  props: {
    src: String,
    source: String,
  },
};
</script>
<style lang="scss">
@import "~/assets/css/vars.scss";
@media (min-width: 0) and (max-width: $sm) {
  .postImg {
    margin-bottom: 30px;
  }
}
.postImg,
.mainImg .postImgCont {
  min-width: 100%;
}
.postImg {
  width: 100%;
  display: flex;
  margin-bottom: $post_content_margin;
  flex-direction: column;
  align-items: center;
  .postImgCont {
    max-width: 100%;
    display: inline-block;

    img {
      width: 100%;
    }
  }
}
</style>