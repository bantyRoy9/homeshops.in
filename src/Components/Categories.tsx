import React from 'react';
import { catagoriesLink } from './../Assests/link'
const categories = [
  { name: 'Paan Corner' },
  { name: 'Dairy, Bread & Eggs' },
  { name: 'Fruits & Vegetables' },
  { name: 'Cold Drinks & Juices' },
  { name: 'Snacks & Munchies' },
];

const Categories: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='max-w-[1258px]'>
        <div className='items-container'></div>
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-10 gap-5">
            {categories.map((category, index) => (
              <div className='cardContainer border-[1px] border-neutral-100 p-5'>
                <div key={index} className="text-center">
                  <img src={catagoriesLink[index]} alt={category.name} className="w-16 h-16 mx-auto" />
                  <p className="mt-2 text-sm font-medium">{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Categories;
