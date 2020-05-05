import React, { Component } from 'react'
import { Router } from "@reach/router";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import ProfilePage from "./profile";
import PasswordReset from "./password_reset.js";

// function Application() {
//   const user = null;
//   return (
//         user ?
//         <ProfilePage />
//       :
//         <Router>
//           <SignUp path="signUp" />
//           <SignIn path="/" />
//           <PasswordReset path = "passwordReset" />
//         </Router>

//   );
// }

// export default Application;

const user = null;

class Auth extends Component{
    state = {
        
    }
    render() {
        return (
            user ?
            <ProfilePage />
          :
            <Router>
              <SignUp path="signUp" />
              <SignIn path="/" />
              <PasswordReset path = "passwordReset" />
            </Router>
        )
    }
}

export default Auth