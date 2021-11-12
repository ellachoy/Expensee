import Footer from '../../components/Footer/Footer';
import './Charts.scss';
import Header from '../../components/Navbar/Header'
import Collaps from '../../components/Collaps/Collaps'
import Doughnut from '../../components/Chart/DonutChart'
import { FooterContext } from '../../contexts/FooterContext'
import React ,{useContext} from 'react'

const Charts = () => {
        //Diese Funktionen setzen das richtige Bild auf gelb onload
        const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
        setAddIsActive(false)
        setHomeIsActive(true)
        setChartsIsActive(false)
        //==========================================================
    return (
        <div>Charts
        <Header title="Statistik"/>
        <Doughnut/>
        <Collaps/>
       
            <Footer />
        </div>
        
       
    );
}
export default Charts;