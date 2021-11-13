import './Transaktion.scss'
import TransaktionDB from './TransaktionDB'

const TransaktionDBContainer = () => {
    return ( 
        <div>
        <div className="transaktionContainer">
        <div className="transaktionHeader">
            <h3>Letzten Transaktionen</h3>
            <p>Show full</p>
        </div>
        <TransaktionDB/>
        </div>
        <div className="button">
            MEHR TRANSAKTIONEN
        </div>
        </div>
    );
}
 
export default TransaktionDBContainer;