import {Link } from "react-router-dom";
import "./GoogleButton.scss";
import { signInWithGoogle } from '../../Service/firebase'
import firebase from '../../Service/firebase'

const GoogleButton = ({ user } ) => {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="#"><div onClick={signInWithGoogle}>Login with Google</div></a>
                        </li>
                        <li>
                            <Link to="./Login/register.js"><div>Account erstellen mit Google</div></Link>
                        </li>
                    </ul>
                </nav> 
            </div>
    );
}

export default GoogleButton;