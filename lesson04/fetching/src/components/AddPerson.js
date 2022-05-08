import axios from 'axios'
import React, { Component } from 'react'
import API from "../api.js"

export default class AddPerson extends Component {
    state={name:""}
  render() {
    const  inputOnChange=(e)=>{
          this.setState({name:e.target.value})
      }
      const formOnSbmit=(e)=>{
          e.preventDefault();
          const user ={name: this.state.name}
          API.post("users",user)
          .then(res=>console.log(res))
          
console.log(this.state.name)



      }
    return (
        <div>
            <form onSubmit={formOnSbmit}>

        <hr/>
            AddPerson<br/><br/>
           <label>Person Name :
              <input onChange={inputOnChange} id='name' name='name' value={this.state.name}></input>
          </label>
            <button type='submit'>Add</button>
            </form>
      </div>
    )
  }
}
