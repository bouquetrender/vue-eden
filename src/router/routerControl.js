import { router } from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth.js'

function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') !== -1) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) !== -1)
}

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  nprogress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' }) // 如果登录过后访问登录页面则跳回主页
      nprogress.done()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      nprogress.done() // 如果当前页是 login 则路由不会触发 after 钩子函数，需要手动处理
    }
  }
})

router.afterEach((to, from) => {
  nprogress.done()
})
