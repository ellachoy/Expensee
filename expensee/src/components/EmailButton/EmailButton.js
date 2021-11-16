import { Link } from "react-router-dom";
import "./EmailButton.scss";

import "./Login/config/firebase_config.js";
import "./Login/login.js";
import "./Login/register.js";




const EmailButton = () => {
    return (

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="./Login/login.js"><div>Login</div></Link>
                        </li>
                        <li>
                            <Link to="./Login/register.js"><div>Account erstellen mit Email</div></Link>
                        </li>
                    </ul>
                </nav> 
            </div>
     
    );
}

export default EmailButton;