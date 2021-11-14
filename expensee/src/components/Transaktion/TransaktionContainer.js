import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Service/firebase'
import TransaktionItem from './TransaktionItem'


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
        <div className="transaktionContainer">
               <div className="transaktionHeader">
            <h3>Letzten Transaktionen</h3>
            <p>Show full</p>
            </div> 
            {finance.map((elt) => (
                <TransaktionItem  key={elt.id} 
                income={elt.category=='Einkommen'? true:false} 
                description={elt.description} 
                date={elt.date} 
                value={elt.category=='Einkommen'?elt.amount:`-${elt.amount}`}/>
            ))}
            <div className="button">
            MEHR TRANSAKTIONEN
            </div>
        </div>
    );
}