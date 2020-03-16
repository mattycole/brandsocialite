import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Redirect,
  Route  
} from "react-router-dom";

import './App.css';

import Header from "./nav/header.jsx"
// Connect pages
import Home from "./pages/home.js"
import Professional from "./pages/professional.js"
import Business from "./pages/business.js"

//import SignUp from "./account/signin.js"
//import SignIn from "./account/sinup.js"


function App() {
  return (
    <React.Fragment>
      <HashRouter name="app" path="/" handler={App} basename={process.env.PUBLIC_URL}>
        <Header/>
          <Switch>
            <Route path = "/pages/home.js" exact component={Home} />
            <Route path = "./pages/professional.js" exact component={Professional} />
            <Route path = "/pages/business.js" exact component={Business} />
           </Switch>
        <Redirect from="/" exact to="/pages/home.js" />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
