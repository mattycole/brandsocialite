import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Redirect,
  Route  
} from "react-router-dom";

import './App.css';

// Connect pages
import Home from "./pages/home.js"
import Professional from "./pages/professional.js"
import Business from "./pages/business.js"
import Login from "./pages/login.js"

//import SignUp from "./account/signin.js"
//import SignIn from "./account/sinup.js"

import NavBar from './nav/navbar.jsx'
import Footer from './nav/footer.jsx'

function App() {
  return (
    <React.Fragment>
      <HashRouter name="app" path="/" handler={App} basename={process.env.PUBLIC_URL}>
          <NavBar/>
          <Switch>
            <Route path = "/pages/home.js" exact component={Home} />
            <Route path = "./pages/professional.js" exact component={Professional} />
            <Route path = "/pages/business.js" exact component={Business} />
            <Route path = "/pages/login.js" exact component={Login} />
           </Switch>
        <Redirect from="/" exact to="/pages/home.js" />
      </HashRouter>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
