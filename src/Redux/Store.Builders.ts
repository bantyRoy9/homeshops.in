import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { getCardDetails } from "./Store.Actions";
import { initialStateTy } from "./Store.Reducers";

const buildEPCExtraReducers = (builder: ActionReducerMapBuilder<initialStateTy>) => {
    builder
        .addCase(getCardDetails.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
            state.store = payload;
        })
        .addCase(getCardDetails.pending, (state) => {
            state.store = [];
        })
        .addCase(getCardDetails.rejected, (state) => {
            state.store = [];
        })
    };
export default buildEPCExtraReducers