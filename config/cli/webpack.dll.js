const fse = require('fs-extra')
const path = require('path');
const webpack = require('webpack');
var package = require('../../package.json')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var client = process.env.client || 'react'


let def = ["polyfill-exp", "animejs", "ramda", "underscore"]
let react = ["react", "react-dom", "react-router"]
let reactAll = ["react", "react-dom", "react-router-dom", "mobx", "mobx-react", "styled-components", "polished"]
let vue = ["vue", "vuex", "vue-router"]

var dll = process.env.dll || 'package'
let dlls = {
  package: package.dll,
  def:def,
  react: [...def, ...react],
  vue: [...def, ...vue],
  all: [...def, ...vue, ...react],
}

module.exports = {
  entry: {
    dll: dlls[dll]
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