<p align="center">
  <img width="350px" src="https://i.loli.net/2018/05/29/5b0d534fb41a8.png">
</p>

<p align="center">
  <a href="https://travis-ci.org/Sakuyakun/vue-eden">
    <img src="https://img.shields.io/travis/Sakuyakun/vue-eden.svg?style=flat-square" alt="GitHub release">
  </a>
  <a href="https://www.codacy.com/app/Sakuyakun/vue-eden?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Sakuyakun/vue-eden&amp;utm_campaign=Badge_Grade">
    <img src="https://img.shields.io/codacy/grade/7f511c51cd5b4f42bf930e2bbd187e3c.svg?style=flat-square">
  </a>
  <a href="https://github.com/Sakuyakun/vue-eden/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Sakuyakun/vue-eden.svg?style=flat-square" alt="license">
  </a>
</p>

vue-eden 是一个美观的后台管理系统模板，简称 Eden（伊甸园）。可进[预览页面](https://sakuyakun.github.io/vue-eden/)查看。主要使用了 vue 框架与 element-ui 组件库开发。Eden 在后台集成方面没有过于复杂，只包含了最基础和最常用的功能。也易移除模块，当做基础模板进行开发。项目选用了 Stylus 编写 CSS，因为我喜欢。Eden 基于 vue-cli3 构建环境进行开发，没有暴露 Webpack 配置文件而直接通过 vue.config.js 里进行配置更改，采用了 ESLint + Prettier 格式化。

![page1.png](https://i.loli.net/2018/05/27/5b0a3fb50dc2b.png)

![page2.png](https://i.loli.net/2018/05/27/5b0a3fbb7f9f5.png)

伊甸园拥有：

- [x] 舒适配色与布局
- [x] 权限控制
- [x] 动态路由
- [x] MOCK 数据
- [x] 登录登出
- [x] 界面锁定
- [x] 伸缩侧边栏
- [x] 自适应布局
- [x] 页面标签控制
- [x] 国际化多语言
- [x] 个人中心
- [ ] 截屏
- [ ] 文档

还有更多 ...

## 目录结构

一些说明：使用了 vue-svg-icon 组件，SVG 图标存放在 SVG 目录中。而主题色使用了官方推荐的[在线主题生成工具](https://elementui.github.io/theme-chalk-preview)生成的一套 css 直接在 main.js 中引入覆盖，当然你也可以通过修改使用其他方式动态更改主题色等。请求类选用了 axios，并且将请求方法逻辑分离存放在 api 目录下。

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
