import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app'
import getters from './getters'

const store = new Vuex.Store({
  modules: {
    app
  },
  getters,
  strict: false
})

export default store