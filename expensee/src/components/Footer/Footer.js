import React from 'react';
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

import './Footer.scss';
import wallet from '../../img/wallet.png'
import walletActive from '../../img/wallet_active.png'
import homebtn from '../../img/home_button_active.png'
import homebtnActive from '../../img/home_button_active.png'
import chart from '../../img/charts.png'
import chartActive from '../../img/chart_active.png'

const Footer = () => {
    return ( 
       
        <footer className="footer">
            <div className="footer-container">
                <ul>
                    <li> <NavLink exact to="/Add">
                        <img src={wallet} className="wallet" alt="wallet" /> 
                        </NavLink>
                    </li>
                    <li> <NavLink exact to="/">
                         <img src={homebtn} className="homebtn" alt="home" />
                         </NavLink>
                    </li>
                    <li> <NavLink exact to="/Charts"> 
                         <img src={chart} className="charts" alt="" />
                         </NavLink>
                    </li>
                </ul>
            </div>
            
            </footer>

        
    );
}
 
export default Footer;

// class Footer extends Component {
//     static navigationOptions = {
//        header:null,
//     };
//     constructor() {
//         super();
//         this.state = { 
//             flagImage:true
//          };
//     }
//     render() { 
        
//         return ( 
//             <footer className="footer">
//                 <ul className="footer-container">
//                     <li onPress={this.changeImage}>
//                     <image source ={ this.state.flagImge === true ? require("../../img/wallet.png"): require("../../img/wallet_active.png")}></image>
//                 </li>
//                 </ul>
            
//             </footer>
           
//          );
//     }
// }
// changeImage(){
//     this.setState({
//        flagImage:!this.state.flagImage
//      });
 
//  };
 
// export default Footer;