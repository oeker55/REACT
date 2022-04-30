import React, { Component } from "react";
import Form from "./Form.js";
import List from "./List.js";
import "./List.css"
export default class Contact extends Component {
  state={ contacts:[ 
    
      
      
      
      {name:"Name1",phone:"123456780"},
      {name:"Name2",phone:"123456781"},
      {name:"Name3",phone:"123456782"},
      {name:"Name4",phone:"123456783"},
      {name:"Name5",phone:"123456784"},
      {name:"Name6",phone:"123456784"},
      
      
    
    ]
    
  }
  render() {
    const updateState =(data)=>{
      // this.setState({name:val1,phone:val2})
      this.state.contacts.push(data)
      this.setState({contacts:this.state.contacts})
    
      console.log(this.state.contacts)
    }
    return <div>
        <h1>Contacts</h1>
        <div className="container">

        <List contacts={this.state.contacts}/>
        <Form updateState={updateState}/>
        </div>
    </div>;
  }

}