
import ProductDetails from "./ProductDetails"
import { Link, Route, Routes } from "react-router-dom"
import Products from "./Products"
import Banner from "./Banner"
import Basket from "./Basket"
import Payments from "./Payments"
import Electronic from "./Electronic"
import  Mens  from "./Mens"
import Jewelery from "./Jewelery"
import Womens from "./Womens"
import Home from "./Home"
import Login from "./Login"
import LoginAndSign from "./Sign"
import ForgetPassword from "./ForgetPassword"
import Search from "./Search"

// import LoginAndSign from "./LoginAndSign"
function RoutesFun() {
  return (
    <div>
      <Routes>
  <Route path='/product-details/:id' element={<ProductDetails/>} ></Route>
  <Route path='/' element={<Home/>} ></Route>
  <Route path="/basket-products" element={<Basket/>}></Route>
<Route path="/payments" element={<Payments/>}></Route>
<Route path="/electronic" element={<Electronic/>}></Route>
<Route path="/mens" element={<Mens/>}></Route>
<Route path="/jewelery" element={<Jewelery/>}></Route>
<Route path="/womens" element={<Womens/>}/>
<Route path="/login" element={<Login/>}></Route>
<Route path="/sig-in" element={<LoginAndSign/>}></Route>
<Route path="/forget-password" element={<ForgetPassword/>}></Route>
<Route path="/search/:text"element={<Search/>}></Route>


      </Routes>
          
          
       
    </div>
  )
}

export default RoutesFun