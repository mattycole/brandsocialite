import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import "./login.css";

import Authorization from "../auth/auth.js"

// class Login extends Component { 
//     render() {
//       return (
//           <div className="login">
//             <FontAwesomeIcon icon={faTools} className="login_icons"/>
//             <h1>Socialite in Progress</h1>
//           </div>
//       );
//     }
//   }

//   export default Login;

  class Account extends Component { 
    render() {
      return (
        <Authorization/>
      );
    }
  }

  export default Account;