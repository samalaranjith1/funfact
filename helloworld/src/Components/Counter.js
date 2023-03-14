import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
       /* this.setState({
            count: this.state.count+1

        },()=>{console.log('Callback value',this.state.count)})
        */
       this.setState(prevState =>({
        count:prevState.count+1
       }))
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        },()=>{
            console.log('Callback value',this.state.count)
    }
    )
    }
    reset(){
        this.setState({
            count:0
        },()=>{console.log('Callback value',this.state.count)})
    }
    incrementby5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
  render() {
    return (
        <div><div>Counter {this.state.count}</div>
        <button onClick={ () => this.increment()}>Increment</button>
        <button onClick={()=>this.decrement()}>Decrement</button>
        <button onClick={()=>this.reset()}>Reset</button>
        <button onClick={()=>this.incrementby5()}>Increment by 5</button>

        </div>
      
    )
  }
}

export default Counter