/*

Autor: Jonas Ermert
Version: 1.0

*/

import firebase from 'firebase/app'

export default function authenticationCheck({ navigation }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Benutzer ist eingeloggt
        navigation.reset({
          index: 0,
          routes: [{ name: 'home' }],
        })
      } else {
        // Benutzer ist nicht eingeloggt
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        })
      }
    })
}