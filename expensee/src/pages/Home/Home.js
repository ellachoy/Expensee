import './Home.scss';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (  
        <div>
            <Header/>
            <Footer/>
            <Header title="Übersicht"/>
        </div>
    );
}
 
export default Home;