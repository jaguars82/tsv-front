import Vue from 'vue'
import Vuex from 'vuex'
import nav from './navigation'
// import modules from './moduls/index.js'
import page from './moduls/page.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    nav, page
  }
})
