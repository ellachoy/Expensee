import React ,{useContext} from 'react'
import { Link as NavLink } from 'react-router-dom'
// import { Link } from "react-router-dom";

import './Footer.scss'
import wallet from '../../img/wallet.png'
import walletActive from '../../img/wallet_active.png'
import homebtn from '../../img/home_button.png'
import homebtnActive from '../../img/home_button_active.png'
import chart from '../../img/charts.png'
import chartActive from '../../img/chart_active.png'
import backgroundNav from '../../img/background_nav.png'
import { FooterContext } from '../../contexts/FooterContext'


const Footer = () => {
    const{homeIsActive,setHomeIsActive,addIsActive,setAddIsActive,chartsIsActive,setChartsIsActive}=useContext(FooterContext)
  return (
    <footer className="footer">
      <img src={backgroundNav} className="nav-Bg" alt="bBg" />

      <div className="footer-container">
        <ul>
          <li>
            {' '}
            <NavLink exact to="/Add" onClick={()=>{
                setAddIsActive(true)
                setHomeIsActive(false)
                setChartsIsActive(false)
                }}>
              <img
                src={addIsActive ? `${walletActive}` : `${wallet}`}
                className="wallet"
                alt="wallet"
              />
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink exact to="/Home" onClick={()=>{
                setAddIsActive(false)
                setHomeIsActive(true)
                setChartsIsActive(false)
                }}>
              <img
                src={
                  homeIsActive ? `${homebtnActive}` : `${homebtn}`
                }
                className="homebtn"
                alt="home"
              />
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink exact to="/Charts" onClick={()=>{
                setAddIsActive(false)
                setHomeIsActive(false)
                setChartsIsActive(true)
                }}>
              <img
                src={chartsIsActive ? `${chartActive}` : `${chart}`}
                className="charts"
                alt=""
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
