import { useSelector } from "react-redux"
import Product from "./Product"
import { Helmet } from "react-helmet-async"
import jew  from'../icons/jew.png'

export default function Jewelery() {
     // const
    // jewelery
    const {products}=useSelector((state)=>state.products)
const jewelery= products && products.filter((product)=>product.category==="jewelery")
  return (
   
    <div className='flex flex-wrap items-center justify-center mt-14 gap-5'>
        <Helmet><title>Takı/Aksesuar </title>
        <link rel="shortcut icon" href={jew} type="image/x-icon" /></Helmet>
        {
            jewelery && jewelery.map((product)=>(
                <Product product={product} key={product.id}/>
            ))
        }
    </div>
  )
}
