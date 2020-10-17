<template>
  <div class="container">
    <div class="about-us">
      <h1>О нас</h1>
      <p>
        Привет! Вы зашли на сайт СРОМ, это акроним от "Спасём русских от
        ментов". Здесь публикуются случаи насилия по отношению к русским со
        стороны государства. Этот сайт ни в коем случае не является СМИ, в
        первую очередь сайт создан, чтобы доносить прецеденты насилия до
        аполитичных людей. Отправьте ссылочку на нас тем, кто не знает или не
        верит в беспрецедентное насилие со стороны власти. Ниодна статья на
        сайте никого ни к чему не призывает. Сайт создан консервативным
        либертарианцем.
        <br />
        <br />
        САЙТ ПРЕДНАЗНАЧЕН ДЛЯ ЛИЦ СТАРШЕ 18 ЛЕТ!
        <br />
        <br />
        <br />
        По всем вопросам: savefromments@gmail.com
      </p>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/assets/css/vars.scss";
.about-us {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 60vh;
  margin-top: 50px;
  h1 {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    max-width: 800px;
    font-size: 16px;
  }
}
</style>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("activeAbout");
    });
  },
};
</script>