import { FaCartShopping } from 'react-icons/fa6'
import '../css/Header.css'
import { FaSearch, FaUserAlt } from 'react-icons/fa'
import { Badge, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdDarkMode } from 'react-icons/md'
import { calculateBasket } from '../redux/basketSlice'
import { useRef, useState } from 'react'
import { openMenu } from '../redux/login'
import { IoMdSearch } from "react-icons/io";


export default function Header() {
const {basket,tottalAmount}=useSelector((state)=>state.basket)



  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [text,setText]=useState("")
const seacrhProducts=()=>{
  if(!text){ return;}
  navigate("/search/"+text)
}
  return (
   <div className="w-full   fixed top-0 h-16  z-20 bg-orange-500 flex items-center justify-around   max-sm:flex ">
    <a className='text-white
     hover:cursor-pointer max-sm:ml-2' onClick={()=>navigate("/")}>Logo</a>
   <div className='flex items-center gap-2'>
   <input className='searchInput outline-none max-sm:w-36 max-sm:ml-3 ' type="text" placeholder='Ürün ara' onChange={(e)=>{
      setText(e.target.value)
    }} />
   <button className=' color-white  cursor-pointer  h-7 w-11 flex items-center justify-center' id='searchIcon'  onClick={seacrhProducts}> <IoMdSearch className=' text-white   max-sm:text-4xl text-4xl'/> </button>
   
   </div>
   <div className='flex p-4  justify-between login  w-48 max-sm:w-28 max-sm:justify-beetwen'>
 
    <Badge badgeContent={basket.length} color='warning'>
    <FaCartShopping className='text-white  basket-icon text-[32px] cursor-pointer ' onClick={()=>{
navigate("/basket-products")
      dispatch(calculateBasket())
  
    }} />
   
    </Badge>
  
  <FaUserAlt className='text-white text-[32px] cursor-pointer' onClick={()=>{
// navigate("/login")
dispatch(openMenu())
  
  }}/>

   </div>
   </div>
  )
}
