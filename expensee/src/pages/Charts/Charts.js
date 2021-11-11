import Footer from '../../components/Footer/Footer';
import './Charts.scss';
import Header from '../../components/Header/Header'
import Collaps from '../../components/Collaps/Collaps'
import Doughnut from '../../components/Chart/DonutChart'

const Charts = () => {
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