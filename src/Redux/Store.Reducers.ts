import { createSlice } from "@reduxjs/toolkit";
type initialStateTy ={
    
}
const initialState:initialStateTy={

}
export const storeDetailSlice = createSlice({
name:'storeDetails',
initialState,
reducers:{
    update:()=>{

    }
}
});
export const {update} = storeDetailSlice.actions;
export default storeDetailSlice.reducer;