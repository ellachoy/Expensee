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
<<<<<<< HEAD
        <Routes>
          <Route exact path="/home" element={<Home/>}>
=======
    
        
        {/* <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/charts">charts</Link>
            </li>
            <li>
              <Link to="/add">add</Link>
            </li>
          </ul>
        </nav>*/}

     

        <Routes>
          <Route exact path="/" element={<Home/>}>
>>>>>>> f048c69693eac024c4444242b9a5f65861146bef
            
          </Route>
          <Route exact path="/charts" element={<Charts/>}>
            
          </Route>
          <Route exact path="/add" element={<Add/>}>
           
          </Route>
          <Route exact path="/Email" element={<Email/>}>
        
          </Route>
        </Routes>
     
      </div>
    </Router>

  );
}

