import { Button, imageListClasses, Rating } from "@mui/material";
import '../css/Product-details.css'
import { useEffect, useState } from "react";
import { FaAddressCard, FaRegSave, FaSave } from "react-icons/fa";
import { MdAddShoppingCart, MdBookmarkAdded, MdBookmarkBorder } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { IoIosAddCircle, IoIosArrowBack } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, calculateBasket } from "../redux/basketSlice";
import { IoShareOutline } from "react-icons/io5";
import { toast } from "react-toastify";
export default function ProductDetails() {
    useEffect(()=>{
    getProduct()
        
        
    },[])
    let control=true
    const {id}=useParams()
const controlProducts=()=>{
  const {basket}=useSelector((state)=> state.basket)
basket.forEach(product => {
  

  
  if(id==product.id && product.count>9){
  // kullanıcı  sepete en fazla 10 ürün ekleyebilsin diye sınırlama getirdim
   control=false;
  }
  
  
});

}
controlProducts()
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
  if(!control){
toast.warning("limit doldu")
return;
  }
  const payload={
    id,image,title,price,count
  }
 dispatch(addToBasket(payload)) 
 dispatch(calculateBasket())
 toast.success(<div className="h-20"><h2>Sepete Eklendi</h2>
 <button className="bg-orange-500">Sepete git</button>
 </div> , {
          position:'top-center',
          theme:'light',
          type:'success',
       hideProgressBar:true,
       autoClose:800
         })
}
//window.history.back()


  return (
    <div className="flex justify-items-center items-center    w-2/3 h-3/4 mt-7 gap-10 ml-16 max-sm:flex-col max-md:flex-col">
        { data &&   <div> 
  
  
  <img className="img" src={image} alt="" />
  <h3 className="mb-3">{title}</h3>
   <p className="description">{description}</p>
 
  <Rating name="half-rating" readOnly value={3}  precision={0.5}></Rating>
  <h4 className="mx-2"></h4>

   <h4>Kategori : {category} </h4>
 
 
 </div>
 
  


   
   
   
 
    


        }
<div className="flex items-center p-4 gap-3">
<div className=" max-sm:fixed max-sm:bottom-0 max-sm:z-20 max-sm:bg-gray-100 max-sm:w-full max-sm:left-0 max-sm:h-20 max-sm:items-center max-sm:justify-around max-sm:p-5">
<div className="flex items-center  gap-4 "> 
  <div className="flex  items-start justify-center  ">
  <GrSubtractCircle className="text-4xl mr-3 hover:cursor-pointer" onClick={()=>{
    if(count>1)
    setCount(count-1)        
  }}  /> 
  <span className="text-4xl">{count}</span><IoIosAddCircle className="text-4xl ml-3 hover:cursor-pointer" onClick={()=>{
    if(count<=9)
    setCount(count+1)
  }}/> 
  </div>
  
<div className="">
<button className="bg-orange-500 text-white w-48 rounded-full h-11  flex justify-center items-center" onClick={addBasket}>Sepete ekle</button>  
</div>
   </div>
   {/* diğer içerikler */}
</div>



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



</div>
</div>

    </div>
  )
}


/**
 * 
 * 
 *    <img className="img" src={image} alt="" />
   <h3 className="mb-3">{title}</h3>
    <p className="description">{description}</p>
   < className="flex ">
   <Rating name="half-rating" readOnly value={3}  precision={0.5}></Rating>
   <h4 className="mx-2"></h4>

    <h4>Kategori : {category} </h4>
 */