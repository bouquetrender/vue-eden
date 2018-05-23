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

vue-eden 是一个后台管理系统，简称 eden（伊甸园），主要使用了 vue 框架与 element-ui 组件库。目前正在开发中，预览页面即将完成。

![id](https://i.loli.net/2018/05/19/5aff9f7bdb36f.png)

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

## 结构

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
