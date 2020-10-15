<template>
  <div class="postEmbed">
    <iframe :src="src"> </iframe>
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
    src: String,
    caption: String,
  },
};
</script>
<style lang="scss">
$captionHeight: 18px;
$captionMargin: 10px;
@import "~/assets/css/vars.scss";
@media (min-width: 0) and (max-width: $sm) {
  .postEmbed {
    height: 50vw;
  }
}
@media (min-width: $sm) and (max-width: $md) {
  .postEmbed {
    height: 50vw;
  }
}
@media (min-width: $md) and (max-width: $lg) {
  .postEmbed {
    height: 40vw;
  }
}
@media (min-width: $lg) {
  .postEmbed {
    height: 500px;
  }
}
.postEmbed {
  margin-bottom: $post_content_margin;
  width: 100%;
  iframe {
    border: none;
    width: 100%;
    height: calc(100% - (#{$captionHeight} + #{$captionMargin}));
  }
}
</style>