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
        const[gehalt,setGehalt]= useState(0)
        const[sonstigeEinnahmen,setSonstigeEinnahmen]= useState(0)
        const[lebensmittel,setLebensmittel]= useState(0)
        const[shopping,setShopping]= useState(0)
        const[wohnen,setWohnen]= useState(0)
        const[mobilitaet,setMobilitaet]= useState(0)
        const[freizeit,setFreizeit]= useState(0)
        const[restaurant,setRestaurant]= useState(0)
        const[versicherung,setVersicherung]= useState(0)
        const[geldanlage,setGeldanlage]= useState(0)
        const[sonstigesSparen,setSonstigesSparen]= useState(0)
        
        

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
            if(elt.category=='Gehalt'||elt.category=='Sonstige Einnahmen'){
                sum+=Number(elt.amount)
            }
                })
                setEinkommen(sum);
    }, [finance]);

    useEffect(() => {
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Lebensmittel'||elt.category=='Shopping'||elt.category=='Wohnen'||elt.category=='Mobilität'||elt.category=='Freizeit'||elt.category=='Restaurant'||elt.category=='Versicherungen'){
                sum+=Number(elt.amount)
            }
                })
                setAusgaben(sum);
    }, [finance]);

    useEffect(() => {
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Geldanlage'||elt.category=='Sonstiges Sparen'){
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

    useEffect(() => {
        let sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0,sum8=0,sum9=0,sum10=0,sum11=0;
        finance.forEach((elt)=>{ //Notiz an Erik( mich selbst) es wäre viel kürzer mit Switch Case c(^:
            console.log(elt)
            
            if(elt.category=='Gehalt'){
                sum1+=Number(elt.amount)
            }
            if(elt.category=='Restaurant'){
                sum2+=Number(elt.amount)
            }
            if(elt.category=='Sonstige Einnahmen'){
                sum3+=Number(elt.amount)
                
            }
            if(elt.category=='Lebensmittel'){
                sum4+=Number(elt.amount)
                
            }
            if(elt.category=='Shopping'){
                sum5+=Number(elt.amount)
                
            }
            if(elt.category=='Wohnen'){
                sum6+=Number(elt.amount)
                
            }
            if(elt.category=='Mobilität'){
                sum7+=Number(elt.amount)
                
            }
            if(elt.category=='Freizeit'){
                sum8+=Number(elt.amount)
                
            }
            if(elt.category=='Versicherung'){
                sum9+=Number(elt.amount)
                
            }
            if(elt.category=='Geldanlage'){
                sum10+=Number(elt.amount)
                
            }
            if(elt.category=='Sonstiges Sparen'){
                sum11+=Number(elt.amount)
                
            }
           
                })
                setGehalt(sum1)
                setRestaurant(sum2)
                setSonstigeEinnahmen(sum3)
                setLebensmittel(sum4)
                setShopping(sum5)
                setWohnen(sum6)
                setMobilitaet(sum7)
                setFreizeit(sum8)
                setVersicherung(sum9)
                setGeldanlage(sum10)
                setSonstigesSparen(sum11)

               
    }, [finance]);
        

    return ( 
        <AmountContext.Provider value={{einkommen,setEinkommen,ausgaben,setAusgaben,sparen,setSparen,sonstiges,setSonstiges,gehalt,sonstigeEinnahmen,lebensmittel,shopping,wohnen,mobilitaet,freizeit,restaurant,versicherung,geldanlage,sonstigesSparen}}>
            {children}
        </AmountContext.Provider>

     );
}

export default AmountContextProvider;
 
