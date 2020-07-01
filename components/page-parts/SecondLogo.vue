<template>
  <div class="secondLogo">
    <div class="logoImg"></div>
    <div class="text"></div>
  </div>
</template>
<style lang="scss">
.secondLogo {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  height: 100%;
  .logoImg {
    position: relative;
    top: -10px;
    height: 90px;
    width: 100px;
    background-image: url("~assets/img/svg/second_logo.svg");
    background-repeat: no-repeat;
  }
  .text {
    height: 45px;
    width: 80px;
    margin-left: 15px;
    background-image: url("~assets/img/svg/logo_text.svg");
    background-repeat: no-repeat;
  }
}
</style>