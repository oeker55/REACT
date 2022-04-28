import React, { Component } from 'react'
import './List.css'
export default class Form extends Component {
  render() {
    return (
      <div>
          Add a new Phone..
          <form className='list-field-form'> 

<input className='filter-input ' name='name' id='name' placeholder='Enter a name...'></input> <br/>
<input className='filter-input' name='phone' id='phone' placeholder='Enter a phone number...'></input> <br/>
<button>Add</button>
          </form>
      </div>
    )
  }
}
