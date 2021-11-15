import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'

export const ProtectedRoute = (props) => {
    const { currentUser } = useAuth()
    const { path } = props

    return currentUser ? <Route {...props} /> : <Navigate to={{
        pathname: '/login',
        state: {from: path}
    }} />
}

export default ProtectedRoute
