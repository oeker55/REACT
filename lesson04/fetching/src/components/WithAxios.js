import React, { Component } from "react";
import axios from "axios";

export default class WithAxios extends Component {
  state = { users: [],error:null };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((res) => this.setState({ users: res.data }))
      .catch(err=>this.setState({error:err}))
  }
  render() {
    const { users, error } = this.state;
    console.log(users);
    return (
      <div>
        WithAxios
        <ul>
            {error == null ? users.map(person=>{
               return <li key={person.id}>{person.name}</li>
            }):
            <h2>hata</h2>}
        </ul>
      </div>
    );
  }
}
