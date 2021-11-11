/*

Autor: Jonas Ermert
Version: 1.0

*/


import React, { useState } from 'react'
import { emailCheck } from './emailCheck'

export default function ResetPassword({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false)


    const sendResetPasswordEmail = async () => {
        const emailError = emailCheck(email.value)
        if (emailError) {
          setEmail({ ...email, error: emailError })
          return
        }
        setLoading(true)
        const response = await sendEmailWithPassword(email.value)
        setLoading(false)
      }
}

