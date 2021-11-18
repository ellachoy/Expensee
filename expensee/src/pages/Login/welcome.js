import "./welcome.scss";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Bg from '../../img/background.png'


const Welcome = () => {


const { currentUser } = useAuth()


    return (
        <div>
            <div className="welconti">
                <h2 className="welc">Willkomen</h2>
                <img className="userimg" src={ currentUser.photoURL} alt="" />
                <h3 className="welcomeUser">{ currentUser.displayName }</h3>
                <button className="losg" href="">Los geht's</button>
            </div>
            <div className="waveconti">
            <img id="footerBg" src={Bg}  alt="" />
        </div>
        </div>
    );
}

export default Welcome;
