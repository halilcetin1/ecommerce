
import { useDispatch, useSelector } from 'react-redux'
import '../css/Product.css'
import { Button, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { MdFavoriteBorder } from 'react-icons/md'
import { useEffect } from 'react'
import { getAllProducts } from '../redux/productsSlice'
import Product from './Product'
import { motion } from "framer-motion"


function Products() {
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: .4
      }
    }
  };


  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
    const {products}=useSelector((state)=>state.products)
  
// console.log(products);

  return (
 <motion.div className='products-container' 
 variants={container}
 initial="hidden"
 animate="visible"
 >
  {
    products &&
    products.map((product)=>(
      <Product key={product.id} product={product}/>
    ))
  }
 </motion.div>
  )
}
export default Products

/**
 * 
 * 
 * container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
 */
/**
 * 
 * 
 * 
 * 
 * 
 */