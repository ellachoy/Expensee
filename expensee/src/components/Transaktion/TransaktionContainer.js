import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Service/firebase'
import TransaktionItem from './TransaktionItem'


export default function TransaktionDB() {
    const [finance, setFinance] = useState([])
    const[showItems,setShowItems] = useState(7)

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
            <h3 className="transaktionTitle">Letzten Transaktionen</h3>
            <p onClick={()=>setShowItems(finance.length)}>Show full</p>
            </div> 
            {finance.slice(0,showItems).map((elt) => (
                <TransaktionItem  key={elt.id} 
                income={elt.category=='Gehalt'||elt.category=='Sonstige Einnahmen'? true:false} 
                description={elt.description} 
                date={`${elt.date.slice(8,10)}.${elt.date.slice(5,7)}.${elt.date.slice(0,4)}  ${elt.date.slice(11,16)}`} 
                value={elt.category=='Gehalt'||elt.category=='Sonstige Einnahmen'?elt.amount:`-${elt.amount}`}/>
            ))}
            <div className="button" onClick={()=>setShowItems(showItems+7)}> 
            MEHR TRANSAKTIONEN
            </div>
        </div>
    );
}