<template>
  <header class="container">
    <Logo />
    <div class="menu">
      <div
        class="elem"
        v-for="(menu, index) in $store.state.menuArr"
        v-bind:key="index"
      >
        <Menu-Element
          v-tooltip.top-center="{ content: menu.tooltip, offset: 0 }"
          v-bind:menu="menu"
        />
      </div>
      <n-link to="/post-navigation?tags=0" class="elem"> <i>#</i>Пытки </n-link>
    </div>
    <div
      class="search none_sm none_xs"
      v-tooltip.auto-start="{
        content:
          'Простите, этот раздел придумали дийзайнеры, <br>я ничего не могу с этим поделать :(',
        offset: 5,
      }"
    >
      <img src="~/assets/img/svg/search.svg" />Поиск
    </div>
  </header>
</template>

<style lang="scss">
@import "~/components/page-parts/Header/css/main.scss";
</style>
<script>
import Logo from "./../Logo.vue";
import MenuElement from "./../MenuElement/MenuElement.vue";
import VTooltip from "v-tooltip";
import Vue from "vue";

Vue.directive("tooltip", VTooltip);
Vue.use(VTooltip);
export default {
  data() {
    return {};
  },
  components: {
    Logo,
    MenuElement,
  },
  async beforeCreate() {
    console.log("header before created");

    /*let id = await this.$store.dispatch("randPost");
    console.log("Rand post ", id, this.$route.query.id);
    while (id == this.$route.query.id) {
      id = await this.$store.dispatch("randPost");
      console.log("Rand post ", id, this.$route.query.id);
    }*/
  },
};
</script>
