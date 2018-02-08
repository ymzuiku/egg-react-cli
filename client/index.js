// 初始化样式
import 'normalize.css'
import './stylesheets/index.styl'

// // react
import React from 'react'
import ReactDOM from 'react-dom'
import AppReact from './AppReact'
ReactDOM.render(<AppReact />, document.getElementById('react'))

// // vue
import Vue from 'vue'
import AppVue from './AppVue'
new Vue({
  el: '#vue',
  components: { App:AppVue },
  template: '<App/>'
})

// 测试 socket 和 egg 通讯
// 请保证package.json 中的 proxy和egg的端口一致
// let io = require('socket.io-client')
// let socket = io()
// socket.emit('chat', 'test prox')
// socket.on('chat', (res)=>{
//   console.log(res)
// })