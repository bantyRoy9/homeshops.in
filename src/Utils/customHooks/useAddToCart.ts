import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { addItem } from "../../Redux/Store.Reducers";
import { getCardDetails } from "./../../Redux/Store.Actions";

export const useAddToCart = () => {
    const dispatch = useAppDispatch();
    const { addtocard, products } = useAppSelector(state => state);
    useEffect(() => {
        !products?.objects && dispatch(getCardDetails());
    }, [dispatch]);
    const addProduct = (type: -1 | 1, product: any) => dispatch(addItem({ product, type }));
    const calculateTotalMRP = (products: any[]) => {
        let totalMRP = 0 as number;
        for (const productId in products) {
            totalMRP += products[productId].reduce((total: number, group: any) => total + parseFloat(group.mrp), 0);
        }
        return totalMRP;
    };
    const totalProduct = () => Object.values(addtocard).flat().length;
    return { products, addtocard, addProduct, calculateTotalMRP, totalProduct }
};