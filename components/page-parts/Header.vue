<template>
  <header id="scene" class="red">
    <Logo />
    <div class="menu">
      <div class="elem" v-for="menu in menuArr" v-bind:key="menu.id">
        <Menu-Element v-bind:menu="menu" v-bind:arr="menuArr"></Menu-Element>
      </div>
      <div class="elem">
        <i>#</i>Пензеское дело
      </div>
    </div>
    <div class="search">
      <img src="~/assets/img/svg/search.svg" />Поиск
    </div>
  </header>
</template>

<style lang="scss">
@import "~/assets/css/vars.scss";

header {
  position: relative;
  //background: url("/fon_bw.png") no-repeat 0% 40%;
  background-size: cover;
  font-family: $inter;
  width: 100%;
  height: $header_height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 55px;

  .menu {
    display: flex;
    justify-content: start;

    color: white;
    font-size: 13px;
    font-weight: 500;

    .elem {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      height: 40px;
      margin-left: 35px;

      i {
        margin-top: 3px;
        font-style: normal;
        color: #98393f;
        margin-right: 3px;
        line-height: 12px;
        font-size: 15px;
        font-weight: 500;
      }
    }
    .elem:first-child {
      margin-left: 0px;
    }
  }

  .search {
    color: white;
    font-family: $inter;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-size: 13px;
    img {
      width: 13px;
      margin-right: 5px;
    }
  }
}
</style>
<script>
import Parallax from "parallax-js";
import Logo from "./Logo.vue";
import MenuElement from "./MenuElement.vue";
export default {
  data() {
    return {
      menuArr: [
        { id: 0, text: "Главная", active: true },
        { id: 1, text: "Истории", active: false },
        { id: 2, text: "Источники", active: false },
        { id: 3, text: "Подкасты", active: false }
      ]
    };
  },
  components: {
    Logo,
    MenuElement
  },
  mounted() {}
};
</script>
