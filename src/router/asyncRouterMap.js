import _import from '@/utils/import'
const Layout = _import('layout/Layout')

export const asyncRouterMap = [
  // 个人中心
  {
    path: '/profile',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: _import('profile/index'),
        name: 'profile',
        meta: {
          title: 'profile',
          icon: 'test'
        }
      }
    ]
  },
  // 控件
  {
    path: '/widget',
    component: Layout,
    children: [
      {
        path: 'index',
        component: _import('widget/index'),
        name: 'widget',
        meta: {
          title: 'widget',
          icon: 'widgets'
        }
      }
    ]
  },
  // 卡片列表
  {
    path: '/panels',
    component: Layout,
    children: [
      {
        path: 'index',
        component: _import('panels/index'),
        name: 'panels',
        meta: {
          title: 'panels',
          icon: 'panels'
        }
      }
    ]
  },
  // 权限页面 只有 admin 用户才可访问
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: _import('permission/index'),
        name: 'permission',
        meta: {
          title: 'permission',
          icon: 'test',
          roles: ['admin']
        }
      }
    ]
  },
  // 表格
  {
    path: '/datatable',
    component: Layout,
    children: [
      {
        path: 'index',
        component: _import('datatable/index'),
        name: 'datatable',
        meta: {
          title: 'datatable',
          icon: 'table'
        }
      }
    ]
  },
  // 组件
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'components',
    meta: {
      title: 'components',
      icon: 'comp'
    },
    children: [
      {
        path: 'page1',
        component: _import('components/page1'),
        name: 'page1',
        meta: { title: 'page1' }
      },
      {
        path: 'page2',
        component: _import('components/page2'),
        name: 'page2',
        meta: { title: 'page2' }
      },
      {
        path: 'page3',
        component: _import('components/page3'),
        name: 'page3',
        meta: { title: 'page3' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
