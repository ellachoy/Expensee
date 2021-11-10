import React from 'react';

import './App.scss';
import Home from './pages/Home/Home.js';
import Add from'./pages/Add/Add.js';
import Charts from './pages/Charts/Charts.js';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
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
        </nav> */}

        <Routes>
          <Route exact path="/Home" element={<Home/>}>
            
          </Route>
          <Route exact path="/charts" element={<Charts/>}>
            
          </Route>
          <Route exact path="/add" element={<Add/>}>
        
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

