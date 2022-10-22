// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOSMc0nOJTn-ohZ43PLUKGFXPFPnY4iDA",
    authDomain: "tour-site-c943e.firebaseapp.com",
    projectId: "tour-site-c943e",
    storageBucket: "tour-site-c943e.appspot.com",
    messagingSenderId: "684680194378",
    appId: "1:684680194378:web:1b679f538af27f75e679b3",
    measurementId: "G-4W52VB93GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default auth;