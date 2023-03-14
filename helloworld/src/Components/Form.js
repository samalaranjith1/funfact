import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:'',
         topic:'react'
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            userName:event.target.value
        },console.log(this.state.userName))
 
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
    }
  render() {
    const {userName,comments,topic}=this.state
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <div>
        <label>Username</label>
        <input type='text' 
        value={this.state.userName} 
        onChange={this.handleUsernameChange}>
        </input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} 
            onChange={this.handleCommentsChange}>
            </textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
        </div>

            <button type='submit'>Submit</button>

      </div>
      </form>

    )
  }
}

export default Form