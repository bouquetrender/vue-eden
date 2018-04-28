import Cookies from 'js-cookie'
import * as types from '../mutaion-types'

const app = {
  state: {
    version: 'Alpha 1.0',
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
  mutation: {
    [types.TOGGLE_SIDEBAR]: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app