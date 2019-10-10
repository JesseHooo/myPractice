<template>
  <div class="personal_tools">
    <div class="tools_title">
      必备工具
    </div>
    <div class="tools_tab1">
      <home-nav></home-nav>
    </div>
    <div class="tools_tab2">
      <home-nav></home-nav>
      <home-nav></home-nav>
    </div>
  </div>
</template>

<script>
  import HomeNav from "../home/nav";
  export default {
    name: 'PersonalTools',
    components: {
      HomeNav
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .personal_tools {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;

    .tools_title {
      border-bottom: 2px solid;
      border-color: $bgc-theme;
      padding-bottom: 5px;
    }

    .tools_tab1 {
      /* filter: grayscale(30%); */
      /* filter: sepia(100%); */
      /* filter: opacity(50%); */
      filter: hue-rotate(180deg);
      /* filter: blur(1px); */
    }

    .tools_tab2 {
      /* filter: sepia(100%); */
      /* filter: opacity(50%); */
      filter: hue-rotate(320deg) grayscale(80%);
      ;
      /* filter: blur(1px); */
    }
  }
</style>