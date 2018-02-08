import 'normalize.css'
import './stylesheets/index.styl'

// // react
// import React from 'react'
// import ReactDOM from 'react-dom'
// import AppReact from './AppReact'
// ReactDOM.render(<AppReact />, document.getElementById('react'))

// // vue
import Vue from 'vue'
import AppVue from './AppVue'
new Vue({
  el: '#vue',
  components: { App:AppVue },
  template: '<App/>'
})

