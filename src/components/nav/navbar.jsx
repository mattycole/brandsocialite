import React, { Component } from 'react';
import { Row, Container } from "reactstrap";

//import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'


import "./navbar.css";

import NavLogo from "../../assets/website_imgs/flat_logo.PNG"

import Home from "../pages/home.js"
import Professional from "../pages/talent.js"
import Business from "../pages/brands.js"

class NavBar extends Component { 
    render() {
      return (
        <div>
        <nav class="menu">
            <img src={NavLogo} className="menu_logo"></img>


            <div class="menu__right">
                <ul class="menu__list">
                    <li class="menu__list-item"><a class="menu__link menu__link--active" href="#">Home</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="#/talent">Talent</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="#/brands">Brands</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
      );
    }
  }
  
  export default NavBar;