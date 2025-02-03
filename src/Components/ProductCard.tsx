import React, { memo } from 'react'
import AddToCartButton from './Buttons/AddToCartButton';
type Props = {
    product: any,
    addProduct: any,
    addtocard: any
}

const ProductCard = ({ product, addProduct, addtocard }: Props) => {
    return (
        <div key={product[0].product_id} className="card">
            <div className="card-content">
                <img src={product[0].image_url} alt={product[0].name} className="card-image" width={140} />
                <div className="card-details">
                    <p className="card-eta">{product[0].eta_tag.text.toUpperCase()}</p>
                    <div className="card-titles">
                        <h3 className="card-title">{product[0].name}</h3>
                    </div>
                    <p className="card-unit">{product[0].unit}</p>
                    <div className="card-footer">
                        <p className="card-price">₹{product[0].price}</p>
                        <AddToCartButton handleClick={(type) => addProduct(type, product[0])} itemCount={(addtocard && addtocard[product[0].product_id] && addtocard[product[0].product_id])?addtocard[product[0].product_id].length : 0} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default memo(ProductCard);