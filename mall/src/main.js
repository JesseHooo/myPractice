// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import fastclick from 'fastclick';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLazyload from 'vue-lazyload';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';


fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1, // 加载边界
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1 // 尝试加载次数
});

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});
