import './Header.scss'
import {Link, Navigate} from 'react-router-dom'
import {useState} from "react";
import { firebase } from '../../Service/firebase'


const Header = (props) => {

    const [isOpen, setState] = useState(false);
  
    return ( 
        <div className="NavElement">
            <section className="menu">
            <div className="hamburger" 
            onClick={()=>setState(true)} style={{display: isOpen?'none':'block'}}>
                ☰
            </div>
            <h3>{props.title}</h3>
            </section>
        
        <div className='sidebar'style={{width: isOpen?'70vw':'0vw'}}>
        
            <div className="closeButton" 
            onClick={()=>setState(false)} style={{display: isOpen?'block':'none'}}>
                ✕
            </div>
            <div className="button_container">
            <Link to="/home" >
                <div className="homeButton" 
                onClick={()=>setState(false)}
                >
                        <p className="sideText">
                            { isOpen ?'Home':''}
                        </p>
                             
                        </div>
            </Link>
            <Link to="/add">
                <div className="addButton" onClick={()=>setState(false)} 
                >
                        <p className="sideText">
                            { isOpen ?'Umsätze':''}
                        </p>
                </div>
            </Link>
            <Link to="/charts">
                <div className="chartsButton" onClick={()=>setState(false)}
                style={{}}>
                        <p className="sideText">
                            { isOpen ?'Übersicht':''}
                        </p>
                </div>
            </Link>
            <Link to="/">
                <div className="addedButton"  onClick={() => firebase.auth().signOut()} onClick={()=>setState(false)}
                style={{}}>
                        <p className="sideText">
                            { isOpen ?'Logout':''}
                        </p>
                </div>
            </Link>
            </div>
            
            </div>
        </div>
     );
    }

 
export default Header;