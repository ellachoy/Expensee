import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Service/firebase'
import './Collaps.scss'
import {query, where } from "firebase/firestore";
import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsItem from './CollapsItem'
const App = () => {
    const [finance, setFinance] = useState([])
    const[einkommen,setEinkommen]= useState([0])
    const[ausgaben,setAusgaben]= useState([0])
    const[sparen,setSparen]= useState([0])
    const[sonstiges,setSonstiges]= useState([0])

    console.log(finance)
    useEffect(
        () => 
            onSnapshot(collection(db, "finance"),(snapshot) => 
                setFinance(snapshot.docs.map((doc) => doc.data())),
            ),

        []
    );
    const financeRef = collection(db, "finance");
    const q = query(financeRef, where("category", "==", 'Einkommen'));
    console.log(q);

    
  return (
      <div className="collapsContainer">
    <section className="Einkommen">
    <Collapsible trigger={`Einkommen:${einkommen}`}>
    {finance.map((elt) => (
        elt.category=='Einkommen'? 
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>

    </section>
    <section className="Ausgaben">
    <Collapsible trigger="Ausgaben" className='Ausgaben'>
    {finance.map((elt) => (
    elt.category=='Ausgaben'?
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    </section>

    <section className="Sparen">
    <Collapsible trigger="Sparen" className='Sparen'>
    {finance.map((elt) => (
    elt.category=='Sparen'?
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    </section>

    <section className="Sonstiges">
    <Collapsible trigger="Sonstiges" className='Sonstiges'>
    {finance.map((elt) => (
    elt.category=='Sonstiges'?
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    {/* <div>
    {finance.map((elt) => (
    
    elt.category=='Einkommen'?()=>einkommen+=elt.amount:
    elt.category=='Ausgaben'?()=>setAusgaben(ausgaben+elt.amount):
    elt.category=='Sparen'?()=>setSparen(sparen+elt.amount):
    // elt.category=='Sonstiges'? setSonstiges(+elt.amount):null,
    null, 
    console.log('Einkommen:'+einkommen+'Augaben:'+ausgaben+'Sparen:'+sparen+'Sonstiges:'+sonstiges)

    
       
        ))}
    </div>  */}
    </section>
      </div>

  );
};

export default App;