import ImgMagnify from "../Components/ImgMagnify";
import React, { useState } from "react";
import { useAppSelector } from "../Redux/Store";


const ProductDetails: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const {product} = useAppSelector(state=>state);

  return (
    <div className="container mx-auto p-5">
            <div className="flex flex-col md:flex-row bg-white shadow-lg p-6 rounded-lg">
              <div className="md:w-1/2">
                <ImgMagnify  largeImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" smallImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142"/>
              </div>
      
              <div className="md:w-1/2 p-6">
                <h4 className="text-xl font-semibold">dfd - Half Sleeve T-shirt</h4>
                <div className="text-gray-600 mt-2">
                  <p>200 reviews</p>
                  <p>
                    Availability: <span className="text-red-500">In Stock</span>
                  </p>
                  <p>Standard Delivery</p>
                  <p>
                    Inside Dhaka: <span className="text-red-500">3 days</span>
                  </p>
                  <p>
                    Outside Dhaka: <span className="text-red-500">3-5 days</span>
                  </p>
                </div>
      
                <h3 className="text-red-500 text-2xl font-bold mt-3">
                  300 TAKA <sup className="text-gray-500 line-through">350 TAKA</sup>
                </h3>
      
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <b>QTY</b>
                    <input
                      type="number"
                      className="w-16 text-center border border-gray-300 rounded px-2 py-1"
                      
                      
                    />
                  </div>
      
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded flex items-center gap-2">
                     ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
  );
};

export default ProductDetails;