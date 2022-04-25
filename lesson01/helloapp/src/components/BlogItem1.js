import React, { Component } from "react";

export default class BlogItem1 extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="BlogItem1">
        Blog Item 1
        <br />
        DESCRIPTION PROPS :{this.props.description} <hr/>
        NAME PROPS : {this.props.name}<hr/>
        SURNAME PROPS : {this.props.surname}<hr/>
      </div>
    );
  }
}
