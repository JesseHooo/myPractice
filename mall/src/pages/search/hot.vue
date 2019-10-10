<template>
    <div class="search-hot">
      <div class="search-title">热门搜索</div>
      <div class="tag-container">
        <el-tag type="info" v-for="value in tagname">{{value}}</el-tag>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchHot',
    data() {
      return {
        tagname:[
          "中秋月饼","灯笼","g-shock表","科比球衣正品","中秋月饼","灯笼","g-shock表","科比球衣正品","中秋月饼","灯笼","g-shock表","科比球衣正品"
        ]
      }
    }
  }
  </script>
  
  <style lang="scss">
    @import "~assets/scss/mixins";

    .search-title {
      height: 30px;
      font-size: 16px;
      padding: 5px
    }
    .search-hot {
      border-top: 3px solid;
      border-color: $bgc-theme;
      background-color: #fff;
      padding: 10px;

      .tag-container{
        display:flex;
        flex-wrap:wrap;
      }
      
      .el-tag {
        margin: 4px;
        border: 0 none;
        background-color: $bgc-theme!important;
      }
    }
  </style>