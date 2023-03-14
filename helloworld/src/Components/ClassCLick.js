import React, { Component } from 'react'

class ClassCLick extends Component {
    clickHandler(){
        console.log('Class click button clicked')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Classbuttonclick</button>
        </div>
    )
  }
}

export default ClassCLick