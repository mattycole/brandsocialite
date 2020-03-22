import React, { Component } from 'react';
/*import fire from './src/config/Fire.js'*/

import "./login.css";

class Login extends Component { 
    render() {
      return (
          <React.Fragment>
            <form>
              <div class = "form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type = "email" name = "email" 
                class = "form-control" id = "exampleInputEmail1" 
                aria-describedby = "emailHelp" placeholder = "Enter email" />
              </div>

              <div class = "form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type = "password" name = "password" 
                class = "form-control" id = "exampleInputPassword1" 
                placeholder = "Password" />
              </div>

              <button>Create Account</button>

            </form>
          </React.Fragment>
      );
    }
  }

  export default Login;