import Vue from 'vue'
import VueRouter from 'vue-router'
import _import from '@/utils/import'
const Layout = _import('layout/Layout')

Vue.use(VueRouter)

/**
* hidden: true                   当设置 true 的时候该路由不会再侧边栏出现
* alwaysShow: true               当设置 true 的时候永远会显示根菜单，不设置的情况下只有当子路由个数大于一个时才会显示根菜单
*                                当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式。只有一个时会将那个子路由当做根路由
*
* redirect: noredirect           当设置 noredirect 的时候该路由不会在面包屑导航中出现
* name:'router-name'             设定路由的名字，必须填写 否则使用 <keep-alive> 时会出现各种问题
* meta : {
    roles: ['admin','editor']    设置该路由进入的权限，支持多个权限叠加
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
    noCache: true                如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
  }
**/
export const constantRouterMap = [
  {
    path: '/401',
    component: _import('errorPage/401'),
    hidden: true
  },
  {
    path: '/404',
    component: _import('errorPage/404'),
    hidden: true
  },
  {
    path: '/login',
    component: _import('login/index'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: _import('home/index'),
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: _import('documentation/index'),
        meta: {
          title: 'documentation',
          icon: 'documentation',
          noCache: true
        }
      }
    ]
  }
]

export const router = new VueRouter({
  routes: constantRouterMap,
  scrollBehavior: () => ({ y: 0 })
})
