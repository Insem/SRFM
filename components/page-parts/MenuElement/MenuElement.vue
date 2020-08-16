<template>
  <div class="menu_main">
    <div class="menu_content">
      <div class="menu_elem">
        <div
          class="block"
          v-bind:class="{
            active: menu.active,
            unactive: !menu.active && menu.start,
            start:!menu.start
          }"
        >
          <n-link :to="menu.path">
            <div class="text">{{ menu.text }}</div>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/components/page-parts/MenuElement/css/main.scss";
</style>

<script>
export default {
  props: {
    menu: Object,
    arr: Array,
  },
  data() {
    return {};
  },
  methods: {
    activeClass() {
      console.log("Menuelem", this, this.menu.unwork);
      if (this.menu.unwork) return;
      if (this.menu.method) this.menu.method();
      this.arr.forEach((it) => {
        if (it.active) this.$set(it, "active", false);
      });

      if (!this.menu.active && (this.unstart || !this.unstart)) {
        this.menu.active = true;
      } else {
        this.menu.active = false;
      }
      this.unstart = true;
    },
  },
};
</script>
