项目停止维护于2018年11月16日

Vue Eden 是一个美观的后台管理系统/集成方案，简称伊甸园。Eden 在后台集成解决方案引入没有过于复杂，只包含最基础和最常用的功能。也易移除页面模块，当做基础样式模板进行开发。这使得理解 Eden 结构代码并修改都变得十分友好，代码有参考 vue-element-admin。

此项目主要使用了 vue、vuex、vue-router、element-ui、stylus 进行开发。并使用 ESLint 进行代码检查工具并配合 prettier 进行格式化，无需担心代码风格。而插件除了 echarts 外，没有引入另外的大型库。所以例如富文本编辑器、excel处理等等功能需自行添加。登陆页面参考 vue-manager，部分代码参考 vue-element-admin。

可以进[预览页面](https://vedimension.github.io/vue-eden/)


### 目录结构

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
