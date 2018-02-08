// 测试 socket 和 egg 通讯
// 请保证 egg 服务已启动
// 请保证 package.json 中的 proxy 和 egg 的端口一致

let io = require('socket.io-client')

// 创建一个socket实例
let socket = io()

// 发送消息
socket.emit('chat', 'test prox')

// 坚挺消息
socket.on('chat', (res) => {
  console.log(res)
})
