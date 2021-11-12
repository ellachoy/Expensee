import './Collaps.scss'
import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsItem from './CollapsItem'
const App = () => {
  return (
      <div className="collapsContainer">
    <section className="Einkommen">
    <Collapsible trigger="Einkommen">
        <CollapsItem category='Rewe' value='2300'/>
        <CollapsItem category='Rewe schon wieder' value='2300'/>
        <CollapsItem category='Rewe ist teuer' value='2300'/>
        <CollapsItem category='Aber das Sushi vom Rewe ist zu lecker' value='2300'/>
    </Collapsible>

    </section>
    <section className="Ausgaben">
    <Collapsible trigger="Ausgaben" className='Ausgaben'>
        <CollapsItem category='Rewe' value='2300'/>
        <CollapsItem category='Rewe schon wieder' value='2300'/>
        <CollapsItem category='Rewe ist teuer' value='2300'/>
        <CollapsItem category='Aber das Sushi vom Rewe ist zu lecker' value='2300'/>
    </Collapsible>
    </section>

    <section className="Sparen">
    <Collapsible trigger="Sparen" className='Sparen'>
        <CollapsItem category='Rewe' value='2300'/>
        <CollapsItem category='Rewe schon wieder' value='2300'/>
        <CollapsItem category='Rewe ist teuer' value='2300'/>
        <CollapsItem category='Aber das Sushi vom Rewe ist zu lecker' value='2300'/>
    </Collapsible>
    </section>

    <section className="Sonstiges">
    <Collapsible trigger="Sonstiges" className='Sonstiges'>
        <CollapsItem category='Rewe' value='2300'/>
        <CollapsItem category='Rewe schon wieder' value='2300'/>
        <CollapsItem category='Rewe ist teuer' value='2300'/>
        <CollapsItem category='Aber das Sushi vom Rewe ist zu lecker' value='2300'/>
    </Collapsible> 
    </section>
      </div>

  );
};

export default App;