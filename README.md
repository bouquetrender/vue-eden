<p align="center">
  <img width="220" src="https://i.loli.net/2018/05/21/5b02ebd9efd46.png">
</p>

<p align="center">
  <a href="https://github.com/Sakuyakun/vue-eden/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Sakuyakun/vue-eden.svg?style=flat-square" alt="license">
  </a>
  <a href="https://travis-ci.org/Sakuyakun/vue-eden">
    <img src="https://img.shields.io/travis/Sakuyakun/vue-eden.svg?style=flat-square" alt="GitHub release">
  </a>
</p>

vue-eden 是一个美观的后台管理系统模板，简称 Eden（伊甸园）。**目前正在开发中，[预览页面](https://sakuyakun.github.io/vue-eden/)和文档即将完成**。主要使用了 vue 框架与 element-ui 组件库开发。Eden 在后台集成方面没有这么复杂，只包含了最基础和最常用的功能。也易移除模块，当做基础模板进行开发。Eden 选用了 Stylus 编写 CSS，因为我喜欢。Eden 基于 vue-cli3 构建环境进行开发，没有暴露 Webpack 配置文件而直接通过 vue.config.js 里进行配置更改，代码采用了 ESLint + Prettier 格式化。

![id](https://i.loli.net/2018/05/19/5aff9f7bdb36f.png)

大概有以下这些功能

- [x] i18n
- [x] Permission authentication
- [x] Mock Data
- [ ] Base Layout
- [ ] sidebar / breadcrumb / tags-view
- [ ] Login / Logout / Lock
- [ ] Markdown editor / preview
- [ ] Screenshots
- [ ] Documentation

还有更多 ...

## 目录结构

一些说明：SVG 图标存放在 SVG 目录中，因为我使用了 vue-svg-icon 更易于引入 SVG 文件。而主题色使用了官方推荐的[在线主题生成工具](https://elementui.github.io/theme-chalk-preview)，生成的一套覆盖色 css 直接在 main.js 中引入，当然你也可以通过修改使用其他方式动态更改主题色等。使用了 vue-i18n 处理国际化，具体配置在 lang 目录下。请求类选用了 axios，并且将请求方法存放在 api 目录下。

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

## 启动

执行 serve 脚本将自动启动 http://localhost:8863

```
# install dependency
npm install

# develop
npm run serve 

# build for production environment
npm run build

# lint
npm run lint
```
