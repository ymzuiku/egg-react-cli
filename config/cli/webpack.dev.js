function host() {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}
let nowHost = host()

var client = process.env.client  || 'native'
if(process.env.c) {
  client = process.env.c
}

var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var common = require('./webpack.common.js')
var package = require('../../package.json')
var clientPath =  path.resolve(__dirname, `../../client-${client}/`)
var port = process.env.port || package.port
// console.log(`{client:${client}, path:${clientPath}}`)

var ignoreHost = [
  'http://0.0.0.0:' + port,
  'http://127.0.0.1:' + port,
  'http://localhost:' + port,
]
if (package.proxy['/']) {
  ignoreHost.map((v)=>{
    if(package.proxy['/'].target === v) {
      // console.log('约定，当 proxy 的端口和 prot 一致时，不启用代理')
      package.proxy['/'] = {}
    }
  })
}

console.log(`http://${nowHost}:${port}/`)

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: nowHost,
    port: port,
    proxy: {
      ...package.proxy,
    },
    compress: false,
    quiet: false, //控制台中输出打包的信息
    hot: true, //开启热点
    inline: true, //开启页面自动刷新
    stats: "errors-only",
    noInfo:true,
    contentBase: clientPath,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),    
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        exclude: function (path) {
          // 路径中含有 node_modules 的就不去解析。
          var isNpmModule = !!path.match(/node_modules/) || !!path.match(/assets/)
          return isNpmModule;
        },
        loader: 'babel-loader',
        query: {
          presets: ['react', "es2015", "stage-0", "env","react-native"],
          plugins: ["transform-class-properties", "react-hot-loader/babel"]
        }
      }
    ]
  },
  stats: "errors-only",
})

