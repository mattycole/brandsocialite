import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCe2pvJGVSopAAc0f_cwyKunOGfkRxBMfM",
    authDomain: "socialite-b0499.firebaseapp.com",
    databaseURL: "https://socialite-b0499.firebaseio.com",
    projectId: "socialite-b0499",
    storageBucket: "socialite-b0499.appspot.com",
    messagingSenderId: "1089701038242",
    appId: "1:1089701038242:web:ff6ddc9148ea7612ceaffb",
    measurementId: "G-NDC3D10S2Y"
};



const fire = firebase.initializeApp(config);
export default fire; 