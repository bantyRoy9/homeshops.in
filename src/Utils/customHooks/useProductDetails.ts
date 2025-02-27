import { getProject } from "../../Redux/Store.Actions";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";

export const useProductDetails = () =>{
    const product = useAppSelector(state=>state.product),dispatch=useAppDispatch();
    const getProductDetails = (pathname:string)=>dispatch(getProject({pathname}))
    return {product,getProductDetails}
};