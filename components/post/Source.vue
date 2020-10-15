<template>
  <h3 class="caption" v-html="caption"></h3>
</template>
<style lang="scss">
h3.caption {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120.5%;
  text-align: right;
  color: #929292;
  margin-top: 15px;
}
</style>
<script>
export default {
  props: {
    caption: String,
  },
};
</script>
