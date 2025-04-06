import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { addItem, initialStateTy } from "../../Redux/Store.Reducers";
import { getProjects } from "./../../Redux/Store.Actions";
import { IProduct, TProducts } from "Redux/type";
import { toFixed } from "../../Utils/commonFunction";

export const useAddToCart = () => {
    const dispatch = useAppDispatch();
    const { addtocard, products } = useAppSelector(state => state);
    useEffect(() => { 
        dispatch(getProjects());
    }, [dispatch]);
    const addProduct = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,type: -1 | 1, product: IProduct) => {
        e.stopPropagation();
        dispatch(addItem({ product, type }));
    };
    const calculateTotalMRP = (products: Pick<initialStateTy,'addtocard'>) => {
        let totalMRP = 0 as number;
        for (const productId in products) {
            totalMRP += (products[productId as keyof object] as TProducts).reduce((total: number, group: any) => total + parseFloat(group.base_price), 0);
        }
        return toFixed(totalMRP);
    };
    const totalProduct = () => Object.values(addtocard).flat().length;
    return { products, addtocard, addProduct, calculateTotalMRP, totalProduct }
};