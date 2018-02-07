var webpack = require('webpack')
var merge = require('webpack-merge')
var react = require('./webpack.react.js')
var vue = require('./webpack.vue.js')
var lib = process.env.lib
console.log(lib)
let libs =  {react, vue}
module.exports = merge(libs[lib], {
  devtool: 'inline-source-map',
  output: {
    publicPath: '',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
})

