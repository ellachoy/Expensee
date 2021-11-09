/*

Diese Komponente verwaltet den Login. In ihr ist zum Einen die Firebase Konfiguration implementiert. Außerdem beeinhaltet sie den Login, Logout und die Ueberprüfung von Name und Passwort

Autor: Jonas Ermert
Version: 1.0

*/


import firebase from 'firebase/app'
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



// Login & Logout
  
export const loginUser = async ({ name, password }) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(name, password)
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


// Ueberprüfung Name

export function nameValidator(name) {
    if (!name) return "Benutzername kann nicht leer sein"
    return ''
}


// Ueberprüfung Passwort

export function passwordValidator(password) {
    if (!password) return "Bitte gib ein Passwort ein"
    return ''
}


// TODO's

/*
    1. Dem Benutzer ermöglichen sein Passwort zurückzusetzen
    2. Registrierung ermöglichen, damit sich nicht nur Nutzer anmelden können, die in Firebase angelegt wurden
    3. Stylen des Loginscreens
    4. Verbinden der Login Komponente mit dem Rest der Applikation

*/


