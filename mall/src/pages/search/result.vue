<template>
  <div class="search-result">
    <ul>
      <li class="result-tag" v-for="(item,index) in results" :key="index">
        {{item[0]}}
      </li>
    </ul>
    <div class="result-tag no-result" v-show="!results.length">没有结果</div>
  </div>
</template>

<script>
  import { getSearchResult } from '@/api/search'
  export default {
    name: 'SearchResult',
    data() {
      return {
        results: []
      }
    },
    methods: {
      search(keyWord) {
        if (!keyWord) {
          return;
        }
        console.log('searching', keyWord);
        getSearchResult(keyWord).then(data => {
          if (data) {
            this.results = data;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .search-result {
    height: 100vh;
    line-height: 30px;
    border-top: 5px solid;
    border-color: $bgc-theme;
    background-color: #fff;

    .result-tag {
      border-top: 2px solid;
      border-color: $bgc-theme;
      height: 50px;
      padding: 6px 15px;
    }

    .no-result{
      text-align: center;
    }
  }
</style>