import './Home.scss';
import Header from '../../components/header/Header.js';
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
        </div>
    );
}
 
export default Home;