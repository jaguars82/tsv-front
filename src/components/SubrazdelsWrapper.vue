<template>
  <div>
    <p>Подразделы {{ razdel }}</p>
    <subrazdel-wrapper v-for="item in currentSubrazdels" :key="item.id" :identificator="item.id" :type="item.type" :real-name="item.real_name"></subrazdel-wrapper>
  </div>
</template>

<script>

import SubrazdelWrapper from './SubrazdelWrapper.vue'

  export default {
    props: ['razdel'],
    components: { SubrazdelWrapper },
    /*data () {
      return {
        razdel: null
      }
    },*/
    computed: {
      currentSubrazdels () {
        return this.$store.getters.currentSubrazdels
      }
    },
    created () {
      this.$store.dispatch('setCurrentSubrazdels', this.razdel)
    }
  }
</script>