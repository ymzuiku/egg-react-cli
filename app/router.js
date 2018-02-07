const { $app } = require('egg-imports')
module.exports = (app = $app) => {
  const { router, controller, io } = app
  // static
  router.redirect('/', '/index.html', 302)

  // http
  router.get('/api/home/index', controller.home.index)

  // socket
  io.route('chat', io.controller.chat.index)
}
 