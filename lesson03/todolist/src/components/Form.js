import React, { Component } from 'react'

export default class form extends Component {
    state={todo:""}
  render() {
  const todoOnChange =(e)=>{
      this.setState({todo:e.target.value})
      console.log(this.state.todo)

  }
  const AddTodo=(e)=>{
      e.preventDefault()
      this.props.updateList(this.state.todo)

  }
    return (
      <div>

          <form onSubmit={AddTodo}>
              <span>Add a to-do</span> <br/>
        <input onChange={todoOnChange} className='input' placeholder="ADD A TODO..."></input> <br/>
        <button type='submit'>Add</button>




          </form>
      </div>
    )
  }
}
