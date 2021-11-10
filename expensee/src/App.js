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
<<<<<<< HEAD
    
        {/*<nav>
=======
        {/* <nav>
>>>>>>> 79d8a05d1cce7a1e8ccc2d7a3a284e73f3c343e5
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
<<<<<<< HEAD
        </nav>*/}
=======
        </nav> */}
>>>>>>> 79d8a05d1cce7a1e8ccc2d7a3a284e73f3c343e5

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

