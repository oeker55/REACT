import BlogItem from "./BlogItem";
import SampConstructor from "./SampConstructor";

import React, { Component } from "react";
import EventDataBind from "./EventDataBind";
import StateSample from "./StateSample";

export default class Blog extends Component {
  render() {
    // let name = "özgür";
    // let age = 28;
    // let person = { id: 1, lang: "english" };

    return (
      <div>
        Blog
        <StateSample/>
        {/* <BlogItem name={name} age={age} user={person} birth={"1996"} />
        <SampConstructor name={name} age={age} user={person} birth={"1996"} />
        <EventDataBind /> */}
      </div>
    );
  }
}
