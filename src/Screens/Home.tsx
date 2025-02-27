import { JSX } from "react";
import HorizontalCardList from "../Components/Cards/HorizontalCardView";
import ProductCard from "../Components/Cards/ProductCard";
import { useAddToCart } from "../Utils/customHooks/useAddToCart";
const Home = () => {
  const {addProduct,addtocard,products} = useAddToCart();
  const bindProduct = () =>{
    const uniqeCat = Array.from(new Set(products.map(el=>el.category.id))).sort(),listView:JSX.Element[]=[];
    uniqeCat.forEach((el,idx)=>{
      let dd = products.filter(ele=> ele.category.id === el);
      listView.push(<div className="section relative" key={idx}>
        <h3 className="section-title">{dd[0].category.name}</h3>
        <HorizontalCardList>{dd.map((product:any) => <ProductCard product={product} addProduct={addProduct} addtocard={addtocard} />)}</HorizontalCardList>
        </div>)
    })
    return <>{listView}</>;
  }
  return bindProduct();
}

export default Home;
