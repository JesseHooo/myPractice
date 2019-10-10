<template>
    <div class="setting_list">
      <ul class="setting_container">
        <li class="setting_item" v-for="item in list">{{item}}</li>
      </ul>
      <div class="exit">
        <el-button class="exit_Btn" type="text" @click="open">退出登录</el-button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'AccountSetting',
    data() {
      return {
        list: ['个人资料', '账号与安全', '帮助与反馈']
      }
    },
    methods: {
      open() {
        this.$confirm('是否确认退出账号?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('comfirm')
        }).catch(() => {
          console.log('cancel')
        });
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/mixins";
  .el-message-box__wrapper .el-message-box{
    width: 80%;
  }

  .setting_container {
    margin: 8px 0 8px 0;
  }

  .setting_item {
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
    margin-top: 2px;
    padding-left: 12px;
  }

  .exit {
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
    text-align: center;

    .exit_Btn {

      .el-button {
        height: 60px;
        width: 60%;
      }

      &.el-button--text {
        color: #5d656b;
      }
    }
  }
</style>