<template>
  <div class="main_cont">
    <div class="container">
      <App-Header />

      <App-Footer />
    </div>
  </div>
</template>
<script>
import AppHeader from "~/components/page-parts/Header.vue";
import AppFooter from "~/components/page-parts/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppFooter,
    AppHeader
  }
};
</script>
<style lang="scss">
@import "~/assets/css/vars.scss";
</style>
