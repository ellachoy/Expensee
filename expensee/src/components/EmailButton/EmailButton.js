import { Link } from "react-router-dom";
import "./EmailButton.scss";
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