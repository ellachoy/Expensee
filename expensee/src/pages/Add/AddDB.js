import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import './Add.scss';
import shapeImg from '../../img/shape.png'
import { FooterContext } from '../../contexts/FooterContext'
import React ,{useContext} from 'react'
import { db } from "../../Service/firebase"
import { collection, getDocs, addDoc } from "firebase/firestore"

function AddDB() {
    // Diese Funktionen setzen das richtige Bild auf gelb onload
    const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
    setAddIsActive(true)
    setHomeIsActive(false)
    setChartsIsActive(false)
// ======================================
// =========== FIREBASE ADD =============
    const [newCategory, setNewCategory] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newAmount, setNewAmount] = useState(0)
    const [newDate, setNewDate] = useState("")

    const [finance, setFinance] = useState([])
    const financeCollectionRef = collection(db, "finance")

    const createFinance = async () => {
        await addDoc(financeCollectionRef, {amount: newAmount, category: newCategory, date: newDate, description: newDescription});
    }


// ======================================
// ======================================
    return ( 
    <main>
        <section className="wallet">
        <Link to='/home'>
                <img src={shapeImg} alt='shape' />
                </Link>
                <h1>Umsätze</h1>
                <div  className="add-form"> 
                    <input
                        type='text'
                        name='description'
                        list='Kategorie'
                        placeholder='Kategorie'
                        onChange={(event) => {
                            setNewCategory(event.target.value)}}
                    />
                    <input
                        type='text'
                        name='description'
                        list='Beschreibung'
                        placeholder='Beschreibung'
                        onChange={(event) => {
                            setNewDescription(event.target.value)}}
                    />
                    <input
                        type='number'
                        name='price'
                        placeholder='Geldbetrag'
                        onChange={(event) => {
                            setNewAmount(event.target.value)}}
                    />
                    <br />
                    <input
                        type='text'
                        name='created_at'
                        placeholder='Datum'
                        onChange={(event) => {
                            setNewDate(event.target.value)}}
                    />{' '}
                    
                    <button onClick={createFinance}>Abschicken</button>
                </div>

        </section>
        <Footer/>
    </main>

    );
}

export default AddDB;

