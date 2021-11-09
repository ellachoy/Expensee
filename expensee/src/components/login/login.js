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

