import { configureStore } from "@reduxjs/toolkit";
import storeDetailSlice  from "./Store.Reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        store:storeDetailSlice
    }
})

type AppDispacth = typeof store.dispatch;
type RoofState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispacth>();
export const useAppSelector: TypedUseSelectorHook<RoofState> = useSelector;