import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

const Comp = observer(class Comp extends React.Component{
  obs = observable({
    age:100
  })
  constructor(props){
    super(props)
    setInterval(()=>{
      this.obs.age ++
    },1000)
  }
  render(){
    return <div>comp:{this.obs.age}</div>
  }
})

class App extends React.Component {
  render() {
    return <div className='box' >
      <div>Hello React</div>
      <Comp></Comp>
      <div className='img' ></div>
    </div>
  }
}
export default App
