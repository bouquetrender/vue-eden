import { constantRouterMap } from '@/router'
import { asyncRouterMap } from '@/router/asyncRouterMap'
import * as types from '../mutaion-types'

const routePermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) > -1)
  } else {
    return true
  }
}

const filterAsyncRouter = (asyncRouterMap, roles) => {
  const routers = asyncRouterMap.filter(route => {
    if (routePermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return routers
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    [types.SET_ROUTERS]: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let routers = null
        // 如果 roles 角色中存在 admin 则直接返回所有路由, 否则进行路由过滤
        roles.indexOf('admin') > -1
          ? (routers = asyncRouterMap)
          : (routers = filterAsyncRouter(asyncRouterMap, roles))
        commit(types.SET_ROUTERS, routers)
        resolve()
      })
    }
  }
}

export default permission
