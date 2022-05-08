import React, { Component } from "react";
import "./List.css"

export default class List extends Component {
  state={filterText:""}
  render() {
    let { todo } = this.props;
    const filter=(e)=>{

this.setState({filterText:e.target.value})      
    }
    const filteredList =todo.filter(item=>{
      return(

        item.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
        )


    })
    // const deleter =(e)=>{
    //   let deletedTodoContent =e.target.parentElement.firstChild.innerText ;
    //   console.log(e.target.parentElement.firstChild.innerText)
    //   this.props.todoDelete(deletedTodoContent)
    // }
    // const editor=(e)=>{
    //   let deletedTodoContent = e.target.parentElement.firstChild.innerText
      
    //   return deletedTodoContent;
       
    // }
   
    return (
      <div>
          <h1>TO-DO LİST</h1> <br/>
          <input value={this.state.todo} onChange={filter} className="input" placeholder="FİLTER TODO'S..."></input>
        <ul className="todo-list">
                {filteredList.map((item,index)=>{
                  return(  <li key={index} className="todo"><span className="todo"> {item}</span><span className="edit-Btn" onClick={()=>this.props.todoEdit(item)}>edit</span>
                      <span className="delete-Btn" onClick={()=>this.props.todoDelete(item)}>SİL</span> </li>
                  ) 
                })}
            
            
        
        </ul>
      </div>
    );
  }
}
