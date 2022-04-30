import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export default class contact extends Component {
    state={todo:["yemek ye","ders çalış","top oyna","alışveriş yap","müzik dinle","kitap oku","bisiklet sür"]}
  render() {
      const updateList=(newtodo)=>{
          this.state.todo.push(newtodo)
          this.setState({todo:this.state.todo})

      }
    return (
      <div>
      
          <List todo={this.state.todo}/>
          <Form updateList={updateList}/>
      </div>
    )
  }
}
