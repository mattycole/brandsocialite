import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCjXtp8tT1q5MDKIu9P3U8JuEyJEByGhOk",
    authDomain: "brand-socialite-34f04.firebaseapp.com",
    databaseURL: "https://brand-socialite-34f04.firebaseio.com",
    projectId: "brand-socialite-34f04",
    storageBucket: "brand-socialite-34f04.appspot.com",
    messagingSenderId: "107663860892",
    appId: "1:107663860892:web:75a878dfd3bc8663c4f959",
    measurementId: "G-NXX1XP2NDR"
};

const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig; 

export const auth = firebase.auth();
export const firestore = firebase.firestore();