import React from "react";

const HorizontalCardList = ({ data }:any) => {
  return (
    <div className="horizontal-card-list-container">
      <div className="horizontal-card-list">
        {data.map((item:any) => (
          <div key={item[0].product_id} className="card"> 
          <div className="flex justify-center">
            <img src={item[0].image_url} alt={item[0].name} className="card-image" width={140}/>
            </div>
            <div className="card-details">
              <h3 className="card-title">{item[0].name}</h3>
              <p className="card-brand">Brand: {item[0].brand}</p>
              <p className="card-price">Price: ₹{item[0].price}</p>
              {item[0].offer && <p className="card-offer">{item[0].offer}</p>}
              <p className="card-unit">Unit: {item[0].unit}</p>
              <p className="card-eta">ETA: {item[0].eta_tag.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCardList;
