import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import "./login.css";

class Login extends Component { 
    render() {
      return (
          <div className="login">
            <FontAwesomeIcon icon={faTools} className="login_icons"/>
            <h1>Socialite in Progress</h1>
          </div>
      );
    }
  }

  export default Login;