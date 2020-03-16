import React, { Component } from 'react';
import { Button, Container} from 'react-bootstrap';

import Footer from '../nav/footer.jsx'

import "./home.css";

import Main_Pic from "../../assets/website_imgs/photos/Promotional Models/fabe-collage-a6saNGLkDeE-unsplash.jpg"

class Home extends Component { 
    render() {
      return (
          <React.Fragment>
            <Container className="general">
              <Button variant="light">GET STARTED</Button> {' '}
              <img src={Main_Pic} className="pic"></img>
            </Container>
            <Container className="info">
              <div className="subtitle">
                <h>On-Demand Staffing at the Click of One Button</h>
              </div>
            </Container>
            <Container className="info">
              <h3>How does it work?</h3>              
              {/* IMPORT CHART */}
            </Container>
            <Container className="info">
              <h1>Let's Start</h1>
            </Container>
            <Footer/>
          </React.Fragment>
      );
    }
  }
  
  export default Home;