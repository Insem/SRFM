<template>
  <div class="views">
    <img src="~/assets/img/svg/eye.svg" />
    <h3>{{views}}</h3>
  </div>
</template>
<style lang="scss">
.views h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120.5%;
  color: #949494;
  margin-right: 13px;
}
.views {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.views img {
  height: 8px;
  margin-right: 5px;
}
</style>

<script>
export default {
  props: {
    views: Number
  }
};
</script>