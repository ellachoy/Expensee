import './Transaktion.scss'
import { useState, useEffect } from 'react'
import { db } from "../../Service/firebase"
import { collection, getDocs } from "firebase/firestore"

function TransaktionDb() {
    const [finance, setFinance] = useState([])
    const financeCollectionRef = collection(db, "finance")
    useEffect(() => {

        const getFinance = async () => {
            const data = await getDocs(financeCollectionRef);
            setFinance(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }

        getFinance()
    }, [])
    return ( 
        <div className="transaktionItem"> 
            {finance.map((finance) => {
                return <div>
                    <div className="circleContainer">
                        <div className="circle" style={{backgroundColor:finance.income?"#00FF00":"#F63535"}}>
                    </div>
                    </div>
                    <ul>
                        <li className="description">
                            {finance.description}
                        </li>
                        <li className="date">
                            {finance.date}
                        </li>
                    </ul>
                    <div className="valueContainer">
                        <p className="value">
                            {finance.amount}€
                        </p>
                    </div>
                </div>;
            })} 
        </div>
    );
}

export default TransaktionDb;



// const TransaktionItem = (props) => {
//     return ( 
//         <div className="transaktionItem">
//             <div className="circleContainer">
//                 <div className="circle" style={{backgroundColor:props.income?"#00FF00":"#F63535"}}>

//                 </div>
//             </div>
//             <ul>
//                 <li className="description">
//                     {props.description}
//                 </li>
//                 <li className="date">
//                     {props.date}
//                 </li>
//             </ul>
//             <div className="valueContainer">
//                 <p className="value">
//                     {props.value}€
//                 </p>
//             </div>
//         </div>
//      );
// }

// export default TransaktionItem;