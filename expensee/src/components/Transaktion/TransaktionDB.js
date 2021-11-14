import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Service/firebase'



export default function TransaktionDB() {
    const [finance, setFinance] = useState([])

    console.log(finance)
    useEffect(
        () => 
            onSnapshot(collection(db, "finance"),(snapshot) => 
                setFinance(snapshot.docs.map((doc) => doc.data()))
            ),
        []
    );

    return (
        <div className="transaktionItem"> 
            {finance.map((elt) => (
                <div>
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
            ))}
        </div>
    );
}