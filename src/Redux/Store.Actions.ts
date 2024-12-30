import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCardDetails = createAsyncThunk("get/StoreCard",async()=>{
    try{
        const {data} =await axios.get("https://blinkit.com/feed/?template_version=9",{headers:{Lat:"28.6077127",Lon:"77.30915499999999",app_client:"consumer_web",platform:'desktop_web'}});
        return data;
    }catch(err){

    }
})