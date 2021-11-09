import './Header.scss'
import {Link} from 'react-router-dom'
function Header (){
    return(
    <header>
        <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
            <a href="#">Home</a>
            <a href="#">Einnahmen</a>
            <a href="#">Charts</a>
            <a href="#">Logout</a>
        </div>

        <div id="main">
            <button className="openbtn" onclick="openNav()">☰</button>  
            <h2>Collapsed Sidebar</h2>
            <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
        </div>
    </header>
    )


}
export default Header;