import Vue from 'vue'
import Element from 'element-ui'
import Icon from 'vue-svg-icon/Icon.vue';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styl/index.styl'

import App from './App'
import {router} from './router'
import store from './store'

import i18n from './lang'

Vue.component('icon', Icon); 

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

Vue.prototype._VERSION = 'alpha'

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
