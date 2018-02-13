import 'polyfill-exp'
import React from 'react'
import axios from 'axios'
import { hotRender } from '~/utils'

class App extends React.Component {
  render() {
    return <div >
      <div>Hello React</div>
      <div style={{
        backgroundImage: 'url(assets/img.jpg)',
        backgroundSize: 'contain',
        width: 100, height: 100
      }} ></div>
    </div>
  }
}

hotRender(App)