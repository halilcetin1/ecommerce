import { Button, ButtonBase, Rating } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FcLike } from "react-icons/fc";
import { GrFavorite } from "react-icons/gr";
import { useState } from "react";
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket, calculateBasket } from "../redux/basketSlice";
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

export default function Product({product}) {





  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


    const {id,image,price,rating,description,title}=product
    const [favori,setFavori]=useState(false)
    const navigate=useNavigate()
    const [count,setCount]=useState(1)
const dispatch=useDispatch()
    const addBasket=()=>{

        const payload={
          id,image,title,price,count
        }
       dispatch(addToBasket(payload)) 
    dispatch(calculateBasket())
  toast.success(<div className="flex flex-col w-full h-28">
   <p  className="text-green-500 ">Sepete Eklendi</p>
  <p className="mt-5 text-center text-2xl text-white bg-green-500 rounded-full  border-solid border-green-400 cursor-pointer" onClick={()=>{
 setTimeout(() => {
    navigate("/basket-products")
 }, 500);
  }}>sepete git</p>
   
  </div>, {
           position:'top-center',
           theme:"dark",
           type:'success',
        hideProgressBar:true,
        autoClose:1000
          })
      }



  return (
    <motion.div variants={item} className='card hover:cursor-pointer' onClick={()=>{
        navigate("/product-details/"+id)
    }}>
        <img src={image} alt="" className="p-img"/>
<h2 className="title"> {title}</h2>
<div className="flex">
<Rating name="half-rating-read" defaultValue={rating.rate} precision={rating.rate} readOnly /> 
<span className="ml-1">({rating.count})</span>
</div>

<div className="flex justify-around items-start w-full mx-9">
{ favori ?<FcLike className="like" onClick={(e)=>{
       e.stopPropagation()
    setFavori(!favori)
}}/>:
<MdOutlineFavoriteBorder className="like" onClick={(e)=>{
     e.stopPropagation()
    setFavori(!favori)
 
    
}} />}
<h4 className="price">{price}$</h4>

</div>
<button className="bg-orange-400 text-white w-48 rounded-full h-11 mt-14 flex justify-center items-center" onClick={(e)=>{
    e.stopPropagation()
    /**   e.stopPropagation()
     * kart tan geln eventi durdurmak için kullandım.
     */
    addBasket()
    

}}><MdAddShoppingCart className="text-3xl"/>  Sepete ekle</button>
    </motion.div>
  )
}
