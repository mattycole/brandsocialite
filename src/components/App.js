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
import Home from "./pages/home/home.js"
import Talent from "./pages/talent/talent.js"
import Brands from "./pages/brands/brands.js"
import Create from "./pages/create/create.js"
import Login from "./pages/login.js"

import NavBar from './nav/navbar.jsx'
import Footer from './nav/footer.jsx'

function App() {
  return (
    <React.Fragment>
      <HashRouter name="socialite" path="/" handler={App} basename={process.env.PUBLIC_URL}>
        <NavBar/>
          <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/talent" exact component={Talent} />
          <Route path = "/brands" exact component={Brands} />
          <Route path = "/create" exact component={Create} />
          <Route path = "/login" exact component={Login} />
          </Switch>
        <Footer/>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
