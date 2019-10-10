<template>
  <me-navbar class="header" title="" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">
      <me-search input="金秋送月饼" :isDisabled=false @toSearch="routeToSearch"></me-search>
    </div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template> 

<script>
  import MeNavbar from 'base/navbar';
  import MeSearch from 'base/search';
  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar,
      MeSearch
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },

      routeToSearch() {
        this.$router.push('/search');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  

  .header {
    &.mine-navbar {
      /* background-color: transparent; */
      background-color: transparent;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }

  }

  /* .header-transition {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.4s;
  }

  &-enter, &-leave-to {
    opacity: 0;
  } */
  /* } */
</style>