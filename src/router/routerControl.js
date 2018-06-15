import { router } from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import * as tools from '@/utils/tools'

const hasPermission = (roles, permissionRoles) => {
  if (roles.indexOf('admin') !== -1) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) !== -1)
}

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  if (store.getters.lockState === 'lock' && to.name !== 'lock') {
    next({
      replace: true,
      name: 'lock'
    })
  } else if (store.getters.lockState === 'unlock' && to.name === 'lock') {
    next(false)
  } else if (getToken()) {
    // 如果登录过后访问登录页面则跳回主页
    if (to.path === '/login') {
      next({ path: '/' })
      nprogress.done()
    } else {
      // 请求用户信息，通过 roles 动态获取路由
      if (store.getters.roles.length === 0) {
        try {
          const infoResponse = await store.dispatch('getUserInfo')
          const { roles } = infoResponse.data
          // 根据 roles 权限生成路由表
          await store.dispatch('generateRoutes', roles)
          // 动态新生成的路由表
          router.addRoutes(store.getters.addRouters)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('felogout')
          tools.notify({
            type: 'error',
            message: 'Verification failed, please login again'
          })
          next({ path: '/' })
        }
      } else {
        // 如有 roles 则通过与路由 meta 的 roles 判断是否有访问该路由的权限
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } })
        }
      }
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

router.afterEach(() => {
  nprogress.done()
})
