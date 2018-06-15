import * as types from '../mutaion-types'
import storage from '@/utils/storage'

const setViews = visitedViews => {
  storage.set('visitedViews', visitedViews)
}

const tagView = {
  state: {
    visitedViews: storage.get('visitedViews') || [],
    cachedViews: []
  },
  mutations: {
    [types.ADD_VISITED_TAG]: (state, route) => {
      if (state.visitedViews.some(view => view.name === route.name)) return
      state.visitedViews.push({
        name: route.name,
        title: route.meta.title || 'empty-name',
        path: route.path
      })
      if (route.cache) {
        state.cachedViews.push(route.name)
      }
      setViews(state.visitedViews)
    },
    [types.REMOVE_VISITED_TAG]: (state, tag) => {
      for (let [index, viewItem] of state.visitedViews.entries()) {
        if (viewItem.path === tag.path) {
          state.visitedViews.splice(index, 1)
          break
        }
      }
      for (let [index, name] of state.cachedViews.entries()) {
        if (name === tag.name) {
          state.cachedViews.splice(index, 1)
        }
      }
      setViews(state.visitedViews)
    },
    [types.CLOSE_OTHER_TAG]: (state, route) => {
      const newView = new Array({
        name: route.name,
        title: route.meta.title || 'empty-name',
        path: route.path
      })
      state.visitedViews = newView
      setViews(newView)
    },
    [types.CLOSE_ALL_TAG]: state => {
      state.visitedViews = []
      setViews([])
    }
  },
  actions: {
    addVisitedTag({ commit }, route) {
      commit(types.ADD_VISITED_TAG, route)
    },
    removeVisitedTag({ commit, state }, tag) {
      return new Promise(resolve => {
        commit(types.REMOVE_VISITED_TAG, tag)
        resolve(state.visitedViews)
      })
    },
    closeOtherView({ commit }, route) {
      commit(types.CLOSE_OTHER_TAG, route)
    },
    closeAllView({ commit }) {
      return new Promise(resolve => {
        commit(types.CLOSE_ALL_TAG)
        resolve()
      })
    }
  }
}

export default tagView
