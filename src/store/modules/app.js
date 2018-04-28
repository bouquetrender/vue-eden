import Cookies from 'js-cookie'
import * as types from '../mutaion-types'

const app = {
  state: {
    version: 'Alpha 1.0',
    language: Cookies.get('language') || 'en',
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
  },
  mutations: {
    [types.TOGGLE_SIDEBAR]: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    [types.SET_LANGUAGE]: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit(types.TOGGLE_SIDEBAR)
    },
    setLanguage({ commit }, language) {
      commit(types.SET_LANGUAGE, language)
    }
  }
}

export default app