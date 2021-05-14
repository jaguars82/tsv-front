<template>
  <div>
    <site-header></site-header>
    {{ mainRazdel }}
    <main-menu></main-menu>
    <router-view name="common"></router-view>
    <router-view v-if="$route.params.razdel" name="subrazdels" :razdel="$route.params.razdel" :key="$route.path"></router-view>
    <router-view v-else name="subrazdels" :razdel="mainRazdel" :key="$route.path"></router-view>
  </div>
</template>

<script>

import SiteHeader from './Header'
import MainMenu from './MainMenu'

export default {
  name: 'Carcas',
  components: {
    SiteHeader,
    MainMenu
  },
  props: [
    'mainRazdel'
  ],
  data () {
    return {
    }
  }/*,
  head: {
    script () {
      return [
        { type: 'text/javascript', src: this.$store.getters.repository + '/scripts/jssor.slider/jssor.slider.min.js' }
      ] 
    }
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
