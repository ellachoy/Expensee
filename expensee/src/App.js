import './App.scss';
import React, { useState} from 'react';
import Home from './pages/Home/Home.js';
import Add from'./pages/Add/Add.js';
import Charts from './pages/Charts/Charts.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Login/login';
import { useAuth } from './contexts/AuthContext'
import { useAuthContext } from './hooks/useAuthContext'

export default function App() {
  const { currentUser } = useAuth()

    return (
      <Router>
        <div>   
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/" element={<Charts/>}/>
            <Route exact path="/charts" element={<Home/>}/>
            <Route exact path="/home" element={<Charts/>}/>
            <Route exact path="/add" element={<Add/>}/>
          </Routes>
        </div>
      </Router>
    );

  }


