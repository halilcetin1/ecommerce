import { Button, imageListClasses, Rating } from "@mui/material";
import '../css/Product-details.css'
import { useEffect, useState } from "react";
import { FaAddressCard, FaRegSave, FaSave } from "react-icons/fa";
import { MdAddShoppingCart, MdBookmarkAdded, MdBookmarkBorder } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { IoIosAddCircle, IoIosArrowBack } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToBasket, calculateBasket } from "../redux/basketSlice";
import { IoShareOutline } from "react-icons/io5";
export default function ProductDetails() {
    useEffect(()=>{
    getProduct()
        
        
    },[])
    const {id}=useParams()

const dispatch=useDispatch()
const [data,setData]=useState({})
 async function getProduct(){
       const Base_URL="https://fakestoreapi.com/products"
    const res= await fetch(`${Base_URL}/${id}`)
    const data= await res.json()

setData(data)



}
 
const {image,price,description,rating,category,title}=data;


const [save,setSave]=useState(false)

 const [count ,setCount]=useState(1)
  
const addBasket=()=>{
  const payload={
    id,image,title,price,count
  }
 dispatch(addToBasket(payload)) 
 dispatch(calculateBasket())
}
//window.history.back()


  return (
    <div className="flex justify-items-center items-center    w-2/3 h-3/4 mt-7 gap-10 ml-16">
        { data &&
 <div className="p-card flex items-center  justify-center  ">
   <div>
   <img className="img" src={image} alt="" />
   </div>
    <h3 className="mb-3">{title}</h3>
    <p className="description">{description}</p>
   <div className="flex ">
   <Rating name="half-rating" readOnly value={3}  precision={0.5}></Rating>
   <h4 className="mx-2"></h4>
   </div>
    <h4>Kategori : {category} </h4>
   
    <p className=" absolute text-2xl top-24 left-2 mr-4 text-orange-400 cursor-pointer flex items-center justify-center text-center" onClick={()=>window.history.back()}> <IoIosArrowBack/> Geri</p>
   {/* */}
 
    </div>


        }
<div className="">
  <div className="flex justify-center items-center ">  <GrSubtractCircle className="text-4xl mr-3 hover:cursor-pointer" onClick={()=>{
    if(count>1)
    setCount(count-1)
  }}  /> 
  <span className="text-4xl">{count}</span><IoIosAddCircle className="text-4xl ml-3 hover:cursor-pointer" onClick={()=>{
    if(count<=9)
    setCount(count+1)
  }}/>  </div>
<button className="bg-orange-400 text-white w-48 rounded-full h-11 mt-14 flex justify-center items-center" onClick={addBasket}>Sepete ekle</button>  
<div className="flex justify-between items-center  w-36">{save ?  <MdBookmarkAdded onClick={()=>setSave(!save)}  className="text-5xl h-28 hover:cursor-pointer"/>  :<MdBookmarkBorder  className="text-5xl h-28 hover:cursor-pointer" onClick={()=>setSave(!save)}/>}
<IoShareOutline className=" ml-4 text-4xl cursor-pointer"  onClick={()=>{
  if(navigator.share){
    const shareData = {
      title: 'Ürünü sevdiklerinle paylaş',
      text: 'Bu sitede çok güzel içerikler var',
      url: `http://localhost:5173/product-details/${id}`
  }
navigator.share(shareData).then(()=>{
alert("başarıyla paylaşıldı.")})

  }
}}/>

{/* <h3 className="text-3xl " onClick={()=>{
  window.history.back()
}}>geri</h3> */}

</div>
</div>
    </div>
  )
}

