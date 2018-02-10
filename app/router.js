const { $app } = require('egg-imports')
module.exports = (app = $app) => {
  const { router, controller, io } = app
  // static
  router.redirect('/', '/react/index.html', 302)
  router.redirect('/react', '/react/index.html', 302)
  router.redirect('/vue', '/vue/index.html', 302)

  // http
  router.get('/api/home/index', controller.home.index)

  // socket
  io.route('chat', io.controller.chat.index)
}
 