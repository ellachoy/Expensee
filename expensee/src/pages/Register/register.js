import "./login.scss";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

const Register = () => {

const { login, signInWithGoogle, signInWithTwitter, signInWithGitHub, currentUser } = useAuth()

    return (
        <div className="mail" >
            <h1>Expensee</h1>
            <h3>Account erstellen</h3>
            <form className="loginMail" action="">
                <input type="email" name="email" id="" placeholder="Email"/><br />
                <input type="text" name="password" placeholder="Passwort"/><br />
                <button></button>
            </form>
        </div>
    );
}

export default Register;