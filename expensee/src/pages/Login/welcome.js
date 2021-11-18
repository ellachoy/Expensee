import "./welcome.scss";
import React from 'react';
import { Link, useNavigate,useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Bg from '../../img/background.png'



const Welcome = () => {
    // routeChange=()=> {
    //     let path = `/home`;
    //     let history = useHistory();
    //     history.push(path);
    //   }
        function reloadPage() {
            var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
            // Current Time //
            var now = Date.now();
            // Total Process Lenght as Minutes //
            var tenSec = 10 * 1000;
            // End Time of Process //
            var plusTenSec = currentDocumentTimestamp + tenSec;
            if (now > plusTenSec) {
                window.location.reload();
            }
        } 
        
const onClickCollect =()=>{
    reloadPage()

    }

        

const { currentUser } = useAuth()


    return (
        <div>
            <div className="welconti">
                <h2 className="welc">Willkomen</h2>
                <img className="userimg" src={ currentUser.photoURL} alt="" />
                <h3 className="welcomeUser">{ currentUser.displayName }</h3>
                <Link to="/home" className="losg"
                // onClick={onClickCollect} 
                >Los geht's</Link>
            </div>
            <div className="waveconti">
            <img id="footerBg" src={Bg}  alt="" />
        </div>
        </div>
    );
}

export default Welcome;
