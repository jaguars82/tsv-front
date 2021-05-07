<template>
  <q-toolbar class="bg-primary text-white">
    
    <intersect
      v-for="(item, index) in mainMenu"
      :key="item.id"
      @enter="itemVisible(index, item)"
      @leave="itemHidden(index, item)"
    >
      <q-btn
        class="text-no-wrap"
        ref='mMenuButtons'
        :label="item.real_name"
        :to="'/'+item.name"
        stretch
        flat
      >

      </q-btn>
    </intersect>

    <div v-if="hiddenItemsAmount > 0" class="absolute-right row justify-center items-center">
      <q-btn class="bg-primary q-mr-md" size="sm" flat rounded icon="fas fa-ellipsis-h">
        <q-tooltip
          :delay="2000"
          anchor="top middle"
          self="bottom middle"
          :offset="[10, 20]"
          transition-show="scale"
          transition-hide="scale"
          content-style="font-size: 12px"
        >
          Нажмите для доступа к остальным пунктам Главного меню
        </q-tooltip>
        <q-badge rounded floating color="warning" :label="hiddenItemsAmount" />
        <q-menu
          content-class="text-uppercase"
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list v-for="item in hiddenItemsSorted" :key="item.id">
            <q-item clickable v-close-popup :to="'/'+item.name">
              <q-item-section>
                <q-item-label>{{ item.real_name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

  </q-toolbar>
</template>

<script>

import Intersect from 'vue-intersect'

Intersect.props.threshold = {
  type: Array,
  required: false,
  default: () => [0.99]
}

Intersect.props.rootMargin = {
  type: String,
  required: false,
  default: () => '0px -50px 0px 0px'
}

export default {
  components: { Intersect },
  data () {
    return {
      hiddenIDies: {},
      hiddenItems: []
    }
  },
  computed: {
    mainMenu () {
      return this.$store.getters.mainMenu
    },
    hiddenItemsAmount () {
      return Object.keys(this.hiddenIDies).length
    },
    hiddenItemsSorted () {
      return this.hiddenItems.slice().sort((prev, next) => prev.order - next.order)
    }
  },
  methods: {
    itemVisible ( index, item ) {
      
      this.$delete(this.hiddenIDies, item.id)

      function removeItemByID (array, id) {
        return array.filter( e => e.id !== id )
      }

      const filteredHiddenItems = removeItemByID (this.hiddenItems, item.id)
      
      this.hiddenItems = filteredHiddenItems

      this.$refs.mMenuButtons[index].$el.classList.remove('invisible')
    },
    itemHidden ( index, item ) {
      
      this.$set(this.hiddenIDies, item.id, true)
      this.hiddenItems.unshift(item)
      
      this.$refs.mMenuButtons[index].$el.classList.add('invisible')
      // console.log(this.hiddenItems)
    }
  }
}

</script>