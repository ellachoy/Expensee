import './App.scss';
import React, { useState} from 'react';
import Home from './pages/Home/Home.js';
import Add from'./pages/Add/Add.js';
import Charts from './pages/Charts/Charts.js';
import Email from './pages/Email/Email';
import GoogleSignIn from './pages/GoogleSignIn/GoogleSignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { firebase } from './Service/firebase';
import TransaktionDb from './components/Transaktion/TransaktionDB';
import TransaktionDBContainer from './components/Transaktion/TransaktionDBContainer';
import AddDB from './pages/Add/AddDB';

export default function App() {
  // const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  // firebase.auth().onAuthStateChanged((user) => {
  //   if(user){
  //     return setIsUserSignedIn(true)
  //   }
  //   setIsUserSignedIn(false)
  // })

  // if(isUserSignedIn === true){
  //   console.log('user is logged in');
    return (
      <Router>
        <div>    
          <Routes>
            <Route exact path="/" element={<Charts/>}/>
            <Route exact path="/charts" element={<Home/>}/>
            <Route exact path="/home" element={<Charts/>}/>
            <Route exact path="/add" element={<Add/>}/>
            <Route exact path='/test' element={<TransaktionDb/>}/>
            <Route exact path='/test2' element={<TransaktionDBContainer/>}/>
            <Route exact path='/test3' element={<AddDB/>}/>
          </Routes>
        </div>
      </Router>
    );
  // }else{
  //   return (
  //     <Router>
  //       <div>    
  //         <Routes>
  //           <Route exact path="/" element={<GoogleSignIn/>}/>
  //         </Routes>
  //       </div>
  //     </Router>
  //   );
  // }
  }
  


