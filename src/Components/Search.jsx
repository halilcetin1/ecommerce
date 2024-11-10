import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../redux/productsSlice';
import Product from './Product';

function Search() {
  const dispatch=useDispatch()
    useEffect(()=>{
dispatch(getAllProducts())
    },[])
    const {text} =useParams()
   const {products}=useSelector((state)=>state.products)


   const filteredProducts=filter(products,text)
function filter(product,text) {

return product.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()))


}


 



  
  return (
    <div className='flex flex-wrap items-center justify-center mt-14 gap-5'>
      {
        filteredProducts && filteredProducts.map((product)=>(
          <Product product={product}/>
        ))
      }
    </div>
  )
}

export default Search


































// import React, { useState } from 'react'


// export default function Input() {
//     const [value,setValue]=useState(null)
//     function setinput(e){
//         const file=    e.target.files[0]
//         if(file){
//             const reader= new FileReader()
//             reader.onload=(e)=>{
//                 setValue(e.target.result)
//             }
//             reader.readAsDataURL(file)
//         }
       
// console.log(
// file
// );

//     }
//   return (
//     <div>

// <input type="file" name="" id=""  onChange={setinput} />

// <img src={value} alt="" />
// <button ></button>


//     </div>
//   )
// }
