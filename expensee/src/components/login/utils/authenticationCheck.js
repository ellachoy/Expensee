/*

Autor: Jonas Ermert
Version: 1.0

*/

import firebase from 'firebase/app'


/* 

  In dieser Funktion wird überprüft, ob der Lgin erfolgreich war. Wenn ja, wird der Nutzer zu "Home" weitergeleitet. Wenn nicht
  wird er zurück zu "Login" geleitet

*/

export default function authenticationCheck({ navigation }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Benutzer ist eingeloggt
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      } else {
        // Benutzer ist nicht eingeloggt
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      }
    })
}