import { Link } from 'react-router-dom';
import { useState, useEffect  } from 'react';
// import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import './Add.scss';
import shapeImg from '../../img/shape.png'
import ModalAdd from '../../components/Modal/ModalAdd';
import {optionData, descriptionData} from '../../data/Add.data'
import { FooterContext } from '../../contexts/FooterContext'
import React ,{useContext} from 'react'
import { db } from "../../Service/firebase"
import { collection, addDoc } from "firebase/firestore"

const Add = () => {
  //Diese Funktionen setzen das richtige Bild auf gelb onload
  const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
  setAddIsActive(true)
  setHomeIsActive(false)
  setChartsIsActive(false)
  //==========================================================
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  const [inputs, setInputs] = useState({
    category: '',
    description: '',
    price: '',
    created_at: '',
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    let close;
    if (open) {
      close = setTimeout(() => {
        setOpen(false);
        setInputs({ category: '', description: '', price: '', created_at: '' });
      }, 4000);
    }
    return () => clearTimeout(close);
  }, [open]);
  // ======================================
// =========== FIREBASE ADD =============
const [newCategory, setNewCategory] = useState("")
const [newDescription, setNewDescription] = useState("")
const [newAmount, setNewAmount] = useState(0)
const [newDate, setNewDate] = useState("")

const financeCollectionRef = collection(db, "finance")

const createFinance = async () => {
    await addDoc(financeCollectionRef, {amount: newAmount, category: newCategory, date: newDate, description: newDescription});
}
const handleClose = () => {
  setOpen(false);
  setError(null);
};


// ======================================

  let valueChoice = optionData.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });
  
  return ( 
    <>
      <main>
        <section className="wallet">
            <Link to='/home'>
                <img src={shapeImg} alt='shape' />
                </Link>
                <h1>Umsätze</h1>
            <div  className="add-form"> 
              <select 
                placeholder='Kategorie'
                onChange={(event) => {
                  setNewCategory(event.target.value)}}  
                required> 
                {valueChoice} Kategorie
              </select> 
              {' '}
              
              <input
                type='text'
                name='description'
                list='Beschreibung'
                placeholder='Beschreibung'
                onChange={(event) => {
                  setNewDescription(event.target.value)}}
                required
              />
              <input
                type='number'
                name='price'
                placeholder='Geldbetrag'
                onChange={(event) => {
                  setNewAmount(Number.parseFloat(event.target.value))}}
                required
              />{' '}
              <br />
              <input
                type='datetime-local'
                name='created_at'
                placeholder='Datum'
                onChange={(event) => {
                  setNewDate(event.target.value)}}
                required
              />{' '}
          
              <button onClick={createFinance}>Abschicken</button>
            </div>
           <ModalAdd  open={open} onClose={handleClose} data={inputs} />
        </section>
       
      </main>
      <Footer/>
</>
  );
}

export default Add;

