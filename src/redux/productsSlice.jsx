import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Base_URL="https://fakestoreapi.com/products"

const initialState = {
   products:  [],
   loading:false
  }

export const getAllProducts=createAsyncThunk("getAllProducts",async()=>{
  const response=await axios.get(Base_URL)
  return response.data;
})
  
  
  export const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
openedLoading:(state)=>{
      state.loading=true

    },
    stopedLoading:(state)=>{
      state.loading=false
    }

    },
    extraReducers:(builder)=>{
      builder.addCase(getAllProducts.pending,(state)=>{
        state.loading=true;
      })
      builder.addCase(getAllProducts.fulfilled,(state,actions)=>{
        state.loading=false;
        state.products=actions.payload
      })
    }
  })
  export const {openedLoading,stopedLoading} = productSlice.actions
  export default productSlice.reducer