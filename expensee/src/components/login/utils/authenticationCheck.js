/*

Autor: Jonas Ermert
Version: 1.0

*/

import React from 'react'
import firebase from 'firebase/app'


/* 

  In dieser Funktion wird überprüft, ob der Login erfolgreich war. Wenn ja, wird der Nutzer zu "Home" weitergeleitet. Wenn nicht
  wird er zurück zu "Login" geleitet

*/

export default function authenticationCheck({ navigation }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Benutzer ist eingeloggt
        navigation.reset({
          index: 0,
          routes: [{ name: './Home/Home.js' }],
        })
      } else {
        // Benutzer ist nicht eingeloggt
        navigation.reset({
          index: 1,
          routes: [{ name: 'login.js' }],
        })
      }
    })
}

/*
const Authentication = Component => {
  class Authentication extends React.Component {
    state = {
      authUser: null
    };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(User => {
        User
          ? this.setState({ User })
          : this.setState({ User: null });
      });
    }
  }
}
*/