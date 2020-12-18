<template>
  <div class="main-page">
    Vue.js 3 Tech holiday
    <div class="shadow"></div>
    <span class="tagline"
      >a few days spent looking into Vue.js 3 and writing up my notes</span
    >
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {},
};
</script>

<style lang="scss" scoped>
.main-page {
  margin-top: 30vh;
  text-align: center;
  font-size: 72px;
  line-height: 60px;
  color: #383838;

  .tagline {
    font-size: 32px;
    display: block;
  }
}
</style>
