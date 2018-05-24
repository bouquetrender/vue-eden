## Eden System

vue-eden 是一个美观的后台管理系统，简称 eden（伊甸园）。主要使用了 vue 框架与 element-ui 组件库开发。vue-eden 在后台集成方面没有这么复杂，只包含了最基础和最常用的功能。也易移除模块，当做基础模板进行开发。vue-eden 选用了 stylus，因为我喜欢。vue-eden 基于 vue-cli3 构建环境进行开发，没有复杂的 webpack 配置文件。可以在[官方文档](https://github.com/vuejs/vue-docs-zh-cn/tree/master/vue-cli)查看详细配置信息。如果有任何问题请发 issuse。

### 目录结构

平易近人一看就懂。

```
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

一些说明：SVG 图标存放在 SVG 目录中，因为我使用了 vue-svg-icon 更易于引入 SVG 文件。而主题色使用了官方推荐的[在线主题生成工具](https://elementui.github.io/theme-chalk-preview)，生成的一套覆盖色 css 直接在 main.js 中引入，当然你也可以通过修改使用其他方式动态更改主题色等。

### 国际化

使用了 vue-i18n，具体配置在 lang 目录下。

### 接口请求

使用了 axios，并且将请求方法存放在 api 目录下，返回 promise 对象。

### 动态路由与权限控制

动态路由列表存放在 router 目录下的 asyncRouterMap.js 文件。并且通过 meta 对象属性里的 roles 控制。roles 存放的是用户名。登陆成功后会将用户名存在 cookie 中并跳转到首页，跳转前中会触发 router 的 beforeEach 钩子函数，通过请求获得该用户的 roles（或者其他方式），并通过你设置 asyncRouterMap.js 路由文件中 meta 属性里的 roles 对比，如果存在则添加到一个临时变量中。最后将这个过滤后的路由对象保存在 store 中 state 里的 addRouters。然后通过 router.addRoutes 添加路由信息。并跳转到主页。这时 sidebar 侧边栏会根据 addRouters 路由数组遍历生成。这就实现了动态添加路由与权限控制。

### 面包屑

主要通过 this.$route.matched 实现，具体可以看 breadcrumb 这个组件代码，比较简单。