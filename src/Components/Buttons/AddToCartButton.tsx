import React, { memo } from 'react';
interface IaddToCard{
  itemCount:number,
  handleClick:(item:-1|1)=>void
}
const AddToCartButton: React.FC<IaddToCard> = ({handleClick,itemCount}) => {
  return (
    <div className="flex items-center space-x-4">
      {itemCount > 0 ? (
        <div className='bg-green-700 flex gap-1 items-center rounded-md cursor-pointer'>
          <button className="p-2 text-gray-200" onClick={()=>handleClick(-1)}>-</button>
          <span className="text-sm text-white">{itemCount}</span>
          <button className="p-2 text-gray-200 rounded" onClick={()=>handleClick(1)}>+</button>
        </div>
      ) : (
        <button className="card-button" onClick={()=>handleClick(1)}>Add</button>
      )}
    </div>
  );
};

export default memo(AddToCartButton);
