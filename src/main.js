import Vue from 'vue'
import Element from 'element-ui'
import scroll from 'vue-seamless-scroll'
import Icon from 'vue-svg-icon/Icon.vue'
import '@/theme/element-#41B883/index.css'
import '@/assets/styl/index'
import '@/mock'

import App from '@/App'
import { router } from '@/router'
import '@/router/routerControl'
import store from '@/store'

import i18n from '@/lang'

Vue.component('icon', Icon)

Vue.use(scroll)
Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
