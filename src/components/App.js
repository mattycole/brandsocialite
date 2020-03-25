import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Redirect,
  Route  
} from "react-router-dom";

import "./App.css";

// Connect pages
import Home from "./pages/home.js"
import Talent from "./pages/talent/talent.js"
import Brands from "./pages/brands.js"
import Login from "./pages/login.js"

import NavBar from './nav/navbar.jsx'
import Footer from './nav/footer.jsx'

import pic1 from "../assets/website_imgs/photos/home/bartender.jpg"

function App() {
  return (
    <React.Fragment>
      <HashRouter name="socialite" path="/" handler={App} basename={process.env.PUBLIC_URL}>
        <NavBar/>
          <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/talent" exact component={Talent} />
          <Route path = "/brands" exact component={Brands} />
          <Route path = "/login" exact component={Login} />
          </Switch>
        <Footer/>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
