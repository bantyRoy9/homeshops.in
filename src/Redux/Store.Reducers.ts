import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import buildEPCExtraReducers  from "./Store.Builders";
export type initialStateTy ={
    store:any,
    addtocard:any[]
}
const initialState:initialStateTy={
store:{},
addtocard:[]
}
export const storeDetailSlice = createSlice({
name:'storeDetails',
initialState,
reducers:{
    addtocard:(state,{payload}:PayloadAction<{item:any,ind?:number}>)=>{
        if(payload.ind){
            
        }else{
            state.addtocard=[...state.addtocard,payload]
        }
    },

},
extraReducers:buildEPCExtraReducers
});
export const {addtocard} = storeDetailSlice.actions;
export default storeDetailSlice.reducer;