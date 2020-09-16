<template>
  <div class="quote">
    <div class="qoute_left">
      <img src="~/assets/img/svg/quote_left.svg" alt />
    </div>
    <div class="text">{{text}}</div>
    <div class="qoute_right">
      <img src="~/assets/img/svg/quote_right.svg" alt />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
<style lang="scss">
.quote {
  padding: 20px 25px;
  margin-top: 35px;
  margin-bottom: 30px;
  background-color: #333333;
  .qoute_right {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  }
  img {
    width: 35px;
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