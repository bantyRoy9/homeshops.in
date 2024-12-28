import React from 'react';

const categories = [
  { name: 'Paan Corner', image: '/assets/image.png' },
  { name: 'Dairy, Bread & Eggs', image: '/assets/image.png' },
  { name: 'Fruits & Vegetables', image: '/assets/image.png' },
  { name: 'Cold Drinks & Juices', image: '/assets/image.png' },
  { name: 'Snacks & Munchies', image: '/assets/image.png' },
  // Add more categories here...
];

const Categories: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img src={category.image} alt={category.name} className="w-16 h-16 mx-auto" />
            <p className="mt-2 text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
