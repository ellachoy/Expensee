import './Header.scss'
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            isOpen:false,
         }
     
    }
    handleIsOpen= () => { //toggle um die sidebar zu öffnen und zu schließen 
        this.setState({isOpen:!this.state.isOpen});
    }
    render() { 
      
    return(
    <header>
        <div  className="sidpanel" style={{width:this.state.isOpen?'50vw':'0vw'}}>
            <a href="javascript:void(0)" className="closebtn" onClick={this.handleIsOpen}>×</a>
            <Link to="/home">Home</Link>
            <Link to="/add">Einnahmen</Link>
            <Link to="/charts">Charts</Link>
            <Link to="#">Logout</Link>
        </div>

        <div id="main">
            <button className="openbtn" onClick={this.handleIsOpen}>☰</button>  
        </div>
    </header>
    )

    }
}
export default Header;