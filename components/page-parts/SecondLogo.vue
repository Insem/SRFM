<template>
  <div class="secondLogo">
    <div class="logoImg"></div>
    <div class="text"></div>
  </div>
</template>
<style lang="scss">
@import "~/assets/css/vars.scss";
@media (min-width: 0) and (max-width: $md) {
  .secondLogo {
    height: 66px;
    .logoImg {
      height: 66px;
      width: 73px;
      background-size: contain;
    }
  }
}
@media (min-width: $md) {
  .secondLogo {
    height: 100%;
    .logoImg {
      height: 90px;
      width: 100px;
      top: -10px;
    }
  }
}
.secondLogo {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  .logoImg {
    position: relative;
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