import React, { Component } from 'react';
import { Row, Container } from "reactstrap";

//import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'


import "./navbar.css";

import Logo from "../../assets/website_imgs/logo.PNG"

import Home from "../pages/home.js"
import Professional from "../pages/professional.js"
import Business from "../pages/business.js"

class NavBar extends Component { 
    render() {
      return (
        <div class="container center">
        <nav class="menu">
            <img src={Logo} className="menu_logo"></img>


            <div class="menu__right">
                <ul class="menu__list">
                    <li class="menu__list-item"><a class="menu__link menu__link--active" href="#">Home</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="#">Professional</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="#">Business</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
      );
    }
  }
  
  export default NavBar;