import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app'
import permission from './modules/permission'
import getters from './getters'

const store = new Vuex.Store({
  modules: {
    app,
    permission
  },
  getters,
  strict: false
})

export default store
