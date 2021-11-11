import './Collaps.scss'
import {Component} from 'react'


class Collaps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showMenu1:false,
            showMenu2:false,
            showMenu3:false,
            showMenu4:false
         }
    }
    showMenu1 = () => { //vier seperate Funktionen um die Menüs auf und zu zu togglen 
        this.setState(prevState => ({
            showMenu1: !prevState.showMenu1
        }))
        console.log(this.state.showMenu1)
    }
    showMenu2 = () => {
        this.setState(prevState => ({
            showMenu2: !prevState.showMenu2
        }))
        console.log(this.state.showMenu2)
    }
    showMenu3 = () => {
        this.setState(prevState => ({
            showMenu3: !prevState.showMenu3
        }))
        console.log(this.state.showMenu3)
    }
    showMenu4 = () => {
        this.setState(prevState => ({
            showMenu4: !prevState.showMenu4
        }))
        console.log(this.state.showMenu4)
    }
    render() { 
        return ( 
            <div className="Collapsible">
                <div className="Einkommen" onClick={this.showMenu1}>
                    Einkommen
                </div>
                <div className="list" style={{display:this.state.showMenu1?'block':'none'}}>
                    <div className="listItem">1</div>
                    <div className="listItem">2</div>
                    <div className="listItem">3</div>
                    <div className="listItem">4</div>
                    <div className="listItem">5</div>
                </div>
                <div className="Ausgaben" onClick={this.showMenu2}>
                    Ausgaben
                </div>
                <div className="list" style={{display:this.state.showMenu2?'block':'none'}}>
                    <div className="listItem">1</div>
                    <div className="listItem">2</div>
                    <div className="listItem">3</div>
                    <div className="listItem">4</div>
                    <div className="listItem">5</div>
                </div>
                <div className="Sparen" onClick={this.showMenu3}>
                    Sparen
                </div>
                <div className="list" style={{display:this.state.showMenu3?'block':'none'}}>
                <div className="listItem">1</div>
                    <div className="listItem">2</div>
                    <div className="listItem">3</div>
                    <div className="listItem">4</div>
                    <div className="listItem">5</div>
                </div>
                <div className="Sonstiges" onClick={this.showMenu4}>
                    Sonstiges
                </div>
                <div className="list" style={{display:this.state.showMenu4?'block':'none'}}>
                    <div className="listItem">1</div>
                    <div className="listItem">2</div>
                    <div className="listItem">3</div>
                    <div className="listItem">4</div>
                    <div className="listItem">5</div>
                </div>


            </div>
         );
    }
}
 
export default Collaps;