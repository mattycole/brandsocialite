import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

import './brands.css';

import BrandImg from '../../../assets/website_imgs/brand_page.jpg';

class Brand extends Component {
  render() {
    return (
      <div className='container'>
        <div className>
          <h1 className='body_title'>Connecting Talent to Brands</h1>
        </div>
        <div className='text'>
          <p className='body_text'>
            We are committed to sourcing the most qualified staff for your brand
            event. Our technology platform only retains talent that is of the
            highest industry standard for quality, experience, and
            dependability. We prioritize attention to detail and deepen our
            alignment with the brands who entrust to us.{' '}
          </p>
        </div>
        <div className='button'>
          <a href='#/create' class='brk-btn mobile-frame'>
            Join Now
          </a>
        </div>
      </div>
    );
  }
}

export default Brand;
