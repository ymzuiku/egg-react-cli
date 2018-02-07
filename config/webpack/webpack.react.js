var webpack = require('webpack')
var merge = require('webpack-merge')
var common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    vendor: ['polyfill-exp','animejs', 'ramda','react', 'react-dom', 'react-router', 'mobx', 'mobx-react', 'react-motion'],
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

