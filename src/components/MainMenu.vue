<template>
  <q-toolbar class="bg-primary text-white">
    <q-btn
      v-for="item in mainMenu"
      :key="item.id"
      :label="item.real_name"
      :to="'/'+item.name"
      stretch
      flat
    >

    </q-btn>
    <!--Main Menu
    <ul>
      <li v-for="item in mainMenu" :key="item.id"><router-link :to="'/'+item.name">{{ item.real_name }}</router-link></li>
    </ul>
    -->
  </q-toolbar>
</template>

<script>

  export default {
    data () {
      return {
        // windowWidth: 0
      }
    },
    computed: {
      mainMenu () {
        return this.$store.getters.mainMenu
      }
    }/* ,
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.windowWidth = window.innerWidth;
      }
    } */
  }

</script>