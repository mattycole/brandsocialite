import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUserAlt, faRing, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "./navbar.css"
import NavLogo from "../../assets/website_imgs/transparent_logo.png"

export default class DynamicNavBar extends Component { 
    constructor(props) {
        super(props);
        let width = window.innerWidth;
        this.state = {};
        if (width > 768) {
          this.state.renderComponent = (
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
        } else {
          this.state.renderComponent = (
            <Menu>
            <a href="#"><img href="#" src={NavLogo} className="mobile_menu_logo"/></a>
            <a href="#/talent" className="links"><FontAwesomeIcon icon={faRing}/><span> Talent</span></a>
            <a href="#/brands" className="links"><FontAwesomeIcon icon={faBuilding}/><span> Brands</span></a>
            <a href="#/create" className="links"><FontAwesomeIcon icon={faUserCircle}/><span> Join Socialite</span></a>
            <a href="#/login" className="links"><FontAwesomeIcon icon={faUserAlt}/><span> Login</span></a>
            <footer>
              <div className="copyright">
                <h>
                © {new Date().getFullYear()}, Brand Socialite Inc.
                </h>
              </div>
              <a href="https://www.facebook.com/brandsocialiteinc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="social_media_icons"/> 
              </a>
              <a href="https://www.instagram.com/brandsocialite" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="social_media_icons"/> 
              </a>
              <a href="https://www.linkedin.com/company/brandsocialite" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="social_media_icons"/> 
              </a>
            </footer>
            </Menu>
          );
        }
      }

    render() {
        return this.state.renderComponent;
    }
}