import Vue from 'vue';
import Router from 'vue-router';//引入
// import Home from 'pages/home';
// import Category from 'pages/category';
// import Cart from 'pages/cart';
// import Personal from 'pages/personal';
// import Search from 'pages/search';
// import Product from 'pages/product';

Vue.use(Router);//注册

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home'),
    // second grade router
    children: [
      {
        name: 'home-product',
        path: 'product/:id',//动态路径
        component: () => import('pages/product')
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('pages/login')
  },
  {
    path: '*',
    redirect: '/home'
  }
];

export default new Router({
  routes
});
