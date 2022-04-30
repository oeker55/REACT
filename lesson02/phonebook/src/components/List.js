import React, { Component } from "react";
import PropTypes from "prop-types";
import "./List.css";

export default class List extends Component {
  state = { filterText: "" };
  static propTypes = { contacts: PropTypes.array.isRequired };
  render() {
    const onChangeFilter = (e) => {
      this.setState({ filterText: e.target.value });
      console.log(this.state.filterText);
    };
    const filtered = this.props.contacts.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase())!== -1 ||
        item.phone.toLowerCase().indexOf(this.state.filterText.toLowerCase())!== -1
      );
    });

    return (
      <div>
        <input
          onChange={onChangeFilter}
          className="filter-input"
          name="filter"
          id="filter"
          placeholder="Filter by Name or Phone..."
        ></input>
        <ul className="list-field">
          {filtered.map((item, index) => {
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
