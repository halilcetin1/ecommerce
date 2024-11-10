import { createSlice } from "@reduxjs/toolkit";



const getBasketFromstorage=()=>{
    if(localStorage.getItem("e-basket")){
        return JSON.parse(localStorage.getItem("e-basket"))
    }
    // eğer localstorage değeri boş ise boş bir dizi dönecek
    return []
}

const initialState={
// basket ilk değerini localstorage den alıyor.
basket:getBasketFromstorage(),
totalAmount:0,
}
const writeStorageBasket=(basket)=>{
    localStorage.setItem("e-basket",JSON.stringify(basket))
}

export const basketSlice=createSlice({
    name:"basketSlice",
    initialState,
    reducers:{
       addToBasket:(state,actions)=>{
        const find=state.basket&& state.basket.find((product)=>product.id ==actions.payload.id)
        // find methodu ile ürünün kendisini buldum 
        if(find){

//ürün daha önceden eklendi burda sadece countu güncellenecek
            const extractedProducts=state.basket.filter((product)=>product.id!=actions.payload.id)
           
            
            // filter methodu  ile eskiden var olan ve bize yeni gelen ürün haricindeki filtreledik.
            // state in yeni değeri filtrelenen ürünler ve  find ürününün yeni count'uyla  guncellenecek.
            find.count+=actions.payload.count
            state.basket=[...extractedProducts,find]
            writeStorageBasket(state.basket)



        }else{
            // yeni gelen ürün daha öceden eklenmemiştir. dolayisiyla yeni ürünü ve eski ürünleri state in yeni değeri olarak güncelledik.
            state.basket=[...state.basket,actions.payload]
            writeStorageBasket(state.basket)
        }

       }
       ,
       calculateBasket:(state)=>{
        // ürünlerin üzerine dönüp state deki total amount e sepetteki ürünlerin toplam tutarını setledik. 
        state.totalAmount=0
   state.basket &&     state.basket.map((product)=>{
            state.totalAmount+=product.price*product.count
        })
       },
       removeToBasket:(state ,actions)=>{
// const removeProduct= state.basket && state.basket.find((product)=>product.id==actions.payload.id)
//  const findremove=state.basket && state.basket.find((product)=>product.id==actions.payload.id)
//  console.log(findremove);
const findremove= state.basket && state.basket.find((product)=>product.id==actions.payload.id)
if(findremove){
    if(findremove.count==1){
        const newBasket=   state.basket && state.basket.filter((product)=>product.id!=actions.payload.id)
        state.basket=[...newBasket]
        writeStorageBasket(state.basket)
       }


    if(findremove.count>1){
        findremove.count-=1
        const filterProduct= state.basket && state.basket.filter((product)=>product.id!=actions.payload.id)
        state.basket= [...filterProduct,findremove]
        writeStorageBasket(state.basket)
    }
   
}


 
       },
       clearBasket:(state)=>{
        localStorage.clear();
        state.basket=[]
       }

    }
})













export const {addToBasket,calculateBasket,removeToBasket,clearBasket} = basketSlice.actions
export default basketSlice.reducer;