<template>
  <div class="date">
    <img src="~/assets/img/svg/clock.svg" alt="Время публикации" />
    {{time}}
  </div>
</template>
<style lang="scss">
.date h3 {
  padding: 15px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120.5%;
  color: #949494;
}
.date {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #949494;
  margin-right: 13px;
}
.date img {
  height: 12px;
  margin-right: 5px;
  margin-bottom: 3px;
}
</style>

<script>
export default {
  props: {
    time: String
  }
};
</script>