import React, { Component } from 'react';

import "./footer.css";

import NavLogo from "../../assets/website_imgs/flat_logo.PNG"

import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component { 
    render() {
      return (
        <footer className="footer">
        <a href="https://www.facebook.com/brandsocialiteinc" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="social_media_icons"/> 
        </a>
        <a href="https://www.instagram.com/brandsocialite" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="social_media_icons"/> 
        </a>
        <a href="https://www.linkedin.com/company/brandsocialite" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="social_media_icons"/> 
        </a>
        <a href="https://github.com/ray-cj-huang/socialite_website" target="_blank" rel="noopener noreferrer">
          <img
            className="footer-image"
            src={NavLogo}
            alt="Socialite"
          />
        </a>
        <div className="copyright">
          <h>
          © {new Date().getFullYear()}, Brand Socialite Inc.
          </h>
        </div>
      </footer>
      );
    }
  }
  
  export default Footer;