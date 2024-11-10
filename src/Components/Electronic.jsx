import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import { Helmet } from 'react-helmet-async';
import electronicpng from '../icons/electronic.png'
export default function Electronic() {
    const {products}=useSelector((state)=>state.products) 

 const elecrtonic= products &&  products.filter((product)=>product.category==="electronics")


    
  return (
    <div className='flex flex-wrap items-center justify-center mt-14 gap-5'>
        <Helmet>
            <title>Elektronik</title>
            <link rel="shortcut icon" href={electronicpng} type="image/x-icon" />
        </Helmet>
      {
        
         elecrtonic && elecrtonic.map((product)=>(
            <Product product={product} key={product.id}></Product>
         ))
      }
    </div>
  )
}
