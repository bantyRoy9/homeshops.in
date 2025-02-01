import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import buildEPCExtraReducers  from "./Store.Builders";
export type initialStateTy ={
    store:any,
    addtocard:any

}
type CartItem = {
  product_id: number;
    productName: string;
    price: number;
    quantity: number;
  };

const initialState:initialStateTy={
store:{},
addtocard:{}
}
export const storeDetailSlice = createSlice({
name:'storeDetails',
initialState,
reducers:{
  addItem:({addtocard},{payload:{product,ind}}:PayloadAction<{product:any,ind?:number}>)=>{
        const product_id = product.product_id;
        if(!addtocard[product_id]){
            addtocard[product_id] = [product]
        }else{
            addtocard[product_id].push(product)
        }
    },
    // addItem: (state, {payload}: PayloadAction<any>) => {
    //     const existingItem = state.addtocard.items.find((item:any) => item.product_id === payload.product_id);
    //     if (existingItem) {
    //       existingItem.quantity += payload.quantity;
    //     } else {
    //       state.addtocard.items.push(payload);
    //     }
    //     state.addtocard.total = state.addtocard.items.reduce((sum:number, item:any) => sum + item.price * item.quantity,0);
    //   },
      removeItem: (state, action: PayloadAction<number>) => {
        state.addtocard.items = state.addtocard.items.filter((item:any) => item.productId !== action.payload);
        state.addtocard.total = state.addtocard.items.reduce((sum:number, item:any) => sum + item.price * item.quantity,0);
      },
      updateQuantity: (state,action: PayloadAction<{ productId: number; quantity: number }>) => {
        const item = state.addtocard.items.find((item:any) => item.productId === action.payload.productId);
        if (item) {
          item.quantity = action.payload.quantity;
          if (item.quantity <= 0) {
            state.addtocard.items = state.addtocard.items.filter((i:any) => i.productId !== item.productId);
          }
        }
        state.addtocard.total = state.addtocard.items.reduce((sum:number, item:any) => sum + item.price * item.quantity,0);
      },
      clearCart: (state) => {
        state.addtocard.items = [];
        state.addtocard.total = 0;
      },
},
extraReducers:buildEPCExtraReducers
});
export const {addItem} = storeDetailSlice.actions;
export default storeDetailSlice.reducer;