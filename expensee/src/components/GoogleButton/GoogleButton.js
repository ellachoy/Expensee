import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./GoogleButton.scss";
const GoogleButton = () => {
    return (

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="./Login/login.js"><div>Login</div></Link>
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