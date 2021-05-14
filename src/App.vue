<template>
  <div id="app">
    <Carcas :main-razdel="mainRazdel"/>
  </div>
</template>

<script>
import Carcas from './components/Carcas.vue'

export default {
  name: 'App',
  components: {
    Carcas
  },
  computed: {
    mainRazdel () {
      return this.$store.getters.mainRazdel
    }
  },
  created () {
    this.$store.dispatch('setMainRazdel')
    this.$store.dispatch('setMainMenu')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
