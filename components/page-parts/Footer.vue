<template>
  <footer>
    <Logo />
    <div class="author">
      <a href="mailto:600amper@gmail.com?subject=СРОМ">600amper@gmail.com</a>
      <h4>- по всем вопросам</h4>
    </div>
    <div class="networks">
      <Subscribe :network="'TG'" />
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  height: 75px;
  //padding-left: 335px;
  //padding-right: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-top: 2px solid rgba(255, 255, 255, 0.04);
  margin-top: 90px;
  .networks {
  }
  .author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 120.5%;
      color: #a5a5a5;
    }
    h4 {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 120.5%;
      color: #e3e3e3;
    }
  }
}
</style>
<script>
import Logo from "./SecondLogo.vue";
import Subscribe from "./Subscribe.vue";
export default {
  components: {
    Logo,
    Subscribe
  }
};
</script>