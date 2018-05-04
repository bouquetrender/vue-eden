import { router } from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})
router.afterEach((to, from) => {
  nprogress.done()
})
