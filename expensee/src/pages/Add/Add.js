import Footer from '../../components/Footer/Footer';
import './Add.scss';
import { Link } from 'react-router-dom';
import shapeImg from '../../img/shape.png'
import React, { Component } from 'react';

class Add extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();
  
    onSubmit = event => {
      event.preventDefault();
      const name = this.inputRef.current.value;
      name && this.props.onAdd(name);
      this.formRef.current.reset();
    };
  
    render() {
      return (
       <> 
       <main>
           <section className="wallet">
                <Link to='/home'>
                    <img src={shapeImg} alt='shape' />
                     </Link>
                    <h1>Umsätze</h1>
                <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                        <input 
                          ref={this.inputRef}
                        type="text" name="category" list="Kategorie" placeholder="Kategorie" />
                </form>
                <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                        <input 
                       
                          ref={this.inputRef}
                        type="text" name="description" list="Beschreibung" placeholder="Beschreibung" />
                    </form>
                    <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                        <input 
                          ref={this.inputRef}
                        type="number" name="price" placeholder="Geldbetrag" />
                    </form>
                    <input type="date" name="date"  placeholder="Datum" />
                    <br />
                    <input type='submit' value='Abschicken' />

           </section>
           <Footer/>
       </main>
        
      </>
      );
    }
  }
  
  export default Add;
