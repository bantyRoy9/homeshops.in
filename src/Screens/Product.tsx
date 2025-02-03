import ImgMagnify from "../Components/ImgMagnify";
import React, { useState } from "react";
import { useAppSelector } from "../Redux/Store";


const ProductDetails: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const {product} = useAppSelector(state=>state);

  return (
    <div>
      <div className="mt-5 shadow p-3 rounded">
        <div>
          <div className="border w-[400px] h-[400px]">
            <ImgMagnify  largeImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" smallImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142"/>
          </div>
        </div>

        <div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;