import "./login.scss";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
// const history = useNavigate()

const { login, signInWithGoogle, signInWithTwitter, signInWithGitHub, currentUser } = useAuth()

    return (
        <div className="mail" >
            <h3 className="loginHeadline">Willkommen bei</h3>
            <h1>Expensee</h1>
            <form className="loginMail" action="">
                <input type="email" name="email" id="" placeholder="Email"/><br />
                <input type="text" name="password" placeholder="Passwort"/><br />
                <div className="reg">Noch nicht registriert? <Link to="./Login/register.js"><div>Sign Up</div></Link></div>

                <button>Login</button>
                <p>oder Login mit</p>
                    <div className="buttons">
                        <div className="container">
                        <div className="buttonG" onClick={() => 
                            signInWithGoogle()
                            .then(user => console.log(user))
                            .catch(error => console.log(error))
                            }></div>
                        </div>
                        <div className="container">
                        <div className="buttonT" onClick={() => 
                            signInWithTwitter()
                            .then(user => console.log(user))
                            .catch(error => console.log(error))
                            }></div>
                        </div>
                        <div className="container">
                        <div className="buttonH" onClick={() => 
                            signInWithGitHub()
                            .then(user => console.log(user))
                            .catch(error => console.log(error))
                            }></div>
                        </div>
                    </div>
            </form>
        </div>
    );
}

export default Login;

