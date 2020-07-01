<template>
  <div class="subscribe">
    <h1>{{network}}</h1>
    <h2>подписаться</h2>
  </div>
</template>
<style lang="scss">
.subscribe {
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  border: 2px solid #98393f;
  z-index: 4;
  transform-style: preserve-3d;
  background-color: #1b1b1b;
  h1 {
    border-right: 2px solid #98393f;
    position: relative;
  }
  /*h1::after {
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    border-right: 2px solid #98393f;
    transform: translateZ(-1px);
    content: "";
  }*/
  h1,
  h2 {
    font-family: Podkova;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 120.5%;
    padding: 5px 12px;
    color: #fefcfd;
    text-transform: uppercase;
  }
}
.subscribe::before {
  transform: translateZ(-1px);
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;

  border: 2px solid #98393f;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  props: {
    network: String
  }
};
</script>