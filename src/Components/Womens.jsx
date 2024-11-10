import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
// women's clothing
import icon from '../icons/woman.png'
export default function Womens() {
    const {products}=useSelector((state)=>state.products)
const womens= products && products.filter((product)=>product.category==="women's clothing")
  return (
    <div className='flex flex-wrap items-center justify-center mt-14 gap-5'>
  <Helmet>
    <title>KADIN Giyim
 
    </title>
    <link rel="shortcut icon" href={icon} type="image/x-icon" />
  </Helmet>
        {
            womens && womens.map((product)=>(
                <Product product={product} key={product.id}/>
            ))
        }
    </div>
  )
}
