import { createSlice } from "@reduxjs/toolkit";


const initialState={

menu:false,
mail:''
    }


 
    export const loginSlice=createSlice({
        name:"loginSlice",
        initialState,
       reducers:{
     
openMenu:(state)=>{
    state.menu
    =true;
},closeMenu:(state)=>{
    state.menu=false;
},

setUserData:(state,actions)=>{
    state.mail=actions.payload;
}
       }
    })




export const {openMenu,closeMenu,setUserData} = loginSlice.actions
export default loginSlice.reducer;