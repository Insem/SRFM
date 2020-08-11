<template>
  <div class="postImg">
    <img :src="src" />
    <h3>Источник: {{source}}</h3>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    source: String
  }
};
</script>
<style lang="scss">
.postImg {
  width: 100%;
}
.postImg img {
  width: 100%;
}
.postImg h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120.5%;
  text-align: right;
  color: #929292;
  margin-top: 10px;
}
</style>