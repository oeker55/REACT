
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {Container, Image, Menu} from "semantic-ui-react";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelper";



export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };
  
  render() {
    const { menuFixed} = this.state;
    return (
        <Menu
    borderless
    fixed={menuFixed ? "top" : undefined}
    style={menuFixed ? fixedMenuStyle : menuStyle}>

    <Container text>
      <Menu.Item>
        <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>
      <Menu.Item header>MovieApp</Menu.Item>
      <Menu.Item as={Link} to="/" >Home Page</Menu.Item>
      <Menu.Item as={Link} to="movies" >Movies</Menu.Item>

      <Menu.Menu position="right">
        
      </Menu.Menu>
    </Container>
  </Menu>
    )
  }
}
