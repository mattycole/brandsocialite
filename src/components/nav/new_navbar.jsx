import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUserAlt, faRing, faBuilding } from "@fortawesome/free-solid-svg-icons";

import "./new_navbar.css"
import NavLogo from "../../assets/website_imgs/transparent_logo.png"

class NavBar extends Component { 
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a href="#"><img href="#" src={NavLogo} className="menu_logo"/></a>
        <a href="#/talent" className="links"><FontAwesomeIcon icon={faRing}/><span> Talent</span></a>
        <a href="#/brands" className="links"><FontAwesomeIcon icon={faBuilding}/><span> Brands</span></a>
        <a href="#/create" className="links"><FontAwesomeIcon icon={faUserCircle}/><span> Join Socialite</span></a>
        <a href="#/login" className="links"><FontAwesomeIcon icon={faUserAlt}/><span> Login</span></a>
      </Menu>
    );
  }
}

export default NavBar;