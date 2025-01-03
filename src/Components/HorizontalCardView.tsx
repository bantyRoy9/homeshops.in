import React from "react";

const HorizontalCardList = ({ data }: any) => {
  return (
    <div className="horizontal-card-list-container">
      <div className="horizontal-card-list">
        {data.map((item: any) => (
          <div key={item[0].product_id} className="card">
            <div className="card-content"></div>
            <div className="flex justify-center">
              <img src={item[0].image_url} alt={item[0].name} className="card-image" width={140} />
            </div>
            <div className="card-details border">
              <div className="card-eta">
                <p className="card-eta">{item[0].eta_tag.text}</p>
              </div>
              <div className="card-titles">
                <div className="card-title">
                  <h3 className="card-title">{item[0].name}</h3>
                </div>
                <div>
                  <p className="card-unit">Unit: {item[0].unit}</p>
                </div>
              </div>
              <div className="flex justify-between text-center items-center">
                <p className="card-price">₹{item[0].price}</p>
                <div className="">
                  <button className="btn px-5 py-[6px] bg-green-50 border-[1px] text-sm border-green-700 rounded-md text-green-700 font-semibold">ADD</button>
                </div>
                {item[0].offer && <p className="card-offer">{item[0].offer}</p>}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCardList;
