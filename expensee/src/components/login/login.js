/*

Autor: Jonas Ermert
Version: 1.0

*/

import React, { useState } from 'react'
import { loginUser } from './firebase_config'
import { emailCheck } from './emailCheck'
import { passwordCheck } from './passwordCheck'


export default function Login({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState()
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
            <input type="text" placeholder="hier Email Adresse eingeben"></input>
            <input type="password"></input>
          </form>
          <button type="submit" className="login-button">Einloggen</button>
          <p>Noch nicht registriert?</p><a href="./register.js">Registrieren</a>
        </div>

      </login>
  );
}