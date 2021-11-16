/*

Autor: Jonas Ermert
Version: 1.0

*/

import React, { useState } from 'react'
import { loginUser } from './config/firebase_config'
import { emailCheck } from './utils/emailCheck'
import { passwordCheck } from './utils/passwordCheck'
import { authenticationCheck} from './utils/authenticationCheck'
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { useState } from 'react';

// Style
import {Style} from './login.scss'


/*
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

 handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="login">
        <form>
          <div class="email">
            <label for="Email">Email</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="Email" placeholder="Email eingeben" />
          </div>
          <div class="passwort">
            <label for="Password">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="password" id="Password" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login}>Login</button>
          <button onClick={this.signup}>Einloggen</button>
        </form>
      
      </div>
    );
  }
}
export default Login;

*/


export default function Login({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [error, setError] = useState()

    const onLogin = async () => {
        const emailError = emailCheck(email.value)
        const passwordError = passwordCheck(password.value)
        if (emailError || passwordError) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return
        }
        setLoading(true)
        const response = await loginUser({ // Methode loginUser aus firebase_config.js wird aufgerufen
          email: email.value,
          password: password.value
        })
        if (response.error) {
          setError(response.error)
        }
        setLoading(false)
      }
}

/*
const Login = () => {
  return (
      <login className="login">
        <div className="login-container">
          <form className="login-form">
            <label htmlFor="email">Bitte gib deine Email Adresse ein:</label>
              <input type="text" placeholder="Email Adresse eingeben..."></input>
            <label htmlFor="password">Bitte gib dein Passwort ein:</label>
              <input type="password"></input>
          </form>
          <button type="submit" className="login-button" onClick={loginUser()}>Einloggen</button>
          <p>Noch nicht registriert?</p><a href="./register.js">Registrieren</a>
        </div>

      </login>
  );
  
}

*/

/*

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, login } = useLogin()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        login(email, password)
    }
    return (
        <div id="login">
            <h1>Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Log In" />
            </form>
            <p>Du hast keinen Account <Link to="/register">Registrieren</Link></p>
            {error && <p>{error}</p>}
        </div>
    );
}

*/


export default Login;