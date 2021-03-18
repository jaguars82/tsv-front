import Vue from 'vue'
import VueRouter from 'vue-router'
import ComContent from '../components/RazdelCommonContent.vue'
import SubrazdelsWrapper from '../components/SubrazdelsWrapper.vue'
//import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/',
        //redirect: '/'+store.getters.mainRazdel,
        name: 'main',
        components: {
        common: ComContent,
        subrazdels: SubrazdelsWrapper
        }
      },
      {
        path: '/:razdel',
        name: 'fullPodrazdel',
        components: {
          common: ComContent,
          subrazdels: SubrazdelsWrapper
        }
      }
    ],
    mode: 'history'
  })
  
  export default router