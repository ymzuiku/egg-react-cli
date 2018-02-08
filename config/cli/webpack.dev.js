var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var common = require('./webpack.common.js')
var package = require('../../package.json')

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

var ignoreHost = [
  'http://0.0.0.0:' + package.port,
  'http://127.0.0.1:' + package.port,
  'http://localhost:' + package.port,
]
if (package.proxy['/']) {
  ignoreHost.map((v)=>{
    if(package.proxy['/'].target === v) {
      console.log('约定，当 proxy 的端口和 prot 一致时，不启用代理')
      package.proxy['/'] = {}
    }
  })
}

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: host(),
    port: package.port,
    proxy: {
      ...package.proxy,
    },
    compress: false,
    quiet: false, //控制台中不输出打包的信息
    hot: true, //开启热点
    inline: true, //开启页面自动刷新
    stats: "errors-only",
    noInfo:true,
    contentBase: path.resolve(__dirname, '../../client/'),
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
          var isNpmModule = !!path.match(/node_modules/) || !!path.match(/static/)
          return isNpmModule;
        },
        loader: 'babel-loader',
        query: {
          presets: ['react', "es2015", "stage-0", "env",],
          plugins: ["transform-class-properties", "react-hot-loader/babel"]
        }
      }
    ]
  },
  stats: "errors-only",
})

