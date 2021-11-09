import React from 'react';
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

import './Footer.scss';
import wallet from '../../img/wallet.png'
import homebtn from '../../img/home_button_active.png'
import chart from '../../img/charts.png'

const Footer = () => {
    return ( 
       
        <footer className="footer">
            <div className="footer-container">
                <ul>
                    <li> <NavLink exact to="/Einnahme">
                        <img src={wallet} className="wallet" alt="wallet" /> Add
                        </NavLink>
                    </li>
                    <li> <NavLink exact to="/">
                         <img src={homebtn} className="homebtn" alt="home" />Home
                         </NavLink>
                    </li>
                    <li> <NavLink exact to="/Static"> 
                         <img src={chart} className="charts" alt="" />Charts
                         </NavLink>
                    </li>
                </ul>
            </div>
            
            </footer>

        
    );
}
 
export default Footer;