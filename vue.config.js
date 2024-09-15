// const path = require('path')
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
  */
  productionSourceMap: false,
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 从 Vue CLI 3.3 起baseUrl已弃用，请使用publicPath
  // 输出文件目录
  outputDir: 'kina-pc',
  // assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      '/api': {
        //target: 'https://api.CALFEX.me/', //线上CALFEX',
        target: 'https://api.calfex.io/', //线上CALFEX',
        // target: 'http://192.168.1.24:8760/', //本地测试',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
    
      sass: {
        prependData: `@import "@/assets/scss/style.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 192
          }),
        ],
      },
    },
  },


  
  pluginOptions: {},
};