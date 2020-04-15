import React, { Component } from 'react';
import fire from '../config/fire.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import "./create.css";

class Create extends Component { 
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      this.state = {
        email:'',
        password:''
      }
    }

    login(e) {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
        (u)=>{}).catch((error) => { 
        console.log(error);
      });
    }

    signup(e) {
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(
        (error) => { 
        console.log(error);
      });
    }

    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      return (
          <React.Fragment>
            <form>
              <div class = "form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input value={this.state.email} onChange={this.handleChange} 
                type="email" name="email" class="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" placeholder="Enter email" />
              </div>

              <div class = "form-group">
                <label for="exampleInputPassword1">Password</label>
                <input value={this.state.password} onChange={this.handleChange}
                type="password" name="password" class="form-control" 
                id="exampleInputPassword1" placeholder="Password" />
              </div>

              <button onClick={this.signup}>Create Account</button>

            </form>
          </React.Fragment>
      );
    }
  }

  class Temp extends Component { 
    render() {
      return (
          // <div className="login">
          //   <FontAwesomeIcon icon={faTools} className="login_icons"/>
          //   <h1>Socialite in Progress</h1>
          // </div>
          <div id="wrapper">
            <a href="#/login" class="my-super-cool-btn">
              <div class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <span>Join As Talents</span>
            </a>
            <a href="#/login" class="my-super-cool-btn">
              <div class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <span>Join as Brands</span>
            </a>
          </div>
      );
    }
  }

  export default Temp;