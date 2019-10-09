/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 16:00:08
 * @LastEditTime: 2019-09-29 13:21:10
 * @LastEditors: Please set LastEditors
 */

const webpack = require('webpack');
// const path = require('path');
module.exports = {
  //基本路径
  publicPath: './',
  //输出文件目录
  outputDir: 'dist',
  //静态资源输出目录
  assetsDir: '',
  indexPath: 'index.html',
  //是否使用eslint
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 9090,
    //是否使用https
    https: false,
    //是否自动启动浏览器
    open: true,
    // 配置多个代理
    /* "/api": {
      target: "1111.111:8080",
      ws: true,
      changeOrigin: true,
      pathRewrite:{
        "^/api": ''
      }
    } */
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  }
}
