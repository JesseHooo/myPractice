<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition': isHeaderTransition}" ref="header"/>
    </header>
    <me-scroll
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll">
      <home-slider ref="sliders" />
      <home-nav />
      <home-recommend @loaded="getRecommends" ref="recommends" />
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBackTopVisible" @backtop="back2top" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import MeScroll from 'base/scrollbar';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';
  import MeBacktop from 'base/backtop';
  import {HEADER_TRANSITION_HEIGHT} from 'base/scrollbar/config';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      HomeNav,
      HomeRecommend,
      MeBacktop
    },
    data() {
      return {
        recommends: [],
        isBackTopVisible: false,
        isHeaderTransition: false
      };
    },
    methods: {
      updateScroll() {

      },
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.sliders.update().then(end);
      },
      pullToLoadMore(end) {
        this.$refs.recommends.update().then(end).catch(err => {
          console.log(err);
          end();
        });
      },
      back2top() {
        this.$refs.scroll.scrollToTop();
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          return this.$refs.header.hide();
        }

        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      scrollEnd(translate, scroll, pulling) {
        // if (!pulling) {
        this.changeHeaderStatus(translate);
        // }
        this.isBackTopVisible = translate < 0 && (Math.abs(translate) > scroll.height);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
