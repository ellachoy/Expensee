import { useCollection } from '../../hooks/useCollection'
import './Transaktion.scss'

const AllFinance = () => {
    const { documents } = useCollection('finance')
    return (
        <div className="transaktionItem"> 
            {documents && documents.map(elt =>
                <div key={elt.id}>
                    <div className="circleContainer">
                        <div className="circle" style={{backgroundColor:elt.income?"#00FF00":"#F63535"}}>
                    </div>
                    </div>
                    <ul>
                        <li className="description">
                            {elt.description}
                        </li>
                        <li className="date">
                            {elt.date}
                        </li>
                    </ul>
                    <div className="valueContainer">
                        <p className="value">
                            {elt.amount}€
                        </p>
                    </div>
                </div>
            )
            }
        </div>
    );
}


export default AllFinance;