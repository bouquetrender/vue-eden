// https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/config.md
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: true,

  // 调整内部的 webpack 配置
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  configureWebpack: {},
  chainWebpack: config => {
    // https://github.com/mozilla-neutrino/webpack-chain#getting-started
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
  },

  productionSourceMap: true,
  // CSS 相关选项
  css: {
    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {}
  },

  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8863,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null // string | Object
  }
}
