import ImgMagnify from "../Components/ImgMagnify";
import React, { useState } from "react";
import { useAppSelector } from "../Redux/Store";


const ProductDetails: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const {product} = useAppSelector(state=>state);

  return (
    <div className="flex mt-5 shadow p-3 rounded">
      <div className="flex-1">
            <ImgMagnify  largeImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" smallImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142"/>
          <div className="">
          </div>
      </div>
      <div className="flex-1">
          <div className="p-4">
            <h4>dfd - Half Sleeve Tshirt</h4>
            <div className="d-flex flex-column text-muted">
              <span>200 review</span>
              <span>
                Availability : <code className="text-danger">In Stock</code>{" "}
              </span>
              <span>Standar Delviery</span>
              <span>
                Inside Dhaka : <code className="text-danger">3 days</code>{" "}
              </span>
              <span>
                Outside Dhaka : <code className="text-danger">3-5 days</code>{" "}
              </span>
            </div>

            <h3 className="text-danger mt-3">
              300 TAKA{" "}
              <sup className="text-muted">
                {" "}
                <del>350 taka</del>{" "}
              </sup>
            </h3>

            <div className="d-flex gap-2 mt-3">

              <div className="w-25 d-flex gap-3 align-items-center">
                <b>QTY</b>
                <div className="d-flex align-items-center gap-2 shadow px-2 rounded py-1">
                  <input type="number" className="" value={count} />
                </div>
              </div>

              <div>
                <button className="btn btn-xxl btn-warning text-dark fw-bold">
                  ADD TO CART
                </button>
              </div>

            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;