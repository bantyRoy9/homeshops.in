import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { getCardDetails } from "./Store.Actions";
import { initialStateTy } from "./Store.Reducers";

const buildEPCExtraReducers = (builder: ActionReducerMapBuilder<initialStateTy>) => {
    builder
        .addCase(getCardDetails.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
            state.products = payload;
        })
        .addCase(getCardDetails.pending, (state) => {
            state.products = [];
        })
        .addCase(getCardDetails.rejected, (state) => {
            state.products = [];
        })
    };
export default buildEPCExtraReducers