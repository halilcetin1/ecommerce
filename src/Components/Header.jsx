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
   <div className="w-full fixed top-0 h-16  z-20 bg-orange-400 flex items-center justify-around">
    <a className='text-white
     hover:cursor-pointer' onClick={()=>navigate("/")}>Logo</a>
    <input className='searchInput outline-none ' type="text" placeholder='Ürün ara' onChange={(e)=>{
      setText(e.target.value)
    }} />
   {/* <IoMdSearch className='text-[32px] color-white cursor-pointer  h-6 w-10' id='searchIcon'/> */}
   <button className='text-[20px] color-white  cursor-pointer  h-6 w-10 flex items-center justify-center' id='searchIcon'  onClick={seacrhProducts}> <IoMdSearch className='text-[20px]  text-white  hover:bg-orange-300'/> </button>
   
   <div className='flex p-4  justify-between login  w-48 '>
 
    <Badge badgeContent={basket.length} color='secondary'>
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
