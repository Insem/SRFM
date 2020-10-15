<template>
  <div class="notFound">
    <img class="dildo" src="~/assets/img/404_dildo.png" />
    <h1>404</h1>
    <div class="caption">Вы ошиблись страничкой!</div>
    <div class="link">
      <n-link to="/">На главную</n-link>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/assets/css/vars.scss";
.notFound {
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 550px;
  .dildo {
    position: absolute;
  }
  h1 {
    font-size: 180px;
    font-weight: bold;
  }
  .link {
    margin-top: 15px;
    background-color: black;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
@media (min-width: 0) and (max-width: $sm) {
  .notFound .dildo {
    width: 100%;
    left: -4%;
    bottom: 45%;
  }
}
@media (min-width: $sm) {
  .notFound .dildo {
    top: 40%;
    width: 800px;
    max-width: 100vw;
  }
}
</style>