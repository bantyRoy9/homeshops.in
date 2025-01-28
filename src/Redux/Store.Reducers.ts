import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import buildEPCExtraReducers  from "./Store.Builders";
export type initialStateTy ={
    store:any,
    addtocard:any

}
type CartItem = {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
  };
  
  interface CartState {
    items: CartItem[];
    total: number;
  }
const initialState:initialStateTy={
store:{},
addtocard:{
    items: [],
  total: 0,
}
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
    addItem: (state, action: PayloadAction<CartItem>) => {
        const existingItem = state.addtocard.items.find((item:any) => item.productId === action.payload.productId);
        if (existingItem) {
          existingItem.quantity += action.payload.quantity;
        } else {
          state.addtocard.items.push(action.payload);
        }
        state.addtocard.total = state.addtocard.items.reduce((sum:number, item:any) => sum + item.price * item.quantity,0);
      },
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
export const {updateaddtocard} = storeDetailSlice.actions;
export default storeDetailSlice.reducer;