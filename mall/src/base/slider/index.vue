<template>
  <swiper :options="swiperOption" :key="keyID">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import { swiper } from 'vue-awesome-swiper';
  export default {
    name: 'MeSlider',
    components: {
      swiper
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return [
            'horizontal',
            'vertical'
          ].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        keyID: Math.random()
      };
    },
    methods: {
      init() {
        this.swiperOption = {
          watchOverflow: true,
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          slidesPerView: 1, // 容器同时显示几张图片
          loop: this.data.length === 1 ? false : this.loop, // 开启无缝滚动
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        };
      }
    },
    created() {
      this.init();
    },
    watch: {
      data(newData) {
        if (newData.length < 1) {
          return;
        }
        this.keyID = Math.random();
        this.swiperOption.loop = this.data.length === 1 ? false : this.loop;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
</style>
