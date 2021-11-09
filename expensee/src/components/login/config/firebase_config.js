/*

Autor: Jonas Ermert
Version: 1.0

*/


import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/auth'


// Firebase Konfiguration

export const FIREBASE_CONFIG = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
}

const app = initializeApp(EXPENSEE);


// Registrierung

export const signUpUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}


// Login & Logout
  
export const loginUser = async ({ email, password }) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      return { user }
    } catch (error) {
      return {
        error: error.message,
      }
    }
}

export const logoutUser = () => {
    firebase.auth().signOut()
}






