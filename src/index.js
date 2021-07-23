import React from 'react';
import firebase from 'firebase/app'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css'
// import './assets/styles.css'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDECrgBUTF8ChxFX9xglAJb5tpkr9HsntQ",
    authDomain: "resfeber-studios.firebaseapp.com",
    projectId: "resfeber-studios",
    storageBucket: "resfeber-studios.appspot.com",
    messagingSenderId: "745648159590",
    appId: "1:745648159590:web:f164128fb947911ad266a7",
    measurementId: "G-TS9839VJB9"
  };


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
