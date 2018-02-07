var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    vendor: ['polyfill-exp','animejs', 'ramda','vue', 'vuex', 'vue-router'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // 指定公共 bundle 的名称。
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
})

