import { useSelector } from "react-redux"
import Product from "./Product"
import { Helmet } from "react-helmet-async"
import men from '../icons/men.png'
export default function Mens() {
const {products}=useSelector((state)=>state.products)
const mens= products && products.filter((product)=>product.category==="men's clothing")
  return (
    <div className='flex flex-wrap items-center justify-center mt-14 gap-5'>
<Helmet >
    <title>Erkek Giyim</title>
    <link rel="shortcut icon" href={men} type="image/x-icon" />
</Helmet>
        {
            mens && mens.map((product)=>(
                <Product product={product} key={product.id}/>
            ))
        }
    </div>
  )
}
