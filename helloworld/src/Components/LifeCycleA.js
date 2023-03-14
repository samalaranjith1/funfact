import React, { Component } from 'react'
import LifeCycleB from '../LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ranjith'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
      console.log('LifeCycleA shouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('LifeCycleA componentDidUpdate')
    }
    changeState=()=>{
      this.setState({
        name:'Ranjith'
      })
    }
  render() {
    console.log('LifeCycleA render')
    return (
        <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA