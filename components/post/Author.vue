<template>
  <div class="author">
    <img src="~/assets/img/svg/Person.svg" alt="Время публикации" />
    {{author}}
  </div>
</template>
<style lang="scss">
.author h3 {
  padding: 15px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120.5%;
  color: #949494;
}
.author {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #949494;
  margin-right: 13px;
}
.author img {
  height: 12px;
  margin-right: 5px;
  margin-bottom: 3px;
}
</style>

<script>
export default {
  props: {
    author: String
  }
};
</script>