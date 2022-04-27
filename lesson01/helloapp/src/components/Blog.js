import BlogItem from './BlogItem'

import React, { Component } from 'react'

export default class Blog extends Component {
  render(){
    let name ="özgür"
    let age = 28;
    let person ={id:"1", lang:"english"}

    return (
      <div>Blog
          <BlogItem name={name} age={age} user={person}  />
      </div>
    )
  }
}
