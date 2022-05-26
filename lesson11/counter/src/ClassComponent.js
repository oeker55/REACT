import React, { Component } from 'react'

export default class ClassComponent extends Component {
  state = {
    count:0,
    message: "",
    timer:0
  }
  componentDidMount() {
   
  this.myTimer = setInterval(() => {
    this.setState({timer : this.state.timer + 1})
  },1000 ); 
}
// componentDidMount() {
  
  
  //   console.log("cdm runned")
  
  // }
  componentDidUpdate(prevProps, prevState) {
    
    console.log("Timer :",this.state.timer)
  // console.log("cdu runned")
  
  }
  componentWillUnmount() {
    clearInterval(this.myTimer)
    
   }
  
  render() {
   
    
    const increase=()=>{
       this.setState({count : this.state.count + 1, message : "artırıldı" })
    }
    const Decrease=()=>{
      this.setState({count : this.state.count -1, messsage : "azaltıldı" })
     
   }
    return (
      <div>
        <h1>Class.Component</h1>
        <h2>Count : {this.state.count} </h2>
        <h2>Message: {this.state.message} </h2>
        <h2>{this.state.timer}</h2>
        <button onClick={()=>increase()}> Increase </button> <br/>
        <button onClick={()=>Decrease()}> Decrease </button>
        </div>
    )
  }
}
