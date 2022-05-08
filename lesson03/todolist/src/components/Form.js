import React, { Component } from 'react'

export default class form extends Component {
  state={todo:""}
  render() {
    // let val= this.props.todoEdit()
    // console.log(val)
  const todoOnChange =(e)=>{
   

      
      this.setState({todo:e.target.value})
      
   
    }
  





  const AddTodo=(e)=>{
      e.preventDefault()
      this.props.updateList(this.state.todo)
      this.setState({todo:""})
   

  }
  
  return (
    <div>

          <form onSubmit={AddTodo}>
              <span>Add a to-do</span> <br/>
        <input value={this.props.edited? this.props.edited:this.state.todo} onChange={todoOnChange} className='input' placeholder="ADD A TODO..."></input> <br/>
        <button type='submit'>Add</button>




          </form>
      </div>
    )
  }
}
