<template>
  <transition name="search">
    <div class="search">
      <me-navbar class="header">
        <i class="iconfont icon-back" slot="left" @click="routeToHome"></i>
        <me-search slot="center" @query='getQuery'></me-search>
      </me-navbar>
      <div class="scroll_container">
        <me-scroll ref="slider">
          <search-hot v-show="!query"></search-hot>
          <search-history v-show="!query" @dataChange="updateSroll"></search-history>
          <search-result v-show="query" ref="searchResult"></search-result>
        </me-scroll>
      </div>
    </div>
  </transition>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearch from 'base/search';
  import SearchHot from './hot';
  import SearchHistory from './history';
  import SearchResult from './result';
  import MeScroll from 'base/scrollbar';

  export default {
    name: 'Search',
    components: {
      MeNavbar,
      MeSearch,
      SearchHot,
      SearchHistory,
      SearchResult,
      MeScroll
    },
    data() {
      return {
        query: null
      }
    },
    methods: {
      routeToHome() {
        this.$router.go(-1);
      },
      updateSroll() {
        this.$refs.slider.update();
      },
      getQuery(query) {
        this.query = query;
        this.$refs.searchResult.search(this.query);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";


  .header {
    .iconfont {
      color: $icon-color;
      font-size: $icon-font-size;
    }
  }

  .search {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;

    .scroll_container {
      height: 100%;
      padding-top: 50px;
      margin-top: -50px;
    }
  }

  .search-enter-active,
  .search-leave-active {
    transition: all 0.3s;
  }

  .search-enter,
  .search-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>