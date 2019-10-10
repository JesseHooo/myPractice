//vuex状态管理作用的地方

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      accountInfo:"用户未登录"
    },
    mutations: {
      user_login(state, payload) {
        state.accountInfo = payload
      },
      user_logout(state){
        state.accountInfo = "用户未登录"
      }
    }
})