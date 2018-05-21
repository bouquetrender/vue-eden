// https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/config.md
const path = require('path')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: true,

  // 调整内部的 webpack 配置
  // ttps://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
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

    //config.when(process.env.NODE_ENV === 'production', config =>
    //  config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
    //)
  },

  productionSourceMap: true,
  // CSS 相关选项
  css: {
    // 是否开启 CSS source map？
    sourceMap: false
  },

  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8863,
    https: false,
    hotOnly: false,
    proxy: null // string | Object
  }
}
