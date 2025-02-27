import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import buildEPCExtraReducers from "./Store.Builders";
import { IProduct, TProducts } from "./type";
export type initialStateTy = {
  products: TProducts,
  addtocard: any,
  product:IProduct
}

export const initialState: initialStateTy = {
  products: [],
  addtocard: {},
  product:{} as IProduct
}
const storeDetailSlice = createSlice({
  name: 'storeDetails',
  initialState,
  reducers: {
    addItem: ({ addtocard }, { payload: { product, type } }: PayloadAction<{ product: IProduct; type?: -1 | 1 }>) => {
      const product_id = product.id;
      if (type === -1 && product_id) {
        addtocard[product_id].splice(0, 1);
        if (!addtocard[product_id].length) delete addtocard[product_id]
      } else {
        if(!addtocard){
          addtocard = {}
        }
        addtocard[product_id] = [...(addtocard[product_id] || []), product]
      }
    },
    clearCart: (state) => {
      state.addtocard.items = [];
      state.addtocard.total = 0;
    },
  },
  extraReducers: buildEPCExtraReducers
});
export const { addItem } = storeDetailSlice.actions;
export default storeDetailSlice.reducer;