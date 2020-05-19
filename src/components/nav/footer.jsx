import React, { Component } from 'react';

import "./footer.css";

import NavLogo from "../../assets/website_imgs/flat_logo.PNG"

import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


  export default class Footer extends Component { 
    constructor(props) {
        super(props);
        let width = window.innerWidth;
        this.state = {};
        if (width > 768) {
          this.state.renderComponent = (
            <footer className="footer">
              <a href="https://www.facebook.com/brandsocialiteinc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social_media_icons"/> 
              </a>
              <a href="https://www.instagram.com/brandsocialite" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social_media_icons"/> 
              </a>
              <a href="https://www.linkedin.com/company/brandsocialite" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social_media_icons"/> 
              </a>
              <div className="copyright">
                <h>
                © {new Date().getFullYear()}, Brand Socialite Inc.
                </h>
              </div>
            </footer>
          );
        } else {
          this.state.renderComponent = (<div></div>); //need to find more elegant ways
        }
      }
      
    render() {
        return this.state.renderComponent;
    }
}