import './App.scss';
import React, { useState, useEffect} from 'react';
import Home from './pages/Home/Home.js';
import Add from'./pages/Add/Add.js';
import Charts from './pages/Charts/Charts.js';
import Login from './pages/Login/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  import { useAuth } from './contexts/AuthContext'

export default function App() {
const { currentUser, appIsReady } = useAuth()
console.log(currentUser)

return (
  <Router>
    {appIsReady && (
    <div>   
      <Routes>

        
          {currentUser && <Route exact path="/" element={<Charts/>}/>}
          {!currentUser && <Route exact path="/" element={<Login/>}/>}
          
          {currentUser && <Route exact path="/home" element={<Charts/>}/>}
          {!currentUser && <Route exact path="/" element={<Login/>}/>}

          {currentUser && <Route exact path="/charts" element={<Home/>}/>}
          {!currentUser && <Route exact path="/" element={<Login/>}/>}

          {currentUser && <Route exact path="/add" element={<Add/>}/>}
          {!currentUser && <Route exact path="/" element={<Login/>}/>}

      </Routes>
    </div>
    )}
  </Router>
);

}








