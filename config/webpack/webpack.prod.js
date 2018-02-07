var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var react = require('./webpack.react.js')
var vue = require('./webpack.vue.js')
var lib = process.env.lib
let libs =  {react, vue}

module.exports = merge(libs[lib], {
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].chunk.[chunkhash].js',
    publicPath: '',
  },
  // devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      // sourceMap: true,
    }),
    new CleanWebpackPlugin(['*'], {
      root: path.resolve(__dirname, '../../public'),
      exclude: ['video'],
      verbose: true,
      dry: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
