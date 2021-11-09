import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../../App.scss'; 
const Email = () => {
    return (

            <div>
                <h1>Expensee</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><div>Login</div></Link>
                        </li>
                        <li>
                            <Link to="/"><div>Account erstellen mit Email</div></Link>
                        </li>
                    </ul>
                </nav>

                
                
            </div>
     
    );
}

export default Email;