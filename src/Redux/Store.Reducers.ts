import { createSlice } from "@reduxjs/toolkit";
import buildEPCExtraReducers  from "./Store.Builders";
export type initialStateTy ={
    store:any
}
const initialState:initialStateTy={
store:{}
}
export const storeDetailSlice = createSlice({
name:'storeDetails',
initialState,
reducers:{
    update:()=>{

    }
},
extraReducers:buildEPCExtraReducers
});
export const {update} = storeDetailSlice.actions;
export default storeDetailSlice.reducer;