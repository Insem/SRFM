<template>
  <div class="tag" :style="{backgroundColor:color}">
    <h3>{{count}} новости</h3>
    <img src="~/assets/img/svg/tag_arr.svg" alt="Перейти" />
  </div>
</template>
<style lang="scss">
.tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;

  max-height: 17px;
  box-sizing: content-box;

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
    count: Number,
    color: String
  }
};
</script>