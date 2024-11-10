import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import pay from '../icons/pay.png'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, clearBasket } from '../redux/basketSlice'
import { toast } from 'react-toastify'
 function Payments() {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(calculateBasket())
  },[])
const {totalAmount}=useSelector((state)=> state.basket)
  const handleForm=(e)=>{
    e.preventDefault()
  dispatch(clearBasket());
  dispatch(calculateBasket())
  setTimeout(()=>{
    dispatch()
    toast.success(<div>
      <p>siparişin alındı</p> <br />  <button>Siparişlerim</button>
    </div>,
    
    )
  }
,1000)
 
  }



  return (
    <div className='flex  items-center justify-center'>
<Helmet>
  <title>Ödeme </title>
  <link rel="shortcut icon" href={pay} type="image/x-icon" />
</Helmet>
<form  className='flex flex-col items-center justify-center  w-2/4 p-8 h-96 gap-5 bg-slate-200 rounded-lg' onSubmit={handleForm}>

<input className='rounded-md border-red-500 border-solid w-2/3 h-9 ' type="text" placeholder='Kart sahibinin Adı ve soyadı' required/>
<input type="text" placeholder='Kart Numrası' className='w-2/3 h-9 rounded-md' required/>
<div className='flex gap-4 justify-between w-2/3 '>
<input type="text" placeholder='Son kulanma tarihi' className='rounded-md h-9' required/>
<input type="password" placeholder='CVV' className='rounded-md h-9 w-2/3' required/>

</div>
<p> Toplam tutar: {totalAmount}</p>
<button type="submit" className='bg-green-700 text-2xl text-white rounded-xl text-center p-2 w-2/3 hover:bg-green-600 ' > Onayla</button>
</form>


    </div>
  )
}
export default Payments