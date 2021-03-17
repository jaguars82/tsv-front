import Vue from 'vue'
import VueRouter from 'vue-router'
import ComContent from '../components/RazdelCommonContent.vue'
import SubrazdelsWrapper from '../components/SubrazdelsWrapper.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'mainpage',
        components: {
          common: ComContent,
          subrazdels: SubrazdelsWrapper
        }
      },
    ],
    mode: 'history'
  })
  
  export default router