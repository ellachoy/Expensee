import './Transaktion.scss'
import TransaktionItem from './TransaktionItem'

const TransaktionContainer = () => {
    return ( 
        <div>
        <div className="transaktionContainer">
        <div className="transaktionHeader">
            <h3>Letzten Transaktionen</h3>
            <p>Show full</p>
        </div>
        <TransaktionItem income={true} description='Lohn' date="24.10.2021" value='2000'  />
        <TransaktionItem income={false} description='Rewe' date="24.10.2021" value='-2000'  />
        <TransaktionItem income={false} description='Rewe' date="24.10.2021" value='-2000'  />
        <TransaktionItem income={false} description='Rewe' date="24.10.2021" value='-2000'  />
        <TransaktionItem income={false} description='Rewe' date="24.10.2021" value='-2000'  />
        <TransaktionItem income={false} description='Rewe' date="24.10.2021" value='-2000'  />
        <TransaktionItem income={true} description='Lohn' date="24.10.2021" value='2000'  />
        </div>
        <div className="button">
            MEHR TRANSAKTIONEN
        </div>
        </div>
    );
}
 
export default TransaktionContainer;