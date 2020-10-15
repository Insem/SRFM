<template>
  <router-link :to="!pale?'/post-navigation?tags='+tag.id:''">
    <div class="tag" :class="{active:tag.active||''}">
      <span>#</span>
      <h3>{{tag.val}}</h3>
      <img src="~/assets/img/svg/tag_arr.svg" alt="Перейти" />
    </div>
  </router-link>
</template>
<style lang="scss">
@import "~/assets/css/vars.scss";
@media (min-width: $sm) {
  .tag {
    background-color: #000;
    color: #ffffff;

    margin-right: 3px;
    padding: 10px;
  }
  .active.tag {
    background-color: #333;
  }
  .tag span {
    display: none;
  }
}
@media (min-width: 0) and (max-width: $sm) {
  .tag {
    color: rgb(148, 148, 148);
  }
  .tag img {
    display: none;
  }
  .tag span {
    margin-right: 3px;
    font-size: 20px;
    font-weight: bold;
    color: #98393f;
  }
}
.tag {
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120.5%;
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
    pale: Boolean,
    link: Boolean,
  },
};
</script>