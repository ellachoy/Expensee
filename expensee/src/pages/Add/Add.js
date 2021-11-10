import Footer from '../../components/Footer/Footer';
import './Add.scss';
import { Link } from 'react-router-dom';
import shapeImg from '../../img/shape.png'
const Add = () => {
    return (  
        <div>
            <main>
                <section className="wallet">
                    <Link to='/home'>
                    <img src={shapeImg} alt='#' />
                    </Link>
                    <h1>Umsätze</h1>
                </section>
            </main>
            <Footer/>
        </div>
        
    );
}
 
export default Add;