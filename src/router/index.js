import Vue from 'vue'
import VueRouter from 'vue-router'
const _import = require('@/utils/import')

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/404',
    name: '404',
    component: _import('errorPage/404'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: _import('layout/Layout'),
    name: 'home',
    redirect: { name: 'home/index' },
    meta: {
      desc: '首页',
      icon: 'home',
      noExpand: true
    },
    children: [
      {
        path: '',
        component: _import('home/index'),
        name: 'home/index',
        meta: {
          desc: '首页'
        }
      }
    ]
  }
]

export const router = new VueRouter({
  routes: constantRouterMap
})

// router.beforeEach((to, from, next) => {})
// router.afterEach((to) => {})