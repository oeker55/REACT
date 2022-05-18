import "./App.css";
import MoviesPage from "./components/pages/MoviesPage";
import Header from "./components/Header";
import {Routes, Route } from "react-router-dom";

import React, { Component } from "react";

import {Container,} from "semantic-ui-react";
import Footer from "./components/Footer";


export default class App extends Component {
  
  
  
  
  render() {
    

    return (
      <div>
       
         
       <Header/>

        <Container text>
          App Comp... <hr />
          
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
       
         
        </Container>

       <Footer/>
      </div>
    );
  }
}
