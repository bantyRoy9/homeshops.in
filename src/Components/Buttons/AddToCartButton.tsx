import React, { useState } from 'react';

const AddToCartButton: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {count > 0 ? (
        <div className='bg-green-700 flex gap-1 items-center rounded-md cursor-pointer'>
          <button className="p-2 text-gray-200" onClick={decrement}>-</button>
          <span className="text-sm text-white">{count}</span>
          <button className="p-2 text-gray-200 rounded" onClick={increment}>+</button>
        </div>
      ) : (
        <button className="bg-green-700 text-white rounded px-4 py-2 text-sm" onClick={increment}>Add</button>
      )}
    </div>
  );
};

export default AddToCartButton;
