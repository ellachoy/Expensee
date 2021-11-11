import './Home.scss';
import Header from '../../components/Navbar/Header.js';
import Footer from '../../components/Footer/Footer';
import TransaktionContainer from '../../components/Transaktion/TransaktionContainer'


const Home = () => {
    return (  
        <div>
            <Header title="Übersicht"/>
            <TransaktionContainer/>
            <Footer/>
        </div>
    );
}

export default Home;