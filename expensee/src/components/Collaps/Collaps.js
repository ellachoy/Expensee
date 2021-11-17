import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState,useContext } from 'react'
import { db } from '../../Service/firebase'
import './Collaps.scss'
import { AmountContext } from '../../contexts/AmountContext'
import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsItem from './CollapsItem'

const App = () => {
    const [finance, setFinance] = useState([])
    const{einkommen,ausgaben,sparen,sonstiges,gehalt,sonstigeEinnahmen,lebensmittel,shopping,wohnen,mobilitaet,freizeit,restaurant,versicherung,geldanlage,sonstigesSparen}=useContext(AmountContext)

    // console.log(finance)
    useEffect(
        () => 
            onSnapshot(collection(db, "finance"),(snapshot) => 
                setFinance(snapshot.docs.map((doc) => doc.data())),
            ),

        []
    );


    
  return (
      <div className="collapsContainer">
    <section className="Einkommen">
    <Collapsible trigger={`Einkommen: ${einkommen.toFixed(2)} €`}>
     <CollapsItem  description={'Gehalt'} value={gehalt.toFixed(2)}/>
     <CollapsItem  description={'Sonstige Einnahmen'} value={sonstigeEinnahmen.toFixed(2)}/>
    </Collapsible>

    </section>
    <section className='Ausgaben'>
    <Collapsible trigger={`Ausgaben: ${ausgaben.toFixed(2)} €`} className='Ausgaben'>
     <CollapsItem  description={'Lebensmittel'} value={lebensmittel.toFixed(2)}/>
     <CollapsItem  description={'Shopping'} value={shopping.toFixed(2)}/>
     <CollapsItem  description={'Wohnen'} value={wohnen.toFixed(2)}/>
     <CollapsItem  description={'Mobilität'} value={mobilitaet.toFixed(2)}/>
     <CollapsItem  description={'Freizeit'} value={freizeit.toFixed(2)}/>
     <CollapsItem  description={'Restaurant'} value={restaurant.toFixed(2)}/>
     <CollapsItem  description={'Versicherung'} value={versicherung.toFixed(2)}/>
    </Collapsible>
    </section>

    <section className='Sparen'>
    <Collapsible trigger={`Sparen: ${sparen.toFixed(2)} €`} className='Sparen'>
    <CollapsItem  description={'Geldanlage'} value={geldanlage.toFixed(2)}/>
    <CollapsItem  description={'Sonstiges Sparen'} value={sonstigesSparen.toFixed(2)}/>
    </Collapsible>
    </section>

    <section className='Sonstiges'>
    <Collapsible trigger={`Sonstiges: ${sonstiges.toFixed(2)} €`} className='Sonstiges'>
     <CollapsItem  description={'Sonstiges'} value={sonstiges.toFixed(2)}/>
    </Collapsible>
    </section>
      </div>

  );
};

export default App;