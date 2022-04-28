import React, { Component } from 'react'

export default class SampleCounter extends Component {
state = {num:0}

render() {
    let {num} = this.state
    const incrementState=()=>{
        this.setState({num:num+1})
    }
    const decrementState=()=>{
        this.setState({num:num-1})
    }
    return (
      <div>SampleCounter<br/>

          <button onClick={incrementState}>+</button> 
          <button style={{marginLeft:"5px"}} onClick={decrementState}>-</button> <br/>
          {num}
      </div>
    )
  }
}
