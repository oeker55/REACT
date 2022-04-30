import React, { Component } from "react";
import "./List.css"

export default class List extends Component {
  render() {
    let { todo } = this.props;
    return (
      <div>
          <h1>TO-DO LİST</h1> <br/>
          <input className="input" placeholder="FİLTER TODO'S..."></input>
        <ul className="todo-list">
                {todo.map(item=>{
                  return(  <li className="todo">
                      {item} </li>
                  ) 
                })}
            
            
        
        </ul>
      </div>
    );
  }
}
