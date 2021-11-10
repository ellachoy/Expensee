import './Home.scss';
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';


const Home = () => {
    return (  
        <div>
            <Header />
            <p>Willkommen bei</p>
            <h1>Expensee</h1>
            <Button />
            <Footer/>
            <Header title="Übersicht"/>
    
            <Footer/>
        </div>
    );
}

export default Home;