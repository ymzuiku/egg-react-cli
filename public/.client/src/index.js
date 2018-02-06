import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.styl'
import registerServiceWorker from './utils/registerServiceWorker'
import io from 'socket.io-client'

let socket = io()
socket.on('chat', (res)=>{
  console.log(res)
})
socket.emit('chat', 'hello egg')


class App extends React.Component {
  render(){
    return <div>hello react</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
