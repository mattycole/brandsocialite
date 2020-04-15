import React, { Component } from 'react';

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
            <div>
              <Carousel infiniteLoop autoPlay interval={8000} stopOnHover={false} showThumbs={false} showStatus={false}>
                  <div>
                      <img src={Talent}/>
                      <div className="legend">
                      <h1 className="slideshow_title talent">TALENT ON DEMAND</h1>
                        <a href="#/login" class="brk-btn mobile_hidden">
                            Request Talent
                        </a>
                        <p className ="carousel_talent_text">For Event Mangers, <br/>Hotels, Catering Companies, and Experiential Marketing Agencies</p>
                      </div>
                  </div>
                  <div>
                      <img src={Bartender}/>
                      <div className="legend">
                      <h1 className="slideshow_title">BARTENDERS <br/> &amp; <br/>  MIXOLOGISTS</h1>
                        <a href="#/login" class="brk-btn bart mobile_hidden">
                            Request Talent
                        </a>
                      </div>
                  </div>
                  <div>
                      <img src={Sommelier}/>
                      <div className="legend">
                        <div className="down">
                          <h1 className="slideshow_title">SOMMELIERS</h1>
                          <a href="#/login" class="brk-btn somm mobile_hidden">
                            Request Talent
                        </a>
                        </div>
                      </div>
                  </div>
                  <div>
                      <img src={Photographer}/>
                      <div className="legend shifted">
                      <h1 className="slideshow_title">PHOTOGRAPHERS <br/>  &amp; <br/>  VIDEOGRAPHERS</h1>
                        <a href="#/login" class="brk-btn pho mobile_hidden">
                            Request Talent
                        </a>
                      </div>
                  </div>
                  <div>
                      <img src={EventProducer}/>
                      <div className="legend">
                      <h1 className="slideshow_title">EVENT PRODUCERS</h1>
                        <a href="#/login" class="brk-btn eve eve-but mobile_hidden">
                            Request Talent
                        </a>
                      </div>
                  </div>
              </Carousel>
            </div>
            <div>
              <img src={Logo} className="mobile_logo"/>
            </div>
            <div className="mobile_button">
              <a href="#/login" class="brk-btn eve eve-but">
                Request Talent
              </a>
            </div>
            <div className="how">
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
                <div className="text_center">
                  <h1>
                    Who We Are
                  </h1>
                  <p>
                    Brand Socialite is an on-demand staffing platform for event managers, hotels, catering companies and experiential marketing agencies,
                    that uses matchmaking technology to fill shifts in real-time with promotional models, bartenders, servers and photographers.
                    Brand Socialite connects businesses with high-quality, reliable, pre-screened and professional talent who enjoy a flexible schedule
                    while earning extra income. 
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
      );
    }
  }
  
  export default Home;