import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFR4XiP0Jvj59GzcQ26UOFht3fgEZYUJg",
  authDomain: "proyecto-react-js-d1158.firebaseapp.com",
  projectId: "proyecto-react-js-d1158",
  storageBucket: "proyecto-react-js-d1158.appspot.com",
  messagingSenderId: "164091162525",
  appId: "1:164091162525:web:23938b37a29637d8728974"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
