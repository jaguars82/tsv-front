export default {
  state: {
    backgroundMode: '1',
    staticBackground: '',
    headerSlides: [],
    headerSDuration: '',
    headerSTransitions: '',
    avatarMode: '',
    avatarHeight: '',
    avatarLeft: '',
    avatarTop: '',
    avatarSlides: [],
    avatarSDuration: '',
    avatarSTransitions: ''
  },
  mutations: {
    SET_HEADER_PAARMS (state, payload) {
      state.backgroundMode = payload.backgroundMode
      state.staticBackground = payload.staticBackground
      state.headerSlides = payload.headerSlides
      state.headerSDuration = payload.headerSDuration
      state.headerSTransitions = payload.headerSTransitions.split('-')
      state.avatarMode = payload.avatarMode
      state.avatarHeight = payload.avatarHeight
      state.avatarLeft = payload.avatarLeft
      state.avatarTop = payload.avatarTop
      state.avatarSlides = payload.avatarSlides
      state.avatarSDuration = payload.avatarSDuration
      state.avatarSTransitions = payload.avatarSTransitions.split('-')
    }
  },
  actions: {
    setHeaderParams ({ commit }, payload) {
      commit('SET_HEADER_PAARMS', payload)
    }
  },
  getters: {
    backgroundMode (state) {
      return state.backgroundMode
    },
    staticBackground (state) {
      return state.staticBackground
    },
    staticHeight (state) {
      return state.staticHeight
    },
    headerSlides (state) {
      return state.headerSlides
    },
    headerSDuration (state) {
      return state.headerSDuration
    },
    headerSTransitions (state) {
      return state.headerSTransitions
    },
    avatarMode (state) {
      return state.avatarMode
    },
    avatarHeight (state) {
      return state.avatarHeight
    },
    avatarLeft (state) {
      if (state.avatarLeft) {
        return state.avatarLeft
      } else {
        return '16'
      }
    },
    avatarTop (state) {
      if (state.avatarTop) {
        return state.avatarTop
      } else {
        return '66'
      }
    },
    avatarSlides (state) {
      return state.avatarSlides
    },
    avatarSDuration (state) {
      return state.avatarSDuration
    },
    avatarSTransitions (state) {
      return state.avatarSTransitions
    }
  }
}