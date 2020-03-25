import React, { Component } from 'react';
import { Button, Container} from 'react-bootstrap';

import "./brands.css";

import BrandImg from "../../assets/website_imgs/brand_page.jpg";

class Brand extends Component { 
    render() {
      return (
        <React.Fragment>
        <Container>
          <div className="header">
            <h1 class="home-title">
              <span>Your incomparable brand deserves</span>
              <span>an incomparable event staffing solution</span>
            </h1>
          </div>
          <img src={BrandImg} alt="Brand Image" className="brand_img"/>            
          <div className="header">
            <h1>
              Our Promise
            </h1>
          </div>
          <div className="text">
            <p>
            We are committed to sourcing the most qualified staff for your brand event. Our technology platform only retains talent that is of the highest industry standard for quality, experience, and dependability. We prioritize attention to detail and deepen our alignment with the brands who entrust to us.            </p>
          </div>
          </Container>
        </React.Fragment>
      );
    }
  }
  
  export default Brand;