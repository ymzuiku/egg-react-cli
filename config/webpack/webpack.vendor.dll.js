const path = require('path');  
const webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let def = ['polyfill-exp','animejs', 'ramda']
let react = ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react', 'react-motion']
let vue = ['vue', 'vuex', 'vue-router']
var dll = process.env.dll || 'def'
let dlls =  {
  def:def,
  react:[...def, ...react],
  vue:[...def, ...vue],
}


module.exports = {  
  entry: {
    vendor: dlls[dll]
  },
  output: {
    path: path.join(__dirname, '../', '../', '/client/static'),
    filename: '[name].dll.js',
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
      path: path.join(__dirname, '../', '../', '/client/static/[name]-manifest.json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。 
       */
      name: '[name]_library'
    }),
  ]
};