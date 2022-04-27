import React, { Component } from 'react'

export default class SampComp1 extends Component {
    constructor(props) {
      super(props)
        console.log("merhaba constructor")
      console.log(props.name)
     
    }
  render() {
    
    return (
      <div>SampComp1</div>
    )
  }
}
