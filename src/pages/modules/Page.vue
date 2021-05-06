<template>
  <div>
    <div v-if="loading">Идёт загрузка ...</div>
    <div v-else>Page {{content.content}}</div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  data () {
    return {
    }
  },
  computed: {
    loading () {
      return this.$store.getters.pageLoading(this.id)
    },
    content: {
      get () {
        return this.$store.getters.pageContent(this.id)
      },
      set () {
        // empty setter to avoid "Computed property was assigned to but it has no setter" error
      }
    }
  },
  created () {
    this.$store.dispatch('setPageContent', this.id)
      .then( () => {
        this.content = this.$store.getters.pageContent(this.id)
      })
  }
}
</script>
