<template>
  <transition name="setting">
    <div class="setting">
      <me-navbar class="header">
        <i class="iconfont icon-back" slot="left" @click="goback"></i>
        <div slot="center" class="title">账号设置</div>
      </me-navbar>
      <account-setting></account-setting>
    </div>
  </transition>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import AccountSetting from './setting';

  export default {
    name: 'Login',
    components: {
      MeNavbar,
      AccountSetting
    },
    methods: {
      goback() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";


  .setting {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;

    .header {
      font-size: $icon-font-size-sm;

      .title {
        text-align: center;
        padding-right: 16px;
      }
    }
  }

  .setting-enter-active,
  .setting-leave-active {
    transition: all 0.3s;
  }

  .setting-enter,
  .setting-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>