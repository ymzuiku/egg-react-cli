var webpack = require('webpack')
var merge = require('webpack-merge')
var common = require('./webpack.common.js')
module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devtool:'cheap-module-eval-source-map',
  output: {
    publicPath: '',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
})

