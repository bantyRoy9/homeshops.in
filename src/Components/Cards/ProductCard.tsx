import React, { memo } from 'react'
import AddToCartButton from '../Buttons/AddToCartButton';
import { useNavigate } from 'react-router-dom';
import { imgurl, IProductCard } from '../../Utils/Const';
const ProductCard = ({ product, addProduct, addtocard,width=140,activecard=null }: IProductCard) => {
    const nagivate = useNavigate(),isproduct = typeof product === "object" ? true : false;
    return (
        <button onClick={(e)=>{e.stopPropagation(); nagivate(isproduct?`products/${product.id}`:`#${activecard}`)}} key={product?.id??product} className={`card ${isproduct?'':'slidecard'} ${activecard === -1 ? 'border-green-600':'border-[#e8e8e8]'}`}>
            <div className="card-content">
                <img src={/*product?.image_url??product*/imgurl} alt={product?.name??product} className="card-image" width={width} />
                {isproduct && <div className="card-details">
                    <p className="card-eta">{product.base_price.toUpperCase()}</p>
                    <div className="card-titles">
                        <h3 className="card-title">{product.name}</h3>
                    </div>
                    <p className="card-unit">{product.brand.name}</p>
                    <div className="card-footer">
                        <p className="card-price">₹{product.base_price}</p>
                        <AddToCartButton handleClick={(e,type) => addProduct!(e,type, product)} itemCount={(addtocard && addtocard[product.id] && addtocard[product.id])?addtocard[product.id].length : 0} />
                    </div>
                </div>}
            </div>
        </button>
    )
};
export default memo(ProductCard);