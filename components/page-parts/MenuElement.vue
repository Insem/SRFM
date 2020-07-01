<template>
  <div class="menu_main">
    <div class="menu_content">
      <div class="menu_elem">
        <div
          @click="activeClass"
          class="block"
          v-bind:class="{
            active: menu.active,
            unactive: !menu.active && unstart,
            start: !unstart && !menu.active,
            activeStart: menu.active && !unstart
          }"
        >
          <div class="text">{{ menu.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/assets/css/vars.scss";
$center_x: 10px;
$center_y: 9px;
$border: 3px;
$animation_time: 0.2s;
$animation_duration: 0.4s;
$TDU: 0.15s;
$TDA: 0.5s;

.menu_main {
}

.menu_content {
  position: relative;
  margin: 0px -6px;
}

.menu_elem {
  left: -12px;
  top: -13px;
  box-sizing: content-box;
  //height: 40px;
  position: relative;

  .block {
    position: relative;
    font-size: 13px;
    font-family: $inter;
    color: white;
    left: 0px;
    top: 0px;

    //x 10
    //y 9
    .text {
      z-index: 3;
      position: relative;
      background-color: #1b1b1b;
      padding: $border * 2 $border * 2;
      box-sizing: content-box;
      top: $center_x + $border;
      left: $center_y + $border;
      line-height: 13px;
      transition-delay: inherit;
      transition: left $animation_time ease-out, top $animation_time ease-out;
    }

    .text:hover {
      color: #e3e3e3;
    }
  }

  .block.start:before {
    height: 0px;
    width: 0px;
    padding: 0px;
  }

  .block.activeStart:before {
    animation-duration: 0s !important;
  }

  .block.activeStart .text {
    transition-duration: 0s !important;
  }

  .block.active .text {
    transition-delay: $TDA;
    top: $border;
    left: $border;
  }

  .block.unactive .text {
    transition-delay: $TDU;
  }

  .block.activeStart:after {
    transition-duration: 0s !important;
  }

  .block:after {
    z-index: 2;
    //display: none;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    border: $border solid #98393f;
    top: $center_x;
    left: $center_y;
    transition: opacity 0s ease-out $animation_duration;
    content: "";
  }

  .block.active:after {
    opacity: 1;
  }

  .block:before {
    z-index: 1;
    box-sizing: content-box;
    padding: $border;
    position: absolute;
    background-color: #98393f;
    content: "";
    top: $center_x;
    left: $center_y;
    transition: left $animation_time ease-out, top $animation_time ease-out;
  }

  .block.unactive:before {
    transition-delay: $TDU;
    animation-duration: $animation_duration;
    animation-name: unzoom;
    animation-fill-mode: forwards;
    animation-delay: $TDA;
    height: 100%;
    width: 100%;
  }

  .block.active:before {
    transition-delay: $TDA;
    animation-duration: $animation_duration;
    animation-name: zoom;
    animation-fill-mode: forwards;
    top: 0;
    left: 0;
  }
}

@keyframes zoom {
  0% {
    width: 0px;
    height: 0px;
  }

  60% {
    height: 70%;
    width: 50%;
  }

  100% {
    height: 100%;
    width: 100%;
  }
}

@keyframes unzoom {
  0% {
    height: 100%;
    width: 100%;
  }

  60% {
    height: 80%;
    width: 60%;
  }

  100% {
    height: 0px;
    width: 0px;
    padding: 0px;
  }
}
</style>

<script>
export default {
  props: {
    menu: Object,
    arr: Array
  },
  data() {
    return {
      unstart: false
    };
  },
  mounted() {
    console.log(this.arr, this.menu);
  },
  methods: {
    activeClass() {
      this.arr.forEach(it => {
        if (it.active) this.$set(it, "active", false);
      });

      if (!this.menu.active && (this.unstart || !this.unstart)) {
        this.menu.active = true;
      } else {
        this.menu.active = false;
      }
      this.unstart = true;
    }
  }
};
</script>
