/*

Autor: Jonas Ermert
Version: 1.0

*/


import React, { useState } from 'react'
import { FIREBASE_CONFIG } from './firebase_config'
import { signUpUser } from './firebase_config'
import { emailCheck } from './emailCheck'
import { passwordCheck } from './passwordCheck'


/*
constructor(props){
  super(props);

  this.state = {
    err: ''
  };

  this.login = this.loginUser.bind(this);
  this.signUpUser = this.signUpUser.bind(this);
  this.logout = this.logoutUser.bind(this);
}
*/


export default function register({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    const signUpUser = async () => {

        // Hier wird Email und Passwort überprüft
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

/*
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};



*/


/*
register() {

  const email = this.refs.email.value
  const password = this.refs,password.value
  console.log(email, password)

}
*/

const RegisterForm = () => {

    return (
        <login className="register">
          <div className="register-container">
            <form className="register-form">
              <input name="email" type="text" placeholder="hier Email Adresse eingeben"></input>
            </form>
            <button type="submit" className="register-button" onClick={signUpUser(email, password)}>Registrieren</button>
          </div>
  
        </login>


        /*
        <div>
          <input id="email" ref="email" type="email" placeholder="Gib deine Email ein" /><br />
          <input id="password" ref="password" type="password" placeholder="Gib hier dein Passwort ein" /><br />
            <p>{this.state.err}</p>
              <button onClick={this.login}>Login</button>
              <button onClick={this.signUpUser}>Registriren</button>
              <button onClick={this.logout} id="logout" className="logout">Logout</button><br />
        </div>

        */



    );
  }

  export default register