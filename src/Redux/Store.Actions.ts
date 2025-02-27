import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { AxiosConfig, routes } from "./../Utils/baseUrl";
import { IProduct, TProducts } from "./type";

export const getCardDetails = createAsyncThunk("get/StoreCard",async()=>{
    try{
        const {data} =await axios.get("https://blinkit.com/feed/?template_version=9",{headers:{Lat:"28.6077127",Lon:"77.30915499999999",app_client:"consumer_web",platform:'desktop_web'}});
        return data;
    }catch(err){

    }
});
export const getProjects = createAsyncThunk<TProducts>("get/products",async(id)=>{
    try{
        const {data}:AxiosResponse<TProducts> = await AxiosConfig.get(routes.Products);
        if(!data.length) return [] as TProducts;
        return data;
    }catch(err){
        return [] as TProducts
    }
})
export const getProject = createAsyncThunk<IProduct,{pathname:string},any>("get/product",async({pathname})=>{
    try{
        const {data}:AxiosResponse<IProduct> = await AxiosConfig.get(pathname);
        if(!data) return {} as IProduct;
        data.sliding_images=['https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142','https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142','https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142']
        return data;
    }catch(err){
        return {} as IProduct
    }
})