import axios from 'axios'

export default {
  state: {
    mainMenu: null,
    mainRazdel: null,
    currentSubrazdels: null
  },
  mutations: {
    SET_MAIN_MENU (state, payload) {
      state.mainMenu = payload
    },
    SET_MAIN_RAZDEL (state, payload) {
      state.mainRazdel = payload
    },
    SET_CURRENT_SUBRAZDELS (state, payload) {
      state.currentSubrazdels = payload
    }
  },
  actions: {
    setMainMenu ({ commit }) {
      axios({
        method: 'get',
        url: "http://test.teacher-info.net/vserver/server.php?queryMode=develop&table=razdeli&fields=id, name, real_name, access, default_content, navigation_mode, allow_mode_change&condition=`parent` = 'root' AND `hidden` = '0'&order=order",
        /*
        method: 'post',
        url: '/vserver/server.php',
        data: {
          table: 'razdeli',
          fields: ['id', 'name', 'real_name', 'access', 'default_content', 'navigation_mode', 'allow_mode_change'],
          condition: []
        }
        */
      })
      .then(function (response) {
        commit('SET_MAIN_MENU', response.data)
        //console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    setMainRazdel ({ commit }) {
      axios({
        method: 'get',
        url: "http://test.teacher-info.net/vserver/server.php?queryMode=develop&singleRow=1&table=razdeli&fields=name&condition=`parent` = 'root' AND `order` <> '0' AND `hidden` <> '1'&order=order&limit=1"
      })
      .then(function(response){
        commit('SET_MAIN_RAZDEL', response.data.name)
        //console.log(response.data.name)
      })
      .catch(function(error){
        console.log(error)
      })
    },
    setCurrentSubrazdels ({ commit }, payload) {
      axios({
        method: 'get',
        url: "http://test.teacher-info.net/vserver/server.php?queryMode=develop&table=razdeli&fields=id, parent, name, real_name, type, access&condition=`parent` = '"+payload+"' AND `hidden` = '0'&order=order"
      })
      .then(function(response){
        commit('SET_CURRENT_SUBRAZDELS', response.data)
        console.log(response)
      })
      .catch()
    }
  },
  getters: {
    mainMenu (state) {
      return state.mainMenu
    },
    mainRazdel (state) {
      return state.mainRazdel
    },
    currentSubrazdels (state) {
      return state.currentSubrazdels
    }
  }
}