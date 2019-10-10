<template>
  <div class="category">
    <header class="g-header-container">
      <me-navbar class="header" title="">
        <div slot="center">
          <me-search input="金秋送月饼" @toSearch="routeToSearch"/>
        </div>
        <i class="iconfont icon-msg" slot="right"></i>
      </me-navbar>
    </header>
    <div class="g-content-container">
      <div class="sidebar">
          <category-tab @switch-tab='getCurrentId'/>
      </div>
      <div class="main">
          <category-content :curId="curId"></category-content>
      </div>
    </div>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearch from 'base/search';
  import CategoryTab from './tab';
  import CategoryContent from './content';

  export default {
    name: 'Category',
    components: {
      MeNavbar,
      MeSearch,
      CategoryTab,
      CategoryContent
    },
    data() {
      return{
        curId:''
      }
    },
    methods: {
      routeToSearch() {
        this.$router.push('/search');
      },
      getCurrentId(id) {
        this.curId = id;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";


  .header {
    &.mine-navbar {
      /* background-color: transparent; */
      background-color: $header-bgc;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }

  .category {
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: $bgc-theme;
  }

  .g-content-container {
    padding-top: 50px;
    height: 100%;
    display: flex;
  }
  .sidebar {
    width: 80px;
    height: 100%;
  }
  .main {
    flex: 1;
    height: 100%;
  }
</style>