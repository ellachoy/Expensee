import './Home.scss';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer';
import HomeButton from '../../HomeButton/HomeButton';

const Home = () => {
    return (  
        <div>
            <Header title="Übersicht"/>
            <p>Willkommen bei</p>
            <h1>Expensee</h1>
            <HomeButton />
            <Footer />

            
            
        
            
    
            <Footer/>
        </div>
    );
}

export default Home;