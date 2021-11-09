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

// const Footer = () => {
//     return ( 
       
//         <footer className="footer">
//             <div className="footer-container">
//                 <ul>
//                     <li> <NavLink exact to="/Add">
//                         <img src={wallet} className="wallet" alt="wallet" /> 
//                         </NavLink>
//                     </li>
//                     <li> <NavLink exact to="/Home">
//                          <img src={homebtn} className="homebtn" alt="home" />
//                          </NavLink>
//                     </li>
//                     <li> <NavLink exact to="/Charts"> 
//                          <img src={chart} className="charts" alt="" />
//                          </NavLink>
//                     </li>
//                 </ul>
//             </div>
            
//             </footer>

        
//     );
// }
 
// export default Footer;

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            homeIsActive:false,
            addIsActive:false,
            chartsIsActive:false,
         };
    }
    home= () => { //3 Funktionen die onClick dafür sorgen ,dass das aktive div rot wird und die anderen transparent
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
// ==============================================================
// export default Footer;

// class Footer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.switchImage= this.switchImage.bind(this);
//         this.state = { 
//             currentImage:0,
//             images:[
//                 {src: '../../img/charts.png'},
//                 {src: '../../img/chart_active.png'},
//                 {src: '../../img/home_button.png'},
//                 {src: '../../img/home_button_active.png'},
//                 {src: '../../img/wallet.png'},
//                 {src: '../../img/wallet_active.png'}
//             ]
//          };
//     }
//     switchImage(){
//         if(this.state.currentImage < this.state.images.length -1){
//             this.setState({
//                 currentImage: this.state.currentImage +1
//             });
//         } else{
//             this.setState({
//                 currentImage:0
//             });
//         }
//         return this.currentImage;
//     }
//     componentDidMount(){
//         setInterval(this.switchImage,1000);
//     }
//     render() { 
//         return ( 
//             <footer className="footer">
//             <div className="footer-container">
//                 <ul>
//                     <li> <NavLink exact to="/Add">
//                         <img src={this.state.images[this.state.currentImage]} className="wallet" alt="wallet" /> 
//                         </NavLink>
//                     </li>
//                     <li> <NavLink exact to="/Home">
//                          <img src={this.state.images[this.state.currentImage]}  className="homebtn" alt="home" />
//                          </NavLink>
//                     </li>
//                     <li> <NavLink exact to="/Charts"> 
//                          <img src={this.state.images[this.state.currentImage]}  className="charts" alt="" />
//                          </NavLink>
//                     </li>
//                 </ul>
//             </div>
            
//             </footer>
//          );
//     }
// }
 
// export default Footer;