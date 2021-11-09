/*

Autor: Jonas Ermert
Version: 1.0

*/

import React, { useState } from 'react'
import { loginUser } from './firebase_config'
import { emailCheck } from './emailCheck'
import { passwordCheck } from './passwordCheck'
import {Header} from '..\header\Header'

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

return {
    


}