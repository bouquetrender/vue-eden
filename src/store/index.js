import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app'

const store = new Vuex.Store({
  modules: {
    app
  },
  strict: false
})

export default store