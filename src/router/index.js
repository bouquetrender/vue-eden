import Vue from 'vue'
import VueRouter from 'vue-router'
const _import = require('@/utils/import')

const Layout = _import('layout/Layout')

Vue.use(VueRouter)

/**
* https://github.com/PanJiaChen/vue-element-admin/blob/master/src/router/index.js
* 
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
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
  }
]

export const router = new VueRouter({
  routes: constantRouterMap,
  scrollBehavior: () => ({ y: 0 })
})
