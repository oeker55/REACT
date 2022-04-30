import React, { Component } from "react";
import "./List.css";
export default class Form extends Component {
  state = { name: "", phone: ""};
  render() {
  
    const addData= (e) => {
      this.setState({ [e.target.name]: e.target.value });
      };
     const addContact=(e)=>{
       e.preventDefault();
      if(this.state.name&&this.state.phone){


        this.props.updateState({...this.state})
        this.setState({name:'',phone:''})
      }else{
        alert("name or phone area is blank !!!  ")
      }
      }
    return (
      <div>
        Add a new Phone..
        <form onSubmit={addContact} className="list-field-form">
          <input
          value={this.state.name}
            onChange={addData}
            className="filter-input "
            name="name"
            id="name"
            placeholder="Enter a name..."
          ></input>{" "}
          <br />
          <input
          value={this.state.phone}
            onChange={addData}
            className="filter-input"
            name="phone"
            id="phone"
            placeholder="Enter a phone number..."
          ></input>{" "}
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
// value={this.state.name}
// value={this.state.phone}
