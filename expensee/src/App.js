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
  Navigate,
} from "react-router-dom";
import { firebase } from './Service/firebase';
import { useAuthContext } from "./hooks/useAuthContext"

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
  // const { user, appReady } = useAuthContext()
    return (
      <Router>
        {/* {appReady && ( */}
        <div>   
          <Routes>
            {/* <Route path="/charts">
              {!user && <Charts />}
              {user && <Navigate to="/" />}
            </Route>

            <Route path="/add">
              {!user && <Add />}
              {user && <Navigate to="/" />}
            </Route>

            <Route path="/home">
              {!user && <Home />}
              {user && <Navigate to="/" />}
            </Route>

            <Route path="/">
              {!user && <GoogleSignIn />}
              {user && <Home />}
            </Route> */}
            <Route exact path="/" element={<Charts/>}/>
            <Route exact path="/charts" element={<Home/>}/>
            <Route exact path="/home" element={<Charts/>}/>
            <Route exact path="/add" element={<Add/>}/>
          </Routes>
        </div>
        {/* // )} */}
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
  


