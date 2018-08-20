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

<p align="center">
  <a href="https://sakuyakun.github.io/vue-eden/">预览页面</a> | <a href="https://Sakuyakun.github.io/eden-docs">说明文档</a>
</p>

vue-eden 是一个美观的后台管理系统模板，简称 Eden（伊甸园）。主要使用了 vue 框架与 element-ui 组件库开发。Eden 在后台集成方面没有过于复杂，只包含了最基础和最常用的功能。也易移除模块，当做基础模板进行开发。登陆页参考 vue-manager。

![1.png](https://i.loli.net/2018/06/03/5b1365a26a871.png)

![3.png](https://i.loli.net/2018/06/03/5b1366ea9f49c.png)

![2.png](https://i.loli.net/2018/06/03/5b1365a1571ae.png)

![4.png](https://i.loli.net/2018/06/03/5b13659e29118.png)

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

还有更多 ...

## 目录结构

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
