import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

export default class contact extends Component {
  state = {
    todo: [
      "yemek ye",
      "ders çalış",
      "top oyna",
      "alışveriş yap",
      "müzik dinle",
      "kitap oku",
      "bisiklet sür",
    ],edited:""
  };
  render() {
    const updateList = (newtodo) => {
      this.state.todo.push(newtodo);
      this.setState({ todo: this.state.todo });
    };
    const todoEdit = (deletedTodoContent) => {
      this.setState({
        todo: this.state.todo.filter((item) => item !== deletedTodoContent),
        edited:deletedTodoContent
        
      });
      console.log(this.state.edited)

    
    };
    const todoDelete = (deletedTodoContent) => {
      this.setState({
        todo: this.state.todo.filter((item) => item !== deletedTodoContent),
      });
    };
   
    return (
      <div>
        
        <List
          todo={this.state.todo}
          todoDelete={todoDelete}
          todoEdit={todoEdit}
        />
        <Form
          updateList={updateList}
     
        
          edited={this.state.edited}
        />
       
      </div>
    );
  }
}
