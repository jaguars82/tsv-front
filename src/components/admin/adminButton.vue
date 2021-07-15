<template>

  <div>

    <button
      class="adm-button relative-position container"
      :class="buttonActive ? 'adm-button-hover' : ''"
      @mouseenter="onHover"
      @mouseleave="onUnhover"
      v-ripple:orange
    >
      <q-avatar :class="buttonActive ? 'text-white' : 'text-grey-9'" left size="md" icon="fas fa-cog" :color="buttonActive ? 'orange' : 'white'" />
      <span>Настроить шапку</span>
      <q-menu @show="onShow" @hide="onHide">
        <q-list>
          <div v-for="item in actions" :key="item.index">
            <q-item
              v-if="item.type === 'category'"
              clickable
              dense
            >
              <div class="q-pr-md">
                <q-icon
                  :name="item.icon ? item.icon : defaultIcons[item.type]"
                  :color="item.iconColor ? item.iconColor : defaultColors[item.type]"
                  size="xs"
                >
                </q-icon>
              </div>
              <q-item-section style="font-family: 'Cuprum', sans-serif">{{ item.label }}</q-item-section>
              <q-item-section side>
                <q-icon name="fas fa-caret-right" />
              </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list>
                  <q-item
                    v-for="subitem in item.children"
                    :key="subitem.index"
                    dense
                    clickable
                    v-close-popup
                    @click="subitem.dialog = true"
                  >
                    <div class="q-pr-md">
                      <q-icon
                        :name="subitem.icon ? subitem.icon : defaultIcons[subitem.type]"
                        :color="subitem.iconColor ? subitem.iconColor : defaultColors[subitem.type]"
                        size="xs"
                      >
                      </q-icon>
                    </div>
                    <q-item-section style="font-family: 'Cuprum', sans-serif">{{ subitem.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
            <q-item
              v-else
              clickable
              v-close-popup
              @click="item.dialog = true"
              dense 
            >
              <div class="q-pr-md">
                <q-icon
                  :name="item.icon ? item.icon : defaultIcons[item.type]"
                  :color="item.iconColor ? item.iconColor : defaultColors[item.type]"
                  size="xs"
                >
                </q-icon>
              </div>
              <q-item-section style="font-family: 'Cuprum', sans-serif">{{ item.label }}</q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-menu>
    </button>

    <div
      v-for="item in actions"
      :key="item.index"
    >
      <div v-if="item.type === 'category'">
        
        <q-dialog
          v-for="subitem in item.children"
          :key="subitem.index"
          v-model="subitem.dialog"
        >
          <admin-form-wrapper :action="subitem.action"></admin-form-wrapper>
        </q-dialog>
      </div>
      <q-dialog
        v-else
        v-model="item.dialog"
      >
        <admin-form-wrapper :action="item.action"></admin-form-wrapper>
      </q-dialog>
    </div>

  </div>

</template>

<script>

import adminFormWrapper from './adminFormWrapper.vue'

export default {
  props: ['actions'],
  components: {
    adminFormWrapper
  },
  data () {
    return {
      hover: false,
      buttonActive: false,
      menuActive: false,
      defaultIcons: {
        add: 'fas fa-plus',
        edit: 'fas fa-pencil-alt',
        delete: 'fas fa-trash-alt',
        category: 'fas fa-folder-open'
      },
      defaultColors: {
        add: 'green',
        edit: 'blue',
        delete: 'red',
        category: 'grey-9'
      },
    }
  },
  methods: {
    onHover () {
      this.hover = true
      this.buttonActive = true
    },
    onUnhover () {
      this.hover = false
      if (!this.menuActive) {
        this.buttonActive = false
      }
    },
    onShow () {
      // console.log('menuShow')
      this.menuActive = true
    },
    onHide () {
      // console.log('menuHide')
      this.menuActive = false
      if (!this.hover) {
        this.buttonActive = false
      }
    },
  }
}
</script>

<style scoped>
.adm-button {
	background-color: rgba(0,0,0,.7);
	text-transform: uppercase;
	color: #FFF;
	border: solid 1px rgba(255,255,255,.6);
	text-shadow: none;
	padding: 0;
	border-radius: 20px 3px 3px 20px;
	border-left: none;
}

.adm-button-hover {
  color: rgba(0,0,0,.7);
	border: solid thin rgba(255,165,0,.7);
	background-color: #FFF;
	text-shadow: none;
}

.adm-button>span {
  font-family: 'Cuprum', sans-serif;
  padding: 0 10px;
  font-size: .75rem;
  white-space: nowrap;
}
</style>