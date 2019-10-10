<template>
  <div class="me-search">
    <el-input size="small" :placeholder="input" v-model=query ref="search" :disabled="isDisabled"
      @click.native="clicked" @onsubmit='commit'>
      <i slot="prefix" class="iconfont icon-search"></i>
      <i slot="suffix" class="el-input__icon el-icon-close" v-show="query" @click=clean></i>
    </el-input>
  </div>
</template>

<script>
  import { debounce } from 'assets/js/util';
  export default {
    name: 'MeSearch',
    props: {
      input: {
        type: String,
        default: "请输入内容"
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      commit(value) {
        console.log(value)
      },
      clean() {
        // this.inputText='';
        this.$refs.search.clear();
        this.$refs.search.focus();
      },
      clicked() {
        this.$emit('toSearch');
      }
    },
    watch: {
      query: debounce(function () {
        this.$emit('query', this.query);
      })
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/mixins";

  .me-search {

    .iconfont {
      line-height: 32px;
    }

    .el-input__inner {
      border: 0 none;
      background-color: $bgc-theme !important;
      border-radius: 15px;
      cursor: default !important;
    }

  }
</style>