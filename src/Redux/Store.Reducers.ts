import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import buildEPCExtraReducers  from "./Store.Builders";
export type initialStateTy ={
    store:any,
    addtocard:any
}
const initialState:initialStateTy={
store:{},
addtocard:{}
}
export const storeDetailSlice = createSlice({
name:'storeDetails',
initialState,
reducers:{
    updateaddtocard:({addtocard},{payload}:PayloadAction<{item:any,ind?:number}>)=>{
        const product_id = payload.item[0].product_id;
        if(!addtocard[product_id]){
            addtocard[product_id] = [payload.item]
        }else{
            addtocard[product_id].push(payload.item)
        }
    },

},
extraReducers:buildEPCExtraReducers
});
export const {updateaddtocard} = storeDetailSlice.actions;
export default storeDetailSlice.reducer;