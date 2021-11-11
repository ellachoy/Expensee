import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './pages/Home/Home.js';
import Add from'./pages/Add/Add.js';
import Charts from './pages/Charts/Charts.js';
import Email from './pages/Email/Email';
import Google from './pages/Google/Google';
import firebase from './Service/firebase'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      console.log(user.uid);
      console.log(user.email);
    })
  }, [])
  return (
    <Router>
      <div>    

        <Routes>
        <Route exact path="/" element={<Google/>}>
        
        </Route>
          <Route exact path="/charts" element={<Email/>}>
            
          </Route>
          <Route exact path="/home" element={<Charts/>}>
            
          </Route>
          <Route exact path="/add" element={<Add/>}>

          </Route>
          
        </Routes>

      </div>
    </Router>

  );
}


