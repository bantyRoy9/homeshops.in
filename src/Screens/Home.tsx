import { JSX } from "react";
import HorizontalCardList from "../Components/Cards/HorizontalCardView";
import ProductCard from "../Components/Cards/ProductCard";
import { useAddToCart } from "../Utils/customHooks/useAddToCart";
import { HeroSection } from "../Components/Sections/HomeSections/HeroSection";

const Home = (): JSX.Element => {
  const { addProduct, addtocard, products } = useAddToCart();
  const RenderProductsByCategory = (): JSX.Element => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category.id))).sort();
    return (
      <>
        {uniqueCategories.map((categoryId, idx) => {
          const categoryProducts = products.filter(p => p.category.id === categoryId);
          const categoryName = categoryProducts[0]?.category.name;
          return (
            <div className="section relative" key={idx}>
              <h3 className="section-title">{categoryName}</h3>
              <HorizontalCardList>
                {categoryProducts.map((product: any) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addProduct={addProduct}
                    addtocard={addtocard}
                  />
                ))}
              </HorizontalCardList>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <HeroSection />
      <RenderProductsByCategory />
    </>
  );
};

export default Home;
