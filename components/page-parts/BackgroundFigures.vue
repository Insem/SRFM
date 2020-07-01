<template>
  <div class="figure">
    <div class="leftRect"></div>
    <img class="romb" src="~/assets/img/svg/romb.svg" />
    <div class="rightRect"></div>
  </div>
</template>
<style lang="scss">
.figure {
  width: 1180px;
  height: 865px;
  position: relative;
}
.leftRect {
  z-index: 2;
  position: absolute;
  width: 667.92px;
  height: 463px;
  left: 50px;
  top: 130px;
  background: #333;
  transform: rotate(152.5deg);
}
.romb {
  opacity: 0.1;
  z-index: 3;
  position: absolute;
  left: 386px;
}
.rightRect {
  position: absolute;
  opacity: 0.4;
  width: 667.92px;
  height: 463px;
  left: 457px;
  top: 271px;
  background: #0c0c0c;
  transform: rotate(151.8deg);
}
</style>
