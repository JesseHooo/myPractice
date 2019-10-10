<template>
  <div class="search-history" v-if="dataHistory.length">
    <div class="hisory-title">
      <h4>历史搜索</h4>
      <el-button class="delBtn" type="text" @click="open"><i class="iconfont icon-clear"></i>清空</el-button>
    </div>
    <div class="tag-container">
      <transition-group name="list" tag="ul">
        <li class="history-tag" v-for="(item,index) in dataHistory" :key="item">
          <div class="tag-title">{{item}}</div>
          <i class="el-icon-close" @click=delTag(index)></i>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchHistory',
    data() {
      return {
        dataHistory: [
          "0浏览过史浏览过的历史浏览过的历史",
          "1浏览过的历史浏览过的历史浏览过的历史",
          "2浏览过的历史浏览过的历史浏",
          "3浏览过的历史浏览过的史",
          "4浏览过的历的历史",
          "5浏览过的历史浏览历史",
          "6浏览过的历史史浏览过的历史",
          "7浏览过的史",
          "8浏览过的历史浏历史",
          "9浏览过的历史浏览过历史",
          "10浏览过史浏览过的历史浏览过的历史",
          "11浏览过的历史浏览过的历史"
        ]
      }
    },
    methods: {
      delTag(index) {
        this.dataHistory.splice(index, 1);
        setTimeout(() => {                   //改成异步操作原理是什么??
          this.$emit('dataChange');
        }, 400);
      },
      clearTags() {
        this.dataHistory = [];
        setTimeout(() => {                   //改成异步操作原理是什么??
          this.$emit('dataChange');
        }, 100);
      },
      open() {
        this.$confirm('是否清空所有搜索记录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          center: true
        }).then(() => {
          this.clearTags();
        }).catch(() => {
          return;
        });
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/mixins";
  .el-message-box {
    width: 80%;
  }

  .hisory-title {
    @include flex-between();
    height: 50px;
    font-size: 16px;
    padding: 10px 15px;
    
  }

  .search-history {
    line-height: 30px;
    border-top: 5px solid;
    border-color: $bgc-theme;
    background-color: #fff;

    .history-tag {
      @include flex-between();
      border-top: 2px solid;
      border-color: $bgc-theme;
      height: 50px;
      padding: 6px 15px;

      .tag-title {
        line-height: 1.5;
        @include multiline-ellipsis(1);
        width: 80%;
      }
    }
  }

  .delBtn {
    height: 50px;
    background-color: white;
    @include flex-center();

    .el-button {
      height: 60px;
      width: 60%;
    }

    &.el-button--text {
      color: #909399;
    }
  }

  .list {

    &-enter-active,
    &-leave-active {
      transition: opacity 0.3s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
</style>