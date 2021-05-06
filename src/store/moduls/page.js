import axios from 'axios'
import Vue from 'vue'

export default {
  state: {
    loadings: {},
    pages: {}
  },
  mutations: {
    SET_PAGE_LOADING (state, payload) {
      Vue.set(state.loadings, payload.id, payload.value)
    },
    SET_PAGE_CONTENT (state, payload) {
      Vue.set(state.pages, payload.id, payload.pageContent)
    }
  },
  actions: {
    setPageContent ({ commit, state }, payload) {
      if(!state.pages[payload]) {
        commit('SET_PAGE_LOADING', { id: payload, value: true })
        axios({
          method: 'get',
          url: "http://test.teacher-info.net/vserver/server.php?queryMode=develop&query_name=page&params="+payload
        }).then(response => {
          let result = {
            id: null,
            pageContent: {}
          }
          result.id = payload
          result.pageContent = response.data
          commit('SET_PAGE_CONTENT', result)
        }).finally(() => {
          commit('SET_PAGE_LOADING', { id: payload, value: false })
        })
      }
    }
  },
  getters: {
    pageLoading: state => id => {
      return state.loadings[id]
    },
    pageContent: state => id => {
      return state.pages[id]
    }
  }
}