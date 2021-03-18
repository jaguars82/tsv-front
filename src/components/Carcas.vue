<template>
  <div>
    {{ mainRazdel }}
    <main-menu></main-menu>
    <router-view name="common"></router-view>
    <router-view v-if="$route.params.razdel" name="subrazdels" :razdel="$route.params.razdel" :key="$route.path"></router-view>
    <router-view v-else name="subrazdels" :razdel="mainRazdel" :key="$route.path"></router-view>
  </div>
</template>

<script>

import MainMenu from './MainMenu'

export default {
  name: 'Carcas',
  components: {
    MainMenu
  },
  props: [
    'mainRazdel'
  ],
  data () {
    return {
    }
  }/*,
  beforeCreate () {
    this.$store.dispatch('setMainRazdel')
    this.$store.dispatch('setMainMenu')
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
