
import { useDispatch, useSelector } from 'react-redux'
import '../css/Basket.css'
import { GrAdd, GrSubtractCircle } from "react-icons/gr";
import { Button } from '@mui/material';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { addToBasket, calculateBasket, removeToBasket } from '../redux/basketSlice';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import basketicon from '../icons/basket.png'
import { toast } from 'react-toastify';
import { openedLoading, stopedLoading } from '../redux/productsSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

function Basket() {
  const {basket,totalAmount}=useSelector((state)=>state.basket)
const [basketLength,setBasketLength]=useState(false)

const [user ]=useAuthState(auth)
const notify=()=>{

}
  useEffect(()=>{
    if(basket.length>0){
      setBasketLength(true)
    }
    else{
      setBasketLength(false)
    }
  },[basket])
  const dispatch=useDispatch()
  const navigate=useNavigate()
//  console.log(totalAmount);
const [count,setCount]=useState(1)

 useEffect(()=>{
  dispatch(calculateBasket())

 },[])

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Helmet>
        <title>Sepetim</title>
        <link rel="shortcut icon" href={basketicon} type="image/x-icon" />
      </Helmet>
<h3>Sepet  Detayı</h3>
{
  basket && basket.map((product)=>(
    <div className='flex items-center justify-center  w-4/5 rounded-xl relative gap-12 flex-col mb-3' style={{border:"1px solid lightgray"}} onClick={()=>{
      navigate("/product-details/"+product.id)
    }}>
      <h2 className='whitespace-nowrap overflow-hidden w-30 title'> {product.title}</h2>
      <div className='flex items-center justify-center gap-8'>
      <img className='w-20 mb-3' src={product.image} alt=""  />
      <div className='flex gap-3'>
      <GrSubtractCircle className='text-3xl cursor-pointer' onClick={(e)=>{
      

        e.stopPropagation()
        const {id ,title,image,price}=product
        const payload={
          id
        }
        if(basket.length==1&&product.count==1){
          dispatch(openedLoading())
         setTimeout(() => {
          dispatch(removeToBasket(payload))
     
          toast.dark(
           <p>Ürün silindi, sepetiniz boş.</p>
           ,{
           
            theme:"dark",
            type:'warning',
         hideProgressBar:true,
         autoClose:1000
           }
            
          )
          dispatch(calculateBasket())
          dispatch(stopedLoading())
         }, 1000);

        }else{
          dispatch(removeToBasket(payload))
        }
        dispatch(calculateBasket())
       
      }}/>
      <span className='text-3xl'>{product.count}</span>
      <IoIosAddCircleOutline className='text-3xl cursor-pointer' onClick={(e)=>{
            e.stopPropagation()
          const {id ,title,image,price,}=product
          const payload={
            id ,title,image,price,count
          }
       if(product.count<=9){
        dispatch(addToBasket(payload))
       }
    dispatch(calculateBasket())
  
      }}/>
      
      </div>
      </div>
     
      <h4 className='text-orange-300 absolute bottom-1 right-2'>${Math.floor(product.count*product.price)}</h4>
    </div>
  ))
}
<div className='w-full items-center justify-around flex mb-10'>
{ basketLength? <p className='text-2xl'>Toplam tutar :   <span className='text-orange-300'> $ {Math.floor(totalAmount)}</span></p>: <span></span>}

</div>
{
  basketLength  ? <button className='bg-orange-400 text-white p-3 rounded-2xl'
   onClick={()=>{
    if(user){
      navigate("/payments")
    }else{
      toast.warning("Lütfen önce giriş yapın.")
      navigate("/login")
    }
   }}>Sepeti onayla</button> : <p>Sepetiniz boş</p>
 }
    </div>
  )
}

export default Basket