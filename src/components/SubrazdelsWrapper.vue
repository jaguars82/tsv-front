<template>
  <div>
    <p>Подразделы раздела {{ razdel }}</p>
    <subrazdel-wrapper v-for="item in currentSubrazdels" :key="item.id" :identificator="item.id" :type="item.type" :real-name="item.real_name"></subrazdel-wrapper>
  </div>
</template>

<script>

import SubrazdelWrapper from './SubrazdelWrapper.vue'

  export default {
    name: 'SubrazdelsWrapper',
    props: ['razdel'],
    components: { SubrazdelWrapper },
    computed: {
      currentSubrazdels () {
        const subrazdels = this.$store.getters.currentSubrazdels
        if (subrazdels) {
          return subrazdels.filter(function(subrazdel) {
            return subrazdel.type !== 'category'
          })
        } else {
          return null
        }
      }
    },
    created () {
      this.$store.dispatch('setCurrentSubrazdels', this.razdel)
    }
  }
</script>