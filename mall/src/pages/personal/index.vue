<template>
  <div class="personal" style="height: 100%">
    <div class="g-header-container" >
    <me-navbar 
    class="fix-header"
    :class="{'header-transition': fixHeader}" 
    >
      <i class="iconfont icon-scan" slot="left"></i>
      <span class="personal_title" slot="center">宫本武藏</span>
      <i class="iconfont icon-setting" slot="right" @click="toLogin"></i>
    </me-navbar>
  </div>
    <me-scroll ref="slider" @scroll="scroll" @scroll-end="scrollEnd">
      <personal-header @btnClick="toLogin"></personal-header>
      <personal-purchase-list></personal-purchase-list>
      <personal-tools></personal-tools>
    </me-scroll>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import PersonalHeader from './header';
  import PersonalPurchaseList from './purchaseList';
  import PersonalTools from './tools';
  import MeScroll from 'base/scrollbar';

  export default {
    name: 'Personal',
    components: {
      MeNavbar,
      PersonalHeader,
      PersonalPurchaseList,
      PersonalTools,
      MeScroll
    },
    data() {
      return {
        fixHeader: false,
      }
    },
    methods: {
      scroll(translate) {
        if (translate <= -75) {
          this.fixHeader = true;
        } else {
          this.fixHeader = false;
        }
      },
      scrollEnd(translate){
        if (translate <= -75) {
          this.fixHeader = true;
        } else {
          this.fixHeader = false;
        }
      },
      toLogin() {
        this.$router.push('/login');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .personal {
    .fix-header.mine-navbar {
      visibility: hidden;
      opacity: 0;
    }

    .iconfont {
      font-size: $icon-font-size;
    }

    .personal_title {
      @include flex-center();
      font-size: $icon-font-size-sm;
    }

    .fix-header.header-transition{
      visibility: visible;
      opacity: 1;
      transition: all 0.5s;
    }

  }
</style>