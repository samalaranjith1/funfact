import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      //this.clickhandler =this.clickhandler.bind(this)
    }
    /*clickhandler(){
        this.setState({
            message:'Goodbye'
        })
    }*/
    clickhandler =()=>{
        this.setState({
            message:'Goodbye'
        })
    }
  render() {
    return (
        <div>
      <div>{this.state.message}</div>
      {/*<button onClick={this.clickhandler.bind(this)}>Clickme</button>*/}
      {/*<button onClick={()=>this.clickhandler()}>Clickme</button>*/}
      <button onClick={this.clickhandler}>CLickme</button>
      </div>
    )
  }
}

export default EventBind