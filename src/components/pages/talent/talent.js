import React, { Component } from 'react';
import { Button, Container} from 'react-bootstrap';

import "./talent.css";

class Talent extends Component { 
    render() {
      return (
            <Container>
              <div className="container">
                <div className="talent_header">
                  <h1 className="body_title">
                    Our Promise
                  </h1>
                </div>
                <div className="text">
                  <p>
                  We are committed to match the talent on our platform with the highest paid event staffing opportunities in their local area. Our technology platform is an all-in-one solution for everything from job notifications to event updates and payments.
                  </p>
                </div>
              </div>
            </Container>
          
      );
    }
  }
  
  export default Talent;