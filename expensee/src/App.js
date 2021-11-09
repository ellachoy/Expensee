import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


import './App.scss';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
      <h1>Expensee</h1>
       
      </Router>
      
    
   <Footer/>

    </div>
     
  );
}

export default App;
