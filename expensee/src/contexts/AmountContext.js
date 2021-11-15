import { useState,createContext,useEffect } from 'react';
import { onSnapshot, collection } from '@firebase/firestore';
import { db } from '../Service/firebase'

export const AmountContext=createContext()

const AmountContextProvider = ({children}) => {
   
        const [finance, setFinance] = useState([])
        const[einkommen,setEinkommen]= useState([0])
        const[ausgaben,setAusgaben]= useState([0])
        const[sparen,setSparen]= useState([0])
        const[sonstiges,setSonstiges]= useState([0])

        console.log(finance)
    
        useEffect(
            () => 
                onSnapshot(collection(db, "finance"),(snapshot) => {
                    setFinance(snapshot.docs.map((doc) => doc.data()))
                    
                    }
                ),
    
            []
        );
        
    useEffect(() => {
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Einkommen'){
                sum+=Number(elt.amount)
            }
                })
                setEinkommen(sum);
    }, [finance]);

    useEffect(() => {
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Ausgaben'){
                sum+=Number(elt.amount)
            }
                })
                setAusgaben(sum);
    }, [finance]);

    useEffect(() => {
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Sparen'){
                sum+=Number(elt.amount)
            }
                })
                setSparen(sum);
    }, [finance]);

    useEffect(() => {
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Sonstiges'){
                sum+=Number(elt.amount)
            }
                })
                setSonstiges(sum);
    }, [finance]);
        

        // setEinkommen(finance.map((elt)=>(
        //     elt.category=='Einkommen'? einkommen+= elt.amount:null
        // )
        // ))


    return ( 
        <AmountContext.Provider value={{einkommen,setEinkommen,ausgaben,setAusgaben,sparen,setSparen,sonstiges,setSonstiges}}>
            {children}
        </AmountContext.Provider>

     );
}

export default AmountContextProvider;
 
