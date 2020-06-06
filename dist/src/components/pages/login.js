import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import "./login.css";

import Authorization from "../auth/auth.js"

class Temp extends Component { 
    render() {
      return (
          <div className="temp">
            <FontAwesomeIcon icon={faTools} className="temp_icons"/>
            <h1>Socialite in Progress</h1>
          </div>
      );
    }
  }

  export default Temp;

  // class Account extends Component { 
  //   render() {
  //     return (
  //       <Authorization/>
  //     );
  //   }
  // }

  // export default Account;
