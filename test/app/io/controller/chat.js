const { Controller } = require('egg-imports')
module.exports = class extends Controller {
  async index() {
    const data = this.ctx.args[0]  // 使用读取io数据
    console.log('on connect:', data)
    this.ctx.socket.emit('chat', 'egg说: hello react')  //使用socket.emit回传数据
  }
}