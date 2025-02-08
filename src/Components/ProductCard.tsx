import React, { memo } from 'react'
import AddToCartButton from './Buttons/AddToCartButton';
import { NavLink } from 'react-router-dom';
type Props = {
    product: any,
    width?:number,
    addProduct?: any,
    addtocard?: any,
    activecard?:number|null
}

const ProductCard = ({ product, addProduct, addtocard,width=140,activecard=null }: Props) => {
    const isproduct = typeof product === "object" ? true : false;
    return (
        <NavLink to={isproduct?'product':`#${activecard}`} key={product?.product_id??product} className={`card ${isproduct?'':'slidecard'} ${activecard === -1 ? 'border-green-600':'border-[#e8e8e8]'}`}>
            <div className="card-content">
                <img src={product?.image_url??product} alt={product?.name??product} className="card-image" width={width} />
                {isproduct && <div className="card-details">
                    <p className="card-eta">{product.eta_tag.text.toUpperCase()}</p>
                    <div className="card-titles">
                        <h3 className="card-title">{product.name}</h3>
                    </div>
                    <p className="card-unit">{product.unit}</p>
                    <div className="card-footer">
                        <p className="card-price">₹{product.price}</p>
                        <AddToCartButton handleClick={(type) => addProduct(type, product)} itemCount={(addtocard && addtocard[product.product_id] && addtocard[product.product_id])?addtocard[product.product_id].length : 0} />
                    </div>
                </div>}
            </div>
        </NavLink>
    )
};
export default memo(ProductCard);