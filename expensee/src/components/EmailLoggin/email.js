import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../../App.scss'; 
const Email = () => {
    return (

            <div>
                <h1>Expensee</h1>
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

export default Email;