import React from 'react';
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

import './Footer.scss';
import wallet from '../../img/wallet.png'
import walletActive from '../../img/wallet_active.png'
import homebtn from '../../img/home_button.png'
import homebtnActive from '../../img/home_button_active.png'
import chart from '../../img/charts.png'
import chartActive from '../../img/chart_active.png'
import backgroundNav from '../../img/background_nav.png'


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            homeIsActive:false,
            addIsActive:false,
            chartsIsActive:false,
         };
    }
    home= () => { 
        this.setState({homeIsActive:true});
        this.setState({addIsActive:false});
        this.setState({chartsIsActive:false});
    }
    add= () => {
        this.setState({homeIsActive:false});
        this.setState({addIsActive:true});
        this.setState({chartsIsActive:false});
    }
    charts= () => {
        this.setState({homeIsActive:false});
        this.setState({addIsActive:false});
        this.setState({chartsIsActive:true});
    } 
    render() { 
        return ( 
            <footer className="footer">
                
              <img src={backgroundNav} className="nav-Bg"  alt="bBg" />
                    
            <div className="footer-container">
                <ul>
                    <li> <NavLink exact to="/Add" onClick={this.add}>
                        <img src={this.state.addIsActive?`${walletActive}`:`${wallet}`} className="wallet" alt="wallet" /> 
                        </NavLink>
                    </li>
                    <li> <NavLink exact to="/Home"onClick={this.home}>
                    <img src={this.state.homeIsActive?`${homebtnActive}`:`${homebtn}`}  className="homebtn" alt="home" />
                         </NavLink>
                    </li>
                    <li> <NavLink exact to="/Charts"onClick={this.charts}> 
                    <img src={this.state.chartsIsActive?`${chartActive}`:`${chart}`}  className="charts" alt="" />
                         </NavLink>
                    </li>
                </ul>
            </div>
            
            </footer>
         );
    }
}
 
export default Footer;
