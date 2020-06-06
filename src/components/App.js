import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Redirect,
  Route  
} from "react-router-dom";

import './App.css';

import UserProvider from "../providers/UserProvider";
import Application from "./auth/auth.js";

// Connect pages
import Home from "./pages/home/home.js"
import Talent from "./pages/talent/talent.js"
import Brands from "./pages/brands/brands.js"
import Login from "./pages/login.js"
import Create from "./pages/create/create.js"

import NavBar from './nav/navbar.jsx'
import Footer from './nav/footer.jsx'

import TalentForm from "./pages/forms/talent_form"
import BrandForm from "./pages/forms/brands_form"

function App() {
  return (
    <UserProvider>
      <HashRouter name="socialite" path="/" handler={App} basename={process.env.PUBLIC_URL}>
        <NavBar/>
          <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/talent" exact component={Talent} />
          <Route path = "/brands" exact component={Brands} />
          <Route path = "/create" exact component={Create} />
          <Route path = "/login" exact component={Login} />
          <Route path = "/talent-form" exact component={TalentForm} />
          <Route path = "/brands-form" exact component={BrandForm} />
          </Switch>
        <Footer/>
      </HashRouter>
    </UserProvider>
  );
}

export default App;
