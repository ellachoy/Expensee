/*

Autor: Jonas Ermert
Version: 1.0

*/


import React, { useState } from 'react'
import { FIREBASE_CONFIG } from './firebase_config'
import { signUpUser } from './firebase_config'
import { emailCheck } from './emailCheck'
import { passwordCheck } from './passwordCheck'


export default function register({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    const signUpUser = async () => {
        const emailError = emailCheck(email.value)
        const passwordError = passwordCheck(password.value)
        if (emailError || passwordError) {
            setEmail({...email, error: emailError})
            setPassword({...password, error: passwordError})
            return
        }
        setLoading(true)
        const response = await signUpUser({
            email: email.value,
            password: password.value,
        })
        if (response.error) {
            setError(response.error)
        }
        setLoading(false)


    }
}
