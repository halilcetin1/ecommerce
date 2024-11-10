import React, { useEffect, useRef, useState } from 'react'
import Header from './Components/Header'
import Categories from './Components/Categories'


import RoutesFun from './Components/Routes'
import Containerx from './Components/Containerx'
import Loading from './Components/Loading'
import Basket from './Components/Basket'
import { Drawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { GrSubtractCircle } from 'react-icons/gr'
import { HelmetProvider } from 'react-helmet-async';
import Banner from './Components/Banner'
import { toast ,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'
import { closeMenu,  } from './redux/login'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './firebase/firebase'
import {useAuthState}  from 'react-firebase-hooks/auth'

 function App() {


const navigate=useNavigate()

const logOut=()=>{
signOut(auth).then((e)=>{
  
  toast.success("Çıkış Yapılıyor...",{
    
  })
  setTimeout(()=>{
  
    navigate("/login")
    
  },1000)
})
}



const {menu}=useSelector((state)=>state.login)


  const helmetContext={}
// document.addEventListener("click",e=>{
// if(!e.composedPath().includes(menu)){
//   menu.style.display="none"
// }
const [userMail,setUserMail]=useState()
const dispatch=useDispatch()
const [user ,isLoading]=useAuthState(auth)
console.log(user);





  return (
 <div className='relative'>
  <HelmetProvider context={helmetContext}>
<ToastContainer/>

 
 
  <Header/>

  <Categories/>
 

<Containerx>
<RoutesFun/>

</Containerx>
{/* <Basket/> */}
<Loading/>

<Drawer open={menu} anchor='right' onClose={()=>dispatch(closeMenu())}>
  
  <div className='w-56' >
 {
  user ? <ul className=' flex flex-col justify-between items-start gap-5  relative'>
    
  <h1 className='ml-11 text-orange-500 mb-1  text-2xl'>{user.displayName}</h1>  
  <li className='text-xl  hover:bg-gray-100'>Hesabım</li>
  <li className='text-xl  hover:bg-gray-100'>Siparişlerim</li>
  <li className='text-xl  hover:bg-gray-100'>Adreslerim</li>
  <li className='text-xl  hover:bg-gray-100'>Beğendiklerim</li>
  <li className='text-xl  hover:bg-gray-100'>İndirim kuponlarım</li>
  <li className='text-xl  hover:bg-gray-100' onClick={logOut}>Çıkış Yap</li>
  
  </ul>
  
  
  : <Link to='/login' onClick={()=>{
    dispatch(closeMenu())

  }} className='text-blue-400'>Giriş Yap</Link>
 }
  </div>
</Drawer>
<p className='w-full text-3xl text-center mt-48  font-bold '> </p>
<Footer/>
</HelmetProvider>

 </div>
  )
}
export default App