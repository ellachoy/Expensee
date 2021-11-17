import "./register.scss";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register, currentUser } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(email, password)
        register(email, password)
        
    }


    return (
        <div className="regis" >
            <h1 className="registerh1">Expensee</h1>
            <h3 className="registerh3">Account erstellen</h3>
            <form className="registerMail" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button className="signUpB" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Register;