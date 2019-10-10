<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading" />
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="mine-scroll-pull-up" v-if="pullUp">
      <me-loading :text="pullUpText" inline ref="pullUpLoading" />
    </div>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import MeLoading from 'base/loading';
  import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_START,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_END,
    PULL_UP_HEIGHT,
    PULL_UP_TEXT_INIT,
    PULL_UP_TEXT_START,
    PULL_UP_TEXT_ING,
    PULL_UP_TEXT_END
  } from './config';

  export default {
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide,
      MeLoading
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      },
      data: {
        type: [Array, Object]
      },
      pullDown: {
        type: Boolean,
        default: false
      },
      pullUp: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.init();
    },
    watch: {
      data() {
        this.update();
      }
    },
    methods: {
      // 外部调用的api
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update();
        console.log("updated")
      },
      scrollToTop(speed, runCallBacks) {
        this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallBacks);
      },

      // 插件内部使用方法
      init() {
        this.pulling = false,
        this.pullDownText = PULL_DOWN_TEXT_INIT,
        this.pullUpText = PULL_UP_TEXT_INIT,
        this.swiperOption = {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true, // 单次滚动距离
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: { // swiper插件自带的api
            sliderMove: this.scroll,
            touchEnd: this.touchEnd,
            transitionEnd: this.scrollEnd // 监听滑动结束之后的距离
          }
        };
      },
      scroll() {
        const swiper = this.$refs.swiper.swiper;

        // 触发scroll事件 监听滑动距离决定回到顶部部件的显示
        this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);

        if (this.pulling) {
          return;
        }

        if (swiper.translate > 0) { // 下拉
          if (!this.pullDown) {
            return;
          }
          if (swiper.translate > PULL_DOWN_HEIGHT) {
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
          } else {
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
          }
        } else if (swiper.isEnd) { // 上拉
          if (!this.pullUp) {
            return;
          }

          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));
          if (isPullUp) {
            this.$refs.pullDownLoading.setText(PULL_UP_TEXT_START);
          } else {
            this.$refs.pullDownLoading.setText(PULL_UP_TEXT_INIT);
          }
        }
      },
      scrollEnd() {
        const swiper = this.$refs.swiper.swiper;

        this.$emit('scroll-end', swiper.translate, swiper, this.pulling);
      },
      touchEnd() {
        const swiper = this.$refs.swiper.swiper;

        if (this.pulling) {
          return;
        }

        if (swiper.translate > PULL_DOWN_HEIGHT) { // 下拉刷新
          if (!this.pullDown) {
            return;
          }

          this.pulling = true;
          swiper.allowTouchMove = false; // 禁止触摸
          swiper.setTransition(swiper.params.speed); // 设置回弹速度
          swiper.setTranslate(PULL_DOWN_HEIGHT);
          swiper.params.virtualTranslate = true; // 停止回弹
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);
          this.$emit('pull-down', this.pullDownEnd);// 上报事件并传入回调函数
        } else if (swiper.isEnd) { // 上拉刷新
          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));
          // const totalHeight = parseInt(swiper.$wrapperEl.css('height'));

          if (isPullUp) {
            if (!this.pullUp) {
              return;
            }
            this.pulling = true;
            swiper.allowTouchMove = false; // 禁止触摸
            swiper.setTransition(swiper.params.speed); // 设置回弹速度
            swiper.setTranslate(swiper.height + PULL_UP_HEIGHT - parseInt(swiper.$wrapperEl.css('height')));
            swiper.params.virtualTranslate = true; // 停止回弹
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);
            this.$emit('pull-up', this.pullUpEnd);// 上报事件并传入回调函数
          }
        }
      },
      pullDownEnd() {
        const swiper = this.$refs.swiper.swiper;

        this.pulling = false;
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
        swiper.allowTouchMove = true;
        swiper.params.virtualTranslate = false;
        swiper.setTransition(swiper.params.speed);
        swiper.setTranslate(0);
        setTimeout(() => {
          this.$emit('pull-down-transition-end');// 用不用传相关参数
        }, swiper.params.speed);
      },
      pullUpEnd() {
        const swiper = this.$refs.swiper.swiper;

        this.pulling = false;
        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
        swiper.allowTouchMove = true;
        swiper.params.virtualTranslate = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }

  .mine-scroll-pull-up,
  .mine-scroll-pull-down {
    position: absolute;
    left: 0;
    width: 100%;
  }

  .mine-scroll-pull-down {
    bottom: 100%;
    height: 80px;
  }

  .mine-scroll-pull-up {
    top: 100%;
    height: 80px;
  }
</style>
