import React, { Component } from 'react';
import { Row, Container } from "reactstrap";

//import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'


import "./footer.css";

import NoBackgroundLogo from "../../assets/website_imgs/socialite_logo_no_background.png"

import Home from "../pages/home.js"
import Professional from "../pages/talent.js"
import Business from "../pages/brands.js"

class Footer extends Component { 
    render() {
      return (
        <footer className="footer">
        <a href="https://github.com/ray-cj-huang/socialite_website" target="_blank" rel="noopener noreferrer">
          <img
            className="footer-image"
            src={NoBackgroundLogo}
            alt="Socialite"
          />
        </a>
        <div className="copyright">
          <h>
          © {new Date().getFullYear()}, Socialite
          </h>
        </div>
      </footer>
      );
    }
  }
  
  export default Footer;