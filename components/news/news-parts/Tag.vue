<template>
  <router-link :to="'/post-navigation?tags='+tag.id">
    <div class="tag" :style="{backgroundColor:color}">
      <h3>{{tag.val}}</h3>
      <img src="~/assets/img/svg/tag_arr.svg" alt="Перейти" />
    </div>
  </router-link>
</template>
<style lang="scss">
.tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120.5%;
    color: #ffffff;
  }
  img {
    margin-left: 10px;
    height: 9px;
  }
}
</style>

<script>
export default {
  props: {
    tag: Object,
    color: String,
    link: Boolean,
  },
};
</script>