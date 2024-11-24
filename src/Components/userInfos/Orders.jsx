
import { doc, setDoc ,getDoc, collection} from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from "../../firebase/firebase"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

//import {useCollectionData} from 'react-firebase-hooks'
import {useCollectionData, useDocumentData} from 'react-firebase-hooks/firestore'
function Orders() {
  //  const ref=doc(db,"userInfo",user.uid);
   const [user,isLoading]=useAuthState(auth);
    //const [data]=useDocumentData(ref);
   
// useEffect(()=>{
//     if(user){
       


// console.log(data);
//     }
// },[user])


  //  const [order, setOrder] = useState("")
//     const [user] = useAuthState(auth)
// const [data,setData]=useState([])
// const myCollection = collection(db,"userInfo")
// const ref= doc(myCollection,user.uid);


//  const getData=async ()=>{
// if(!user){
//     return;

// }

//        const response = await getDoc(ref)
//        const {order}= response.data()
//     console.log(order);
    
       
//  }
//     useEffect(()=>{
//     // const returnedData= 

//      // getData()




//     },[user])
    
// const {basket}=useSelector((state=> state.basket))




//     const saveUserData =(e) => {

// //!     doc' a erişmek için bir referans oluşturduk.
// if(!basket || !user) return;
      
//         e.preventDefault()
      
//       basket.forEach(product => {
//  setDoc(ref,product).then()
        
//       });
//      ///   const ref = doc(db, "userInfo", user.uid);
//         //todo //  referansı verip ikinci parametresine dökümana eklenecek bilgiyi verdim.
 


//     }
// if(isLoading){
//     return (<div className=''>
// <div className='order'>Loading</div>

        
//     </div>)
// }
   
    
    return (
        <div className='flex items-center justify-center h-full mt-14'>
<h2 >Adreslerim</h2> 
<p>
    <button className='bg-red-300' > gönder</button>
</p>
           
        </div>
    )
}

export default Orders