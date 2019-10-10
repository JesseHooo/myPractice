import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/page/main'
import Login from '@/page/login'
import Signup from '@/page/signup'
import Personal from '@/page/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/signup',
          name: 'signup',
          component: Signup
        }
      ]
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
})
