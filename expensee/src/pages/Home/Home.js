import './Home.scss';
import Header from '.../components/Header/Header.js'
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