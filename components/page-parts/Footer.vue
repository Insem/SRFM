<template>
  <footer class="container">
    <Logo />
    <div class="email">
      <a href="mailto:savefromments@gmail.com?subject=СРОМ">savefromments@gmail.com</a>
      <h4 class="none_xs none_sm">&ensp;-&ensp;</h4>
      <h4>по всем вопросам</h4>
    </div>
    <div class="networks">
      <Subscribe :network="'TG'" />
    </div>
  </footer>
</template>
<style lang="scss">
@import "~/assets/css/vars.scss";

@media (min-width: $md) {
  footer {
    flex-direction: row;
    height: 75px;
    h4,
    a {
      font-size: 13px;
    }
    .email {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
  }
}
@media (min-width: 0) and (max-width: $md) {
  footer {
    flex-direction: column-reverse;
    height: 230px;
    .networks {
      margin-top: 20px;
    }

    .email {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    h4,
    a {
      font-size: 16px;
      text-align: center;
    }
  }
}
footer {
  //padding-left: 335px;
  //padding-right: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid rgba(255, 255, 255, 0.04);
  margin-top: 90px;
  a {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    line-height: 120.5%;
    color: #a5a5a5;
  }
  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 120.5%;
    color: #e3e3e3;
  }
  .networks {
  }
  .author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
<script>
import Logo from "./SecondLogo.vue";
import Subscribe from "./Subscribe.vue";
export default {
  components: {
    Logo,
    Subscribe,
  },
};
</script>