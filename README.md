项目停止维护于2018年11月16日

Vue Eden 是一个美观的后台管理系统/集成方案，简称伊甸园。Eden 在后台集成解决方案引入没有过于复杂，只包含最基础和最常用的功能。也易移除页面模块，当做基础样式模板进行开发。这使得理解 Eden 结构代码并修改都变得十分友好，代码有参考 vue-element-admin。

此项目主要使用了 vue、vuex、vue-router、element-ui、stylus 进行开发。并使用 ESLint 进行代码检查工具并配合 prettier 进行格式化，无需担心代码风格。而插件除了 echarts 外，没有引入另外的大型库。所以例如富文本编辑器、excel处理等等功能需自行添加。登陆页面参考 vue-manager，部分代码参考 vue-element-admin。

可以进[预览页面](https://vedimension.github.io/vue-eden/)查看

## 目录结构

一些说明：使用了 vue-svg-icon 组件，SVG 图标存放在 SVG 目录中。而主题色使用了官方推荐的[在线主题生成工具](https://elementui.github.io/theme-chalk-preview)生成的一套 css 直接在 main.js 中引入覆盖，当然你也可以通过修改使用其他方式动态更改主题色等。请求类选用了 axios，并且将请求方法逻辑分离存放在 api 目录下。

```markdown
.
├── LICENSE
├── README.md
├── docs
│   └── docs.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue         
│   ├── api            请求接口
│   ├── assets         静态资源
│   ├── components     组件
│   ├── lang           国际化
│   ├── main.js        入口文件
│   ├── mock           MOCK 数据
│   ├── router         路由
│   ├── store          Store
│   ├── svg            svg 存放目录
│   ├── theme          主题色 css
│   ├── utils          辅助工具方法
│   └── views          页面
├── template
│   └── index.vue
└── vue.config.js      vue-cli3 配置文件
```

## 特点/技术栈

- 舒适配色与布局
- 权限控制
- 动态路由
- MOCK 数据
- 登录登出
- 界面锁定
- 伸缩侧边栏
- 自适应布局
- 页面标签控制
- 国际化多语言
- 个人中心

还有更多...

此项目主要使用了 `vue`、`vuex`、`vue-router`、`element-ui`、`stylus` 进行开发。并使用 `ESLint` 进行代码检查工具并配合 `prettier` 进行格式化，无需担心代码风格。而插件除了 echarts 外，没有引入另外的大型库。所以例如富文本编辑器、excel处理等等功能需自行添加。

## 开发环境

nodejs 版本必须大于 8 以上。使用了 `vue-cli3` 脚手架进行基础搭建，这使得项目没有直接暴露 Webpack 配置文件而直接通过 vue.config.js 里配置进行更改。具体配置信息可到 [vue-cli 官方文档](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md) 查看。

```js
module.exports = {
  baseUrl: process.env.baseUrl,
  outputDir: process.env.outputDir,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))

    config.resolve.extensions
      .add('.js')
      .add('.vue')
      .add('.styl')
  }
}
```

最主要的配置如上，非常简单。目前通过 `.env.[mode]` 方式设置环境变量，你可以在目录看到 `.env.development` 与 `.env.production` 这两个文件。


## 样式

全局样式目录 `src/assets/styl/index.styl`，变量值可存放在同级目录的 `variables.styl`。而 `element-ui` 处理了主题色覆盖，覆盖样式文件存放在 `src/theme` 目录下。

## 请求联调

Eden 将请求方法分离到了 api 目录下，由于使用的是 axios http 请求库所以返回的是一个 promise 对象。例子可查看 `src/views/login`，登录使用的是模拟请求。

```javascript
import http from '@/utils/http'

export function loginbyUser(username, password) {
  const data = {
    username,
    password
  }
  return http({
    url: '/login/login',
    method: 'post',
    data
  })
}
```

由于使用了 mock 所以会拦截请求并返回自己定义的数据。具体参考 `src/mock/index.js` 文件，每个页面的拦截方法根据路由名字写在同目录下并导入到 index.js。关闭 mock 仅需改一个变量值（有点蠢，我认为有更好的方法但目前不知如何做）。移除 mock 仅需在 `src/main.js` 中删除 `import './mock'`。

## 路由 / 权限控制

路由文件在 `src/router` 目录下。

`index.js` 是最主要的路由配置，路由导入，主架构路由，可添加无需权限即可访问的路由例如404、登录页等。

`asyncRouterMap.js` 是动态路由列表，新页面路由信息一般都加在这里。

`routerControl.js` 是路由钩子函数处理，权限和动态路由的其中一部分代码，锁屏和跳转判断就在这里处理。

添加一个新单页十分简单，直接在 `asyncRouterMap.js` 添加即可，即使无动态路由需求也可直接添加，因为路由权限是由配置 meta 对象的 roles 实现。以下是路由配置项：

```js
// 当设置 true 的时候该路由不会再侧边栏出现
hidden: true

// 当设置 true 的时候永远会显示根菜单，不设置的情况下只有当子路由个数大于一个时才会显示根菜单
// 当一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式。只有一个时会将那个子路由当做根路由
alwaysShow: true

// 当设置 noredirect 的时候该路由不会在面包屑导航中出现
redirect: 'noredirect'

name:'router-name'            // 设定路由的名字，必须填写 否则使用 <keep-alive> 时会出现各种问题	
meta : {
  roles: ['admin','editor']   // 设置该路由进入的权限，支持多个权限叠加
  title: 'title'              // 设置该路由在侧边栏和面包屑中展示的名字
  icon: 'svg-name'            // 设置该路由的图标
  noCache: true               // 如果设置为false ,则不会被 <keep-alive> 缓存(默认 true)
}
```

侧边栏导航支持三级路由，所以你可以这样写

```js
export const router = [
  {
    path: '',
    component: Layout,
    redirect: 'test',
    children: [
      {
        path: '/test',
        name: 'test',
        component: _import('test/index'),
        meta: {
          title: 'test',
          icon: 'svg-test',
          noCache: true
        },
        children: [
          // 加在这里
        ]
      }
    ]
  }
]
```

## 构建发布

执行 `npm run build` 打包应用。如有测试预发布、正式环境等等可自行添加更改配置。环境变量分别在 `.env.development` 与 `.env.production` 这两个文件。

构建环境使用了 `webpack-bundle-analyzer` 插件不过由于我使用了 Travis ci 持续集成所以注释掉。有需要的可以将注释移除。

## 图标

可自行引用 iconfont、fontawesome、图片等等方式，这里主要是说明一下 svg 图标。svg 必须存放在 `src/svg` 目录下，因项目使用了 `vue-svg-icon` 库，可在代码中直接通过下面方式引入：

```html
<icon class="icon_class" name="svg-icon" :scale="3"></icon>
```

scale 设置缩放比，name 则对应 `src/svg` 目录下想引入的 svg 的名字。可进具体的[官方演示文档](https://cenkai88.github.io/vue-svg-icon/demo/)查看

## 国际化

使用了 `vue-i18n` 来配置国际化功能，简单友好。中英文配置都在 `src/lang` 目录下。在代码中通过 `$t('app.test')` 引入对应语言文件中的 `app.test` 对象属性文字。
