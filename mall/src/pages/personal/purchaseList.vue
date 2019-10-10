<template>
  <div class="purchaseList">
    <div class="purchaseList_title">我的订单</div>
    <div class="list_tab">
      <el-badge :value="12" class="item">
        <el-button size="small">待付款</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">待发货</el-button>
      </el-badge>
      <el-badge :value="1" class="item">
        <el-button size="small">待收货</el-button>
      </el-badge>
      <el-badge :value="2" class="item">
        <el-button size="small">评价</el-button>
      </el-badge>
      <el-badge :value="2" class="item">
        <el-button size="small">退款/售后</el-button>
      </el-badge>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonalPurchaseList'
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .purchaseList {
    margin-top: 5px;
    padding: 10px;
    background-color: #fff;

    .purchaseList_title {
      border-bottom: 2px solid;
      border-color: $bgc-theme;
      padding-bottom: 5px;
    }

    .list_tab {
      @include flex-between();
      margin: 10px 10px;

      .item {
        margin-top: 10px;

      }
    }
  }

  .purchaseList /deep/ .el-button--small {
    padding: 9px 6px;
  }
</style>