<template>
  <div class="slider-warpper">
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider
       v-else
       :direction="direction"
       :loop="loop"
       :interval="interval"
       :pagination="pagination"
       :data="sliders">
      <swiper-slide v-for="(item, index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt="" class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>
<script>
  import MeSlider from 'base/slider';
  import { swiperSlide } from 'vue-awesome-swiper';
  import { sliderOptions } from './config';
  import { getHomeSlider } from '@/api/home';
  import MeLoading from 'base/loading';
  // import pic1 from './1.jpg';
  // import pic2 from './2.jpg';
  // import pic3 from './3.jpg';
  // import pic4 from './4.jpg';
  // 引入图片常用require

  export default {
    name: 'HomeSlider',
    components: {
      MeSlider,
      MeLoading,
      swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      // 外部api
      update() {
        return this.getSliders();
      },

      getSliders() { // return可以返回一个promise对象继续调用then()
        return getHomeSlider().then(data => {
          this.sliders = data;
        });
      }
    }
  };

</script>
<style lang="scss" scoped>
  .slider-warpper {
    height: 183px;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    width: 100%;
    height: 100%;
  }
</style>
