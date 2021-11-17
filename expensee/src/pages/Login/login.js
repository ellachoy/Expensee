import "./login.scss";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import backImg from '../../img/background.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const { login, signInWithGoogle, signInWithTwitter, signInWithGitHub, currentUser } = useAuth()

const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email, password)
    login(email, password)
    
}

    return (
        <div className="mail" >
            <h3 className="LoginH3">Willkommen bei</h3>
            <h1 className="LoginH1">Expensee</h1>
            <form className="loginMail" action="">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    /><br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Passwort"
                    onChange={(e) => setPassword(e.target.value)}
                    /><br />
                <div className="reg">Noch nicht registriert? <Link to="/register"><div>Sign Up</div></Link></div>

                <button className="subB" type="submit" onClick={handleSubmit}>Login</button>
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
            <div className="backGcont">
                <img className="backG" src={backImg} alt="" />
            </div>
        </div>
    );
}

export default Login;

