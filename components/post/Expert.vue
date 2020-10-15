<template>
  <div class="expert">
    <img :src="src" />
    <div class="text">
      <div class="author">{{ author }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    author: String,
    description: String,
  },
};
</script>
<style lang="scss">
.expert {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 25px;

  img {
    border-radius: 100px;
    width: 80px;
    margin-right: 20px;
  }

  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 10px;
    .author {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 152%;
      color: #ffffff;
    }
    .description {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 152%;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>