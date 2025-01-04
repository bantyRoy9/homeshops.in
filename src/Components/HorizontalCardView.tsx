import React, { useRef, useState } from "react";

const HorizontalCardList = ({ data }: any) => {
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
        {data.map((item: any) => (
          <div key={item[0].product_id} className="card">
            <div className="card-content">
            <div>
              <img src={item[0].image_url} alt={item[0].name} className="card-image" width={140} />
            </div>
            <div className="card-details">
              <div className="card-eta">
                <p>{item[0].eta_tag.text.toUpperCase()}</p>
              </div>
              <div className="card-titles">
                  <h3 className="card-title">{item[0].name}</h3>
              </div>
                  <p className="card-unit">{item[0].unit}</p> 
              <div className="card-footer">
                <p className="card-price">₹{item[0].price}</p>
                <button className="card-button">ADD</button>
                {/* {item[0].offer && <p className="card-offer">{item[0].offer}</p>} */}
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
