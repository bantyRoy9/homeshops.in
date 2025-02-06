import ImgMagnify from "../Components/ImgMagnify";
import React, { useState } from "react";
import { useAppSelector } from "../Redux/Store";
import ProductZoom from "./ProductZoom";


const ProductDetails: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const {product} = useAppSelector(state=>state);

  return (
              <ProductZoom imageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" highResImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" zoomLevel={3} />
              

  );
};

export default ProductDetails;