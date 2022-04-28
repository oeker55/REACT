import React, { Component } from 'react'

export default class StateSample extends Component {
state={name: "hagi"} 
render() {

    let {name} = this.state
   const changeState=()=>{
     if(name==="hagi")
      this.setState({name:"popescu"})
      else{
        this.setState({name:"hagi"})
      }
      
    }
    return (
      <div>StateSample <br/>
     <button onClick={changeState}>+</button><br/>
      {name}
      </div>
    )
  }
}
