let io = require('socket.io-client')

// 创建一个socket实例
let socket = io()

// 发送消息
socket.emit('chat', 'test prox')

// 坚挺消息
socket.on('chat', (res) => {
  console.log(res)
})
