/*

Autor: Jonas Ermert
Version: 1.0

*/


import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/auth'


// Firebase Konfiguration

export const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyDj8ZZGe3yLQuIi_6qOJKV0dn_0Ojhyz3A',
    authDomain: 'expensee-1b659.firebaseapp.com',
    projectId: 'expensee-1b659',
    storageBucket: 'expensee-1b659.appspot.com',
    messagingSenderId: '903761126740',
    appId: '1:903761126740:web:d081428128148483abd4c1',
}

const app = initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();

// Verbindung zur Datenbank
const usersRef = db.collection('users')

// Berechtigungen
const functions = firebase.functions();


/*
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
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
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password gesendet!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
*/

// Registrierung, diese Methode wird in register.js aufgerufen

export const signUpUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: email
    })
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

// Email mit Passwort versenden

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

/*
const forgotPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email)
      .then(function () {
          alert('Bitte ueberpruefe deine Emails...')
      }).catch(function (e) {
          console.log(e)
      }) 
  }

*/


// Login & Logout
  
export const loginUser = async ({ email, password }) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      return { user }
    } catch (error) {
      return {
        error: error.message
      }
    }
}

export const logoutUser = () => {
    firebase.auth().signOut()
}


export default Firebase_Config;




