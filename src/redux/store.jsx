import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './productsSlice'
import basketSlice from './basketSlice'
import  loginSlice  from './login'





export const store = configureStore({
  reducer: {
    products:productSlice,
       basket:basketSlice,
   login:loginSlice
  },
})