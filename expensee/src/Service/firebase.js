import firebase from "firebase/compat/app";
import 'firebase/compat/auth';


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj8ZZGe3yLQuIi_6qOJKV0dn_0Ojhyz3A",
    authDomain: "expensee-1b659.firebaseapp.com",
    projectId: "expensee-1b659",
    storageBucket: "expensee-1b659.appspot.com",
    messagingSenderId: "903761126740",
    appId: "1:903761126740:web:d081428128148483abd4c1"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;