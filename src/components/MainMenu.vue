<template>
  <div>
    Main Menu
    <ul>
      <li v-for="item in mainMenu" :key="item.id"><router-link :to="'/'+item.name">{{ item.real_name }}</router-link></li>
    </ul>
  </div>
</template>

<script>

  export default {
    computed: {
      mainMenu () {
        return this.$store.getters.mainMenu
      }
    }
  }

</script>