import React, { Component } from 'react'

export default class EventDataBind extends Component {
    onclick1(){

        console.log("butona basıldı")
        
        }

//Arrow function'ı renderin içinde tanımamalıyım ve kullanılırken "this" dememe gerek kalmıyor.

  render() {
    const clickFunc = () => {

        console.log("butona basıldı arrow Func")
    }
    
    return (
      <div>
        EventDataBind{}
          <br/>

<button onClick={this.onclick1}>KAYDET</button>
<button onClick={clickFunc}>Arrow</button>

      </div>
    )
  }
}
