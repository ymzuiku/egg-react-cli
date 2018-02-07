import './stylesheets/index.styl'
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#root',
  components: { App },
  template: '<App/>'
})

/*
// react
const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./App.js')
ReactDOM.render(<App></App>, document.getElementById('root'))

// vue
const Vue = require('vue')
const App = require('./App.vue')
new Vue({
  el: '#root',
  components: { App },
  template: '<App/>'
})
*/

