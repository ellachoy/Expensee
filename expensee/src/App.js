import React from 'react';
import './App.scss';
import Home from './pages/Home/Home.js';
import Add from'./pages/Add/Add.js';
import Charts from './pages/Charts/Charts.js';
import Email from './pages/Email/Email';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>    

        <Routes>
        <Route exact path="/" element={<Email/>}>
        
        </Route>
          <Route exact path="/charts" element={<Home/>}>

            
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

