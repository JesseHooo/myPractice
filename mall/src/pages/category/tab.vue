<template>
    <me-scroll class="tab-container" style="height: 100%;">
    <ul class="tab">
      <li 
      class="tab-item" 
      :class="{'tab-item-active': item.id === curId}"
      v-for="(item,index) in items" 
      :key=index
      @click="switchTab(item.id)"
      >{{item.name}}</li>
    </ul>
  </me-scroll>
</template>

<script>
  import { categoryNames } from './config';
  import MeScroll from 'base/scrollbar';

  export default {
    name: 'CategoryTab',
    components: {
      MeScroll
    },
    data() {
      return {
        curId: ''
      }
    },
    methods: {
      init() {
        this.items = categoryNames;
        this.switchTab(this.items[0].id);
      },
      switchTab(id) {
        if (this.curId === id) {
          return;
        }
        this.curId = id;
        this.$emit('switch-tab', id);
        
      }
    },
    created() {
      this.init();
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  $tab-item-height: 46px;

  .tab {
    width: 100%;

    &-item {
      height: $tab-item-height;
      background-color: #fff;
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      color: #080808;
      font-size: $font-size-l;
      font-weight: bold;
      text-align: center;
      line-height: $tab-item-height;
      @include ellipsis();

      &:last-child {
        border-bottom: none;
      }
    }

    &-item-active {
      background: none;
      border-right: none;
      color: #f23030;
    }
  }
</style>