import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  faUserCircle,
  faScroll,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../../assets/website_imgs/transparent_logo.png';

import './home.css';
import './button.scss';

import Talent from '../../../assets/website_imgs/photos/home/talent.jpg';
import Bartender from '../../../assets/website_imgs/photos/home/bartender.jpg';
import Photographer from '../../../assets/website_imgs/photos/home/photographer_old.jpg';
import Sommelier from '../../../assets/website_imgs/photos/home/sommelier.jpg';
import EventProducer from '../../../assets/website_imgs/photos/home/event.jpg';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Carousel
            infiniteLoop
            interval={8000}
            autoPlay
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}>
            <div>
              <img className='slideshow_image' src={Talent} />
              <div className='legend talent_container'>
                <h1 className='slideshow_title talent'>
                  TALENT
                  <br />
                  ON DEMAND
                </h1>
                <p className='carousel_talent_text mobile_hidden'>
                  For Event Mangers, <br />
                  Hotels, Catering Companies, and Experiential Marketing
                  Agencies
                </p>
              </div>
            </div>
            <div>
              <img className='slideshow_image' src={Bartender} />
              <div className='legend'>
                <h1 className='slideshow_title'>
                  BARTENDERS <br /> &amp; <br /> MIXOLOGISTS
                </h1>
              </div>
            </div>
            <div>
              <img className='slideshow_image' src={Sommelier} />
              <div className='legend somm'>
                <h1 className='slideshow_title'>SOMMELIERS</h1>
              </div>
            </div>
            <div>
              <img className='slideshow_image' src={Photographer} />
              <div className='legend'>
                <h1 className='slideshow_title'>
                  PHOTOGRAPHERS <br /> &amp; <br /> VIDEOGRAPHERS
                </h1>
              </div>
            </div>
            <div>
              <img className='slideshow_image' src={EventProducer} />
              <div className='legend event'>
                <h1 className='slideshow_title'>EVENT PRODUCERS</h1>
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <img src={Logo} className='mobile_logo' />
        </div>
        <div className='button'>
          <a href='#/login' class='brk-btn mobile-frame'>
            Request Talent
          </a>
        </div>
        <div className='mobile_description'>
          <p className='mobile_description_text'>
            For Event Mangers, <br />
            Hotels, Catering Companies, and <br /> Experiential Marketing
            Agencies
          </p>
        </div>
        <div className='how'>
          <div className='header'>
            <h1 className='body_title'>Process</h1>
          </div>
          <div className='process'>
            <div className='row'>
              <div className='column'>
                <p className='title'>Sign Up</p>
                <div className='icons'>
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <p className='icon_text'>
                  Create an account to verify your identity.
                </p>
              </div>
              <div className='column'>
                <p className='title'>Make a Profile</p>
                <div className='icons'>
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <p className='icon_text'>
                  Fill out minimal information that are securely stored in our
                  database to match each event with the best talents.
                </p>
              </div>
              <div className='column'>
                <p className='title'>Find Talent</p>
                <div className='icons'>
                  <FontAwesomeIcon icon={faScroll} />
                </div>
                <p className='icon_text'>
                  Pick the best combination of talent in less than 12 hours for
                  the grandiose event!
                </p>
              </div>
            </div>
            <div className='text_center'>
              <h1 className='body_title'>Who We Are</h1>
              <p className='icon_text'>
                Brand Socialite is an on-demand staffing platform for event
                managers, hotels, catering companies and experiential marketing
                agencies, that uses matchmaking technology to fill shifts in
                real-time with promotional models, bartenders, servers and
                photographers. Brand Socialite connects businesses with
                high-quality, reliable, pre-screened and professional talent who
                enjoy a flexible schedule while earning.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
