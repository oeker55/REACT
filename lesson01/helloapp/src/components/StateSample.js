import React, { Component } from "react";

export default class StateSample extends Component {
  constructor(props) {
    super(props);
    console.log("constructor çalıştı");

    // this.state = {
    //     name: "emma",
    //     age:"24"

    // }
  
}
  state = {
    name: "tommy",
    age: 25,
    count: 0
  }

render() {
      
     const counter=()=>{
        this.setState({count:Math.floor(Math.random()*4)})
      }
    return (
      <div>
        StateSample <hr />
        {/* {this.state.name} <br />
        {this.state.age}<br/>*/}
        
        <button onClick={counter}>+</button> <br/>
      count=  {this.state.count}
      </div>
    );
  }
}
