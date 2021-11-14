import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Service/firebase'
import './Collaps.scss'
import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsItem from './CollapsItem'
const App = () => {
    const [finance, setFinance] = useState([])
    const[einkommen,setEinkommen]= useState([])
    const[ausgaben,setAusgaben]= useState([])
    const[sparen,setSparen]= useState([])
    const[sonstiges,setSonstiges]= useState([])

    console.log(finance)
    useEffect(
        () => 
            onSnapshot(collection(db, "finance"),(snapshot) => 
                setFinance(snapshot.docs.map((doc) => doc.data()))
            ),
        []
    );
  return (
      <div className="collapsContainer">
    <section className="Einkommen">
    <Collapsible trigger='Einkommen'>
    {finance.map((elt) => (
        elt.category=='Einkommen'? 
        <CollapsItem description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>

    </section>
    <section className="Ausgaben">
    <Collapsible trigger="Ausgaben" className='Ausgaben'>
    {finance.map((elt) => (
    elt.category=='Ausgaben'?
        <CollapsItem description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    </section>

    <section className="Sparen">
    <Collapsible trigger="Sparen" className='Sparen'>
    {finance.map((elt) => (
    elt.category=='Sparen'?
        <CollapsItem description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    </section>

    <section className="Sonstiges">
    <Collapsible trigger="Sonstiges" className='Sonstiges'>
    {finance.map((elt) => (
    elt.category=='Sonstiges'?
        <CollapsItem description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible> 
    </section>
      </div>

  );
};

export default App;