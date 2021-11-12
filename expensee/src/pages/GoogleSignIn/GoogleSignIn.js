import React from 'react'
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./GoogleSignIn.scss";
import { firebase } from '../../Service/firebase'

const GoogleSignIn = () => {
    const SignInWithFirebase = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(google_provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
            <div>
                <Header />
                <h1 id="EmailH1">Expensee</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#"><div onClick={SignInWithFirebase}>Login with Google</div></a>
                        </li>
                        <li>
                            <Link to="./Login/register.js"><div>Account erstellen mit Google</div></Link>
                        </li>
                    </ul>
                </nav> 
                <Footer />
            </div>
    );
    }

export default GoogleSignIn;