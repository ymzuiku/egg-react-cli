// init styles
import 'normalize.css'
import '../stylesheets/index.styl'

// // react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
window.__dev = process.env.NODE_ENV === 'development'
if (window.__dev) {
  //只在开发模式启动热更新
  const { hot } = require('react-hot-loader')
  const AppHot = hot(module)(App)
  ReactDOM.render(<AppHot />, document.getElementById('react'))
} else {
  ReactDOM.render(<App />, document.getElementById('react'))
}