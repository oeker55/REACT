import axios from 'axios'
import React, { Component } from 'react'

export default class List extends Component {
    state={userlist:[]}
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> this.setState({userlist : res.data}))

    }
  render() {
      console.log(this.state.userlist)
    return (
      <div>
          <ul>
          {this.state.userlist.map(element => <li key={element.id} style={{listStyle:"none",margin:"5px",fontFamily:"arial"}}> {element.name}--{element.email}</li>)}
          </ul>
      </div>
    )
  }
}
