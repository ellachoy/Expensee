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

const app = initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();

// Verbindung zur Datenbank
const usersRef = db.collection('users')

// Berechtigungen
const functions = firebase.functions();


// Registrierung, diese Methode wird in register.js aufgerufen

export const signUpUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: email,
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






