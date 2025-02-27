import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { getProject, getProjects } from "./Store.Actions";
import { initialStateTy } from "./Store.Reducers";
import { IProduct, TProducts } from "./type";

const buildEPCExtraReducers = (builder: ActionReducerMapBuilder<initialStateTy>) => {
    builder
        .addCase(getProjects.fulfilled, (state, { payload }: PayloadAction<TProducts>) => {
            state.products = payload;
        })
        .addCase(getProjects.pending, (state) => {
            state.products = [];
        })
        .addCase(getProjects.rejected, (state) => {
            state.products = [];
        })
        .addCase(getProject.fulfilled, (state, { payload }: PayloadAction<IProduct>) => {
            state.product = payload;
        })
        .addCase(getProject.pending, (state) => {
            state.product = {} as IProduct;
        })
        .addCase(getProject.rejected, (state) => {
            state.product = {} as IProduct;
        })
    };
export default buildEPCExtraReducers