import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./top.css";

import logo from "../../assets/website_imgs/logo.PNG"
import { Navbar } from 'react-bootstrap';

class Top extends Component { 
    render() {
      return (
          <React.Fragment>
            {/* <nav className = "top_bar">
              <a href="#">
                <img src={logo} className="logo"></img>
              </a>
            </nav> */}
            <Navbar bg="light">
              <img src={logo} className="logo"></img>
            </Navbar>
          </React.Fragment>
      );
    }
  }
  
  export default Top;