import { useEffect } from "react";
import Banner from "../Components/Cards/Banner";
import HorizontalImageSlider from "../Components/Cards/HorizentalSlider";
import HorizontalCardList from "../Components/Cards/HorizontalCardView";
import ImageGrid from "../Components/Cards/ImageGrid";
import ProductCard from "../Components/Cards/ProductCard";
import { useAppDispatch } from "../Redux/Store";
import { getCardDetails, getProjects } from "../Redux/Store.Actions";
import { useAddToCart } from "../Utils/customHooks/useAddToCart";
import { IProduct } from "Redux/type";
const Home = () => {
  const dispatch = useAppDispatch();
  const {addProduct,addtocard,products} = useAddToCart()
  useEffect(() => {
    !products.length && dispatch(getProjects());
  }, [dispatch,products]);
  return (
  <> {products.map((product: IProduct, idx: number) =>
            // idx === 0 ?  <div className="main-container"><Banner data={el} /></div> :
            // idx === 1 ? <div className="main-container"><HorizontalImageSlider data={el} /></div> :
            // idx === 2 ? <ImageGrid data={el.data} /> :                                    
            <div className="section relative" key={idx}>
            <h3 className="section-title">{product.category.name}</h3>
            <HorizontalCardList>{products.map((product:any) => <ProductCard product={product} addProduct={addProduct} addtocard={addtocard} />)}</HorizontalCardList>
            </div>)}</>)
}

export default Home;
