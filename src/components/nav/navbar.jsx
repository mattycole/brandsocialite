import React, { Component } from 'react';

import "./navbar.css";

import NavLogo from "../../assets/website_imgs/nav_bar_logo.PNG"

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
                      <li class="menu__list-item"><a class="menu__link" href="#/create">Join Socialite</a></li>
                      <li class="menu__list-item"><a class="menu__link" href="#/login">Login</a></li>
                  </ul>
              </div>
          </nav>
        </div>
      );
    }
  }
  
  export default NavBar;