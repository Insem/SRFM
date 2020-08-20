<template>
  <div class="logo">
    <div class="img" src="~/assets/img/svg/logo.svg"></div>
  </div>
</template>
<style lang="scss">
@import "~/assets/css/vars.scss";
.logo .img {
  background-position: center;
  background-size: cover;
}

@media (min-width: $md) {
  .logo .img {
    width: 150px;
    height: 59px;
    background-image: url("/img/logo/logo.svg");
  }
}

@media (min-width: 0) and (max-width: $md) {
  .logo {
    margin-right: 100px;
  }
  .logo .img {
    width: 60px;
    height: 54px;
    background-image: url("/img/logo/logo-man.svg");
  }
}
</style>
