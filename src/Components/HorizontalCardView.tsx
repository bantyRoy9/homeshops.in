import { useRef, useState } from "react";
import { useAddToCart } from "./../Utils/customHooks/useAddToCart";
import AddToCartButton from "./Buttons/AddToCartButton";

const HorizontalCardList = ({ products }: any) => {
  const {addtocard,addProduct} = useAddToCart();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -800, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 800, behavior: 'smooth' });
  };
  return (
      <div className="horizontal-card-list" ref={scrollRef} onScroll={handleScroll}>
         {showLeft && <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100"><i className="fa-solid fa-angle-left"></i></button>}
        {products.map((product: any) => (
          <div key={product[0].product_id} className="card">
            <div className="card-content">
            <div>
              <img src={product[0].image_url} alt={product[0].name} className="card-image" width={140} />
            </div>
            <div className="card-details">
              <div className="card-eta">
                <p>{product[0].eta_tag.text.toUpperCase()}</p>
              </div>
              <div className="card-titles">
                  <h3 className="card-title">{product[0].name}</h3>
              </div>
                  <p className="card-unit">{product[0].unit}</p> 
              <div className="card-footer">
                <p className="card-price">₹{product[0].price}</p>
                <AddToCartButton handleClick={(type)=>addProduct(type,product[0])} itemCount={addtocard[product[0].product_id]?.length??0}/>
              </div>
            </div>
            </div>
          </div>
        ))}
        {showRight && <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100"><i className="fa-solid fa-angle-right"></i></button>}
      </div>
  );
};

export default HorizontalCardList;
