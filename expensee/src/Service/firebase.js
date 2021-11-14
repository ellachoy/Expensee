import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth'


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
const app = initializeApp(firebaseConfig);
// Init the Authentication service
const auth = getAuth()
// Init the Storage service
const storage = getStorage(app);
// Init the Firestore service
const db = getFirestore();
export { firebase, auth, storage, db }

// firebase.initializeApp(firebaseConfig);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)

// // Init the Storage service
// const auth = getAuth()

// export default getFirestore()

// // export const auth = firebase.auth();

// // const provider = new firebase.auth.GoogleAuthProvider();
// // provider.setCustomParameters({ prompt: 'select_account' });

// // export const signInWithGoogle = () => auth.signInWithRedirect(provider);

// export { firebase, auth }