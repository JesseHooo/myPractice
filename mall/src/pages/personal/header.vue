<template>
  <div class="personal_header">
    <div class="account">
      <div class="account_photo">
        <div><img src="./gbwz.jpg" alt=""></div>
      </div>
      <div class="account_name">
      <span>宫本武藏</span> 
        <i class="iconfont icon-setting" slot="right" @click="toLogin"></i>
      </div>
    </div>
    <ul class="account_tab">
      <li>
        <span>452</span>
        <span>收藏夹</span>
      </li>
      <li>
        <span>94</span>
        <span>关注店铺</span>
      </li>
      <li>
        <span>100</span>
        <span>足迹</span>
      </li>
      <li>
        <span>3</span>
        <span>卡券</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PersonalHeader',
    methods:{
      toLogin(){
        this.$emit('btnClick');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~assets/scss/mixins";

  .personal_header {
    position: relative;
    padding: 10px;
    background-color: $header-bgc;
    color: #fff;

    .account {
      &_photo {
        @include flex-center();
        margin: 20px auto;
        height: 60px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 55px;
        }
      }

      &_name {
        @include flex-center();
        height: 100%;
        font-size: $icon-font-size-sm;

        span{
          margin: 0 5px 5px 0;
        }

        .iconfont {
          font-size: $icon-font-size;
        }
      }

     

      &_tab {
        @include flex-between();
        padding: 15px;

        li {
          @include flex-center(column);

          span {
            line-height: 20px;
          }
        }
      }
    }
  }
</style>