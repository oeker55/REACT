import React, { Component } from 'react'

export default class StateSamp2 extends Component {
    state={name:"özgür"}
  render() {
      let {name} =this.state
      const changeName=()=>{
          this.setState({name:"öznur"})
      }
    return (
      <div>StateSamp2


          <button onClick={changeName}>+++</button> <br/>
          {name}
      </div>
    )
  }
}
