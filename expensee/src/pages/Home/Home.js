import './Home.scss';
import Header from '../../components/Navbar/Header.js';
import Footer from '../../components/Footer/Footer';
import TransaktionContainer from '../../components/Transaktion/TransaktionContainer'
import { FooterContext } from '../../contexts/FooterContext'
import React ,{useContext} from 'react'

const Home = () => {
    //Diese Funktionen setzen das richtige Bild auf gelb onload
    const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
    setAddIsActive(false)
    setHomeIsActive(false)
    setChartsIsActive(true)
    //==========================================================
    return (  
        <div>
            <Header title="Übersicht"/>
            <TransaktionContainer/>
            <Footer/>
        </div>
    );
}

export default Home;