/*

Autor: Jonas Ermert
Version: 1.0

*/

import React, { useState } from 'react'
import { loginUser } from './config/firebase_config'
import { emailCheck } from './utils/emailCheck'
import { passwordCheck } from './utils/passwordCheck'


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
        const response = await loginUser({
          email: email.value,
          password: password.value,
        })
        if (response.error) {
          setError(response.error)
        }
        setLoading(false)
      }
}


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