import React, { Component } from 'react';
import { Button, Container} from 'react-bootstrap';

import "./talent.css";
import "./text.scss";
import "./image.scss";

class Talent extends Component { 
    render() {
      return (
          <React.Fragment>
              <Container className="beginning">
              <h4 class="wordCarousel">    
                <div> 
                    <ul class="flip3"> 
                        <li>Exclusive Events</li>
                        <li>Iconic Brands</li>
                        <li>Once-in-a-lifetime Experiences</li> 
                        <li>Awesome</li>  
                    </ul>
                </div>  
              </h4>  
              <div class="imageContainer">
                <div class="glass glass--1"></div>
              </div>      
              <div className="talent_header">
                <h1>
                  Our Promise
                </h1>
              </div>
              <div className="text">
                <p>
                We are committed to match the talent on our platform with the highest paid event staffing opportunities in their local area. Our technology platform is an all-in-one solution for everything from job notifications to event updates and payments.                 </p>
              </div>
            </Container>
          </React.Fragment>
      );
    }
  }
  
  export default Talent;