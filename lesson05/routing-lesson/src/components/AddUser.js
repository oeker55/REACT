import axios from 'axios'
import React, { Component } from 'react'




export default class AddUser extends Component {
    state={name:""}
   
  render() {
     const inputOnChange=(e)=>{
         
         this.setState({name: e.target.value})


      }
      const  formOnSubmit=(e)=>{
        e.preventDefault()
        const user ={name : this.state.name}
          axios.post("https://jsonplaceholder.typicode.com/users", user)
          .then(res => console.log(res ))

      }
    return (
      <div>
          <form onSubmit={formOnSubmit}>

         <label> Add a User

          <input onChange={inputOnChange} id='name' name='name' value={this.state.name}></input>
         </label>
         <button type='submit'> Add</button>

          </form>



      </div>
    )
  }
}
