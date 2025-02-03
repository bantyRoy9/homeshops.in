import { useEffect } from "react";
import Banner from "../Components/Banner";
import HorizontalImageSlider from "../Components/HorizentalSlider";
import HorizontalCardList from "../Components/HorizontalCardView";
import ImageGrid from "../Components/ImageGrid";
import ProductCard from "../Components/ProductCard";
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { getCardDetails } from "../Redux/Store.Actions";
import { useAddToCart } from "../Utils/customHooks/useAddToCart";
function Home() {
  const dispatch = useAppDispatch();
  const {addProduct,addtocard,products} = useAddToCart()
  useEffect(() => {
    !products?.objects && dispatch(getCardDetails());
  }, [dispatch]);
  
  return (
      products?.objects && products.objects.length && 
          products.objects.map((el: any, idx: number) =>
            idx === 0 ?  <div className="main-container"><Banner data={el} /></div> :
            idx === 1 ? <div className="main-container"><HorizontalImageSlider data={el} /></div> :
            idx === 2 ? <ImageGrid data={el.data} /> :                                    
            <div className="section relative" key={idx}>
            <h3 className="section-title">{el.header_config.title}</h3>
            <HorizontalCardList>{el.objects[0].data.products.map((product:any) => <ProductCard product={product} addProduct={addProduct} addtocard={addtocard} />)}</HorizontalCardList>
            </div>          
            )
  );
}

export default Home;
