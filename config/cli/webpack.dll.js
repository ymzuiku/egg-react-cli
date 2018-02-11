var client = process.env.client  || 'native'
if(process.env.c) {
  client = process.env.c
}
const R = require('ramda')
const fse = require('fs-extra')
const path = require('path');
const webpack = require('webpack');
var package = require('../../package.json')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var dll = package.dll
let dllAny = dll.any || []
let dllClient = dll[client] || []
let dllEnd=  R.uniq([...dllAny, ...dllClient])
console.log('packing dll: ',dllEnd)

module.exports = {
  entry: {
    dll: dllEnd
  },
  output: {
    path: path.join(__dirname, '../', '../', `/client-${client}/assets/dll`),
    filename: '[name].js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]_library'
  },
  plugins: [
    new UglifyJSPlugin({
      // sourceMap: true,
    }),
    new webpack.DllPlugin({
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(__dirname, '../', '../', `/client-${client}/assets/dll/[name]-manifest.json`),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。 
       */
      name: '[name]_library'
    }),
  ]
};