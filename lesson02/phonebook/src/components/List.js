import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.contacts)}
        <input
          className="filter-input"
          name="filter"
          id="filter"
          placeholder="Filter by Name or Phone..."
        ></input>
        <ul className="list-field">
          {this.props.contacts.map((item,index) => {
            return (
              <li key={index}>
                <span className="name">{item.name}</span>
                <span className="phone">{item.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
