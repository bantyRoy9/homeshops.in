import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { addItem } from "../../Redux/Store.Reducers";

export const useAddToCart=()=>{
    const dispatch = useAppDispatch();
    const {addtocard} = useAppSelector(state=>state.store);
    const addProduct = (type:-1|1,product:any) =>{
        dispatch(addItem({product}))
    }
    const calculateTotalMRP = (products:any[]) => {
        let totalMRP = 0 as number;
        for (const productId in products) {
            totalMRP += products[productId].reduce((total:number,group:any[]) => total + parseFloat(group[0].mrp),0);
        }
        return totalMRP;
      };
    return{addtocard,addProduct,calculateTotalMRP}
};