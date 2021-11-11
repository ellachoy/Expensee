import React from 'react'
import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import { googleAuthProvider, signInWithRedirect } from 'firebase/auth'


function signInWithGoogle() {
    const provider = new googleAuthProvider()
    return signInWithRedirect(auth, provider)
    .then(user => 
        console.log(user))
    .catch(error => 
        console.log(error))
}


const GoogleLogin = () => {
    return ( 
        <div className="login">
            <button type="submit" className="googleLogin" onClick={signInWithGoogle()}>Sign in with Google</button>
            <p>Sign in with Email?</p><a href="../login/register.js">Login with Email</a>
        </div>
    );
}

export default GoogleLogin;