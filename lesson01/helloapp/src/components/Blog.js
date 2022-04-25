import React, { Component } from "react";
import BlogTitle from "./BlogTitle";

export default class Blog extends Component {
  render() {
    return (
      <div description="Merhaba" className="blog">
        <h1>Blog Test</h1>
        <BlogTitle />
      </div>
    );
  }
}
