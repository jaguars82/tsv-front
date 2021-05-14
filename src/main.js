import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import './quasar'
import VueHead from 'vue-head'
// import LoadScript from 'vue-plugin-load-script'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueHead)
// Vue.use(LoadScript)

// Vue.loadScript('./jslibs/jssor.js')

new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
