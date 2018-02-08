var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var common = require('./webpack.common.js')
var package = require('../../package.json')
var proxy = {}
let proxyPort = package.proxy.split(':')[2]
if (proxyPort != package.port) {
  proxy = {
    proxy: {
      '/': {
        target: package.proxy,
        secure: false
      }
    },
  }
  console.log('开启代理：'+package.proxy)
} else {
  console.log('不开启代理')
}
module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '',
  },
  devServer: {
    port: package.port,
    ...proxy,
    // historyApiFallback: true,
    quiet: false, //控制台中不输出打包的信息
    // hot: true, //开启热点
    // inline: true, //开启页面自动刷新
    contentBase: path.resolve(__dirname, '../../public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  stats: "errors-only",
})

