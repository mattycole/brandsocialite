import React, { Component } from 'react';
import { Button, Container} from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { faUserCircle, faScroll, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../../assets/website_imgs/transparent_logo.png"

import "./home.css";
import "./button.scss";

import Talent from "../../../assets/website_imgs/photos/home/talent.jpg"
import Bartender from "../../../assets/website_imgs/photos/home/bartender.jpg"
import Photographer from "../../../assets/website_imgs/photos/home/photographer_old.jpg"
import Sommelier from "../../../assets/website_imgs/photos/home/sommelier.jpg"
import EventProducer from "../../../assets/website_imgs/photos/home/event.jpg"

class Home extends Component { 
    render() {
      return (
          <React.Fragment>
            <Container >
              <Carousel infiniteLoop autoPlay interval={8000} stopOnHover={false} showThumbs={false} showStatus={false}>
                  <div>
                      <img src={Talent}/>
                      <div className="legend">
                        <h1>TALENT ON DEMAND</h1>
                        <a href="https://www.google.com/forms/about/" class="brk-btn">
                            Request Talent
                        </a>
                        <p className ="carousel_talent_text">For Event Mangers, Hotels, Event Venues, Catering Companies, and Experiential Marketing Agencies</p>
                      </div>
                  </div>
                  <div>
                      <img src={Bartender}/>
                      <div className="legend">
                        <h1>BARTENDERS &amp; MIXOLOGISTS</h1>
                        <a href="https://www.google.com/forms/about/" class="brk-btn bart">
                            Request Talent
                        </a>
                      </div>
                  </div>
                  <div>
                      <img src={Sommelier}/>
                      <div className="legend">
                        <div className="sommlier">
                          <h1>SOMMELIERS</h1>
                          <a href="https://www.google.com/forms/about/" class="brk-btn somm">
                            Request Talent
                        </a>
                        </div>
                      </div>
                  </div>
                  <div>
                      <img src={Photographer}/>
                      <div className="legend">
                        <h1>PHOTOGRAPHERS &amp; VIDEOGRAPHERS</h1>
                        <a href="https://www.google.com/forms/about/" class="brk-btn pho">
                            Request Talent
                        </a>
                      </div>
                  </div>
                  <div>
                      <img src={EventProducer}/>
                      <div className="legend">
                        <h1>EVENT PRODUCERS</h1>
                        <a href="https://www.google.com/forms/about/" class="brk-btn eve eve-but">
                            Request Talent
                        </a>
                      </div>
                  </div>
              </Carousel>
            </Container>
            <div>
              <img src={Logo} className="mobile_logo"/>
            </div>
            <Container className="how">
              <div className="header process">
                <h1>
                  Process
                </h1>
              </div>
              <div className="process">
                <div className="row">
                  <div className="column">
                    <p>Create</p> 
                    <div className="icons">
                      <FontAwesomeIcon icon={faUserCircle}/> 
                    </div>
                    <p className="icon_text">
                      Create an account to verify your identity.
                    </p>                 
                  </div>
                  <div className="column">
                    <p>Fill</p>
                    <FontAwesomeIcon icon={faPen} className="icons"/>
                    <p className="icon_text">
                      Fill out minimal information that are securely stored in our database to match each event with the best talents.
                    </p>                   
                  </div>
                  <div className="column">
                    <p>Pick</p>
                    <FontAwesomeIcon icon={faScroll} className="icons"/>  
                    <p className="icon_text">
                      Pick the best combination of talents in less than 12 hours for the grandiose event!  
                    </p>                 
                  </div>
                </div>
              </div>
            </Container>
          </React.Fragment>
      );
    }
  }
  
  export default Home;