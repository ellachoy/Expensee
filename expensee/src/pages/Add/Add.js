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
                    <input type="text" name="category" list="Kategorie" placeholder="Kategorie" />
                    <br />
                    <input type="text" name="description" list="Beschreibung" placeholder="Beschreibung" />
                    <br />
                    <input type="number" name="price"  placeholder="Geldbetrag" />
                    <br />
                    <input type="date" name="date"  placeholder="Datum" />
                    <br />
                    <input type='submit' value='Abschicken' />
                </section>
            </main>
            <Footer/>
        </div>
        
    );
}
 
export default Add;