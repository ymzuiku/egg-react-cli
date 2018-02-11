var client = process.env.client  || 'native'
if(process.env.c) {
  client = process.env.c
}

var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var common = require('./webpack.common.js')

const fse = require('fs-extra')
fse.copy(
  path.resolve(__dirname, `../../client-${client}/assets`),
  path.resolve(__dirname, `../../public/${client}/assets`))
  .then(() => { })
  .catch(err => console.error(err))

module.exports = merge(common, {
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
    root: path.resolve(__dirname, `../../public/${client}`),
      exclude: ['video'],
      verbose: true,
      dry: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
