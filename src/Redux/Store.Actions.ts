import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCardDetails = createAsyncThunk("get/StoreCard",async()=>{
    try{
        const {data} =await axios.get("",{headers:{Lat:"",Lon:""}});
        if(data){
            return data;
        }
    }catch(err){

    }
})