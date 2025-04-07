import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawerProps, modalPropsTypes } from "Utils/Const";
import buildEPCExtraReducers from "./Store.Builders";
import { IProduct, TProducts } from "./type";
export interface IcommonReducer {
  drawer: Pick<DrawerProps,'headerName'|'position'|'isOpen'>
  modal:Omit<modalPropsTypes,'onClick'|'onSubmit'|'children'|'closeModal'>
}

export type initialStateTy = {
  products: TProducts;
  addtocard: Record<string, IProduct[]>;
  product: IProduct;
  common: IcommonReducer;
  orders:any
};

export const initialState: initialStateTy = {
  products: [],
  addtocard: {},
  product: {} as IProduct,
  common: {
    drawer: {
      headerName:"",
      isOpen:false,
      position:"right"
    },
    modal:{
      modalSize:'lg',
      isOpen:false
    }
  },
  orders:[]
};

const productReducers = {
  addItem: (state: initialStateTy,action: PayloadAction<{ product: IProduct; type?: -1 | 1 }>) => {
    const { product, type } = action.payload;
    const product_id = product.id;
    if (!product_id) return;
    if (type === -1) {
      if (state.addtocard[product_id]?.length) {
        state.addtocard[product_id].splice(0, 1);
        if (state.addtocard[product_id].length === 0) {
          delete state.addtocard[product_id];
        };
      };
    } else {
      if (!state.addtocard[product_id]) {
        state.addtocard[product_id] = [];
      };
      state.addtocard[product_id].push(product);
    };
  },
  clearCart: (state: initialStateTy) => {
    state.addtocard = {};
  },
};

const commonReducers = {
  toggleDrawer: (state: initialStateTy) => {
    state.common.drawer.isOpen = !state.common.drawer.isOpen;
  },
  toggleModal: (state: initialStateTy) => {
    state.common.modal.isOpen = !state.common.modal.isOpen;
  },
};

const storeDetailSlice = createSlice({
  name: "storeDetails",
  initialState,
  reducers: {
    ...productReducers,
    ...commonReducers,
  },
  extraReducers: buildEPCExtraReducers,
});

export const { addItem, clearCart, toggleDrawer,toggleModal } = storeDetailSlice.actions;
export default storeDetailSlice.reducer;
