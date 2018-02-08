// init styles
import 'normalize.css'
import './stylesheets/index.styl'

// // react
import React from 'react'
import ReactDOM from 'react-dom'
import AppReact from './AppReact'
window.__dev = process.env.NODE_ENV === 'development'
if (window.__dev) {
  //只在开发模式启动热更新
  const { hot } = require('react-hot-loader')
  const AppHot = hot(module)(AppReact)
  ReactDOM.render(<AppHot />, document.getElementById('react'))
} else {
  ReactDOM.render(<AppReact />, document.getElementById('react'))
}


// // vue
import Vue from 'vue'
import AppVue from './AppVue'
new Vue({
  el: '#vue',
  components: { App: AppVue },
  template: '<App/>'
})


// 测试 socket 和 egg 通讯
// 请保证 egg 服务已启动
// 请保证 package.json 中的 proxy 和 egg 的端口一致

// let io = require('socket.io-client')
// let socket = io()
// socket.emit('chat', 'test prox')
// socket.on('chat', (res) => {
//   console.log(res)
// })
