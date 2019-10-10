<template>
  <div>
    <me-navbar class="cart">
      <span class="cart_titile" slot="center">购物车</span>
    </me-navbar>
    <ul class="setting_container">
      <li class="setting_item" v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'Cart',
    components: {
      MeNavbar
    },
    data() {
      return {
        list: ['购物清单栏', '数量', '单价', '合计', '结算','。。。']
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .cart_titile {
    @include flex-center();
    font-size: $icon-font-size-sm;
    color: $icon-color-default;
  }

  .cart {
    &.mine-navbar {
      background-color: $header-bgc;
    }
  }

  .setting_container {
    margin: 20px 0 8px 0;
  }

  .setting_item {
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
    margin-top: 2px;
    padding-left: 12px;
  }
</style>