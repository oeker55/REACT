import React, { Component } from "react";
import BlogItem1 from "./BlogItem1";

export default class Blog extends Component {
  render() {
    let isimler = ["Ali", "Ahmet", "Mehmet"];
    return (
      <div className="Blog">
        <h1>Blog Js Title</h1>
        {/*
            <BlogItem1 description="Merhaba from Blog JS" />
        <BlogItem1 name="Özgür " />
        
        <BlogItem1 surname=" Eker" />
        */}
        {isimler.map((item) => {
          //  <h1>{item}</h1>
          //console.log(item)
          //console.log(i)
         return console.log(item);
        })}
      </div>
    );
  }
}
