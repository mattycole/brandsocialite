import React, { Component } from 'react';
import { Row, Container } from "reactstrap";

//import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'


import "./footer.css";

import Logo from "../../assets/website_imgs/logo.PNG"

import Home from "../pages/home.js"
import Professional from "../pages/professional.js"
import Business from "../pages/business.js"

class Footer extends Component { 
    render() {
      return (
        <footer className="footer">
        <a href="https://github.com/ray-cj-huang/socialite_website" target="_blank" rel="noopener noreferrer">
          <img
            className="footer-image"
            src={Logo}
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