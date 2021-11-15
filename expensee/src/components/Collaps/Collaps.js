import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState,useContext } from 'react'
import { db } from '../../Service/firebase'
import './Collaps.scss'
import { AmountContext } from '../../contexts/AmountContext'
import {query, where } from "firebase/firestore";
import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsItem from './CollapsItem'

const App = () => {
    const [finance, setFinance] = useState([])
    const{einkommen,setEinkommen,ausgaben,setAusgaben,sparen,setSparen,sonstiges,setSonstiges}=useContext(AmountContext)

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
    <Collapsible trigger={`Einkommen: ${einkommen} €`}>
    {finance.map((elt) => ( 
        elt.category=='Einkommen'? 
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>

    </section>
    <section className='Ausgaben'>
    <Collapsible trigger={`Ausgaben: ${ausgaben} €`} className='Ausgaben'>
    {finance.map((elt) => (
    elt.category=='Ausgaben'?
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    </section>

    <section className='Sparen'>
    <Collapsible trigger={`Sparen: ${sparen} €`} className='Sparen'>
    {finance.map((elt) => (
    elt.category=='Sparen'?
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    </section>

    <section className='Sonstiges'>
    <Collapsible trigger={`Sonstiges: ${sonstiges} €`} className='Sonstiges'>
    {finance.map((elt) => (
    elt.category=='Sonstiges'?
        <CollapsItem key={elt.id} description={elt.description} value={elt.amount}/>:null
        ))}
    </Collapsible>
    </section>
      </div>

  );
};

export default App;