// import ProductZoom from "./ProductZoom";
// const ProductDetails: React.FC = () => {
//   return (
//     <div className="flex flex-row gap-5">
//       {/* left */}
//       <div className="flex-1">
//         {/* product img */}
//         <div>
//           <ProductZoom imageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" highResImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" zoomLevel={3} />
//         </div>
//         {/* product details */}
//         <div>
//           <h4>Product Details</h4>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id consectetur magni cupiditate amet aut, consequatur voluptatum sed odio praesentium dolores sunt libero, pariatur quas sequi ut accusamus harum dignissimos.
//         </div>
//       </div>
//       {/* right */}
      
//       <div className="flex-1">
//         <span>Home/Milk</span>
//         <h4>Amul Gold Full Cream Fresh Milk</h4>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React from 'react';
import ProductZoom from './ProductZoom';

const ProductDetails: React.FC = () => {
  return (
    <div className="flex h-screen"> {/* Use flexbox and full viewport height */}
      <div className="flex-1 overflow-y-auto p-6"> {/* Left side - scrollable */}
        <div className="mb-6"> {/* Image Gallery Section */}
           <ProductZoom imageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" highResImageSrc="https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" zoomLevel={3} />
        </div>
        <div> {/* Details Section */}
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <p className="mb-2"><strong>Toned Milk</strong></p>
          <p className="mb-2"><strong>Type</strong></p>
          <p className="mb-2"><strong>Key Features</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Healthy and fresh</li>
            <li className="mb-2">Used in making tea, coffee, etc.</li>
            <li className="mb-2">Has a shelf life of 90 days</li>
          </ul>
          <p className="mb-2"><strong>Unit</strong></p>
          <p className="mb-2">450 ml</p>
          <p className="mb-2"><strong>Ingredients</strong></p>
          <p className="mb-2">Toned Milk, Fat 3% minimum, SNF 8.5% minimum</p>
          <p className="mb-2"><strong>FSSAI License</strong></p>
          <p className="mb-2">10012021000071</p>
          <p className="mb-2"><strong>Shelf Life</strong></p>
          <p className="mb-2">3 months</p>
          <p className="mb-2"><strong>Return Policy</strong></p>
          <p className="mb-2">
            The product is non-returnable. For a damaged, defective, expired or
            incorrect item, you can request a replacement within 24 hours of
            delivery.
          </p>
          <p className="mb-2">
            In case of an incorrect item, you may raise a replacement or return
            request only if the item is sealed/unopened/unused and in original
            condition.
          </p>
          <p className="mb-2"><strong>Manufacturer's Address</strong></p>
          <p className="mb-2">
            Kaira District Co-operative Milk Producers Union Limited, Anand 388
            001. At Food Complex Mogar, Mogar. Lic. No. 10014021001010.
          </p>
          <p className="mb-2"><strong>Country Of Origin</strong></p>
          <p className="mb-2">India</p>
          <p className="mb-2"><strong>Customer Care Details</strong></p>
          <p className="mb-2">Email: info@blinkit.com</p>
          <p className="mb-2"><strong>Seller</strong></p>
          <p className="mb-2">TAMS GLOBAL PRIVATE LIMITED</p>
          <p className="mb-2"><strong>Seller FSSAI</strong></p>
          <p className="mb-2">13323999000106</p>
          <p className="mb-2"><strong>Description</strong></p>
          <p className="mb-2">
            Amul Moti Toned Milk (Polypack) is packed with the goodness of
            essential nutrients. It is popularly used in the preparation of
            sweets, curd, tea, coffee etc. or can even be consumed directly.
          </p>
          <p className="mb-2"><strong>Disclaimer</strong></p>
          <p className="mb-2">
            Every effort is made to maintain the accuracy of all information.
            However, actual product packaging and materials may contain more
            and/or different information. It is recommended not to solely rely
            on the information presented.
          </p>
        </div>
      </div>

      <div className="w-96 p-6 bg-gray-100"> {/* Right side - fixed width */}
        <div className="sticky top-6"> {/* Sticky content */}
          <p className="text-sm text-gray-500 mb-2">
            Home / Milk / Amul Moti Toned Milk (90 Days Shelf Life)
          </p>
          <h1 className="text-3xl font-bold mb-4">
            Amul Moti Toned Milk (90 Days Shelf Life)
          </h1>
          <div className="mb-4"> {/* Rating */}
            {/* Add your rating component here */}
            <p className="text-yellow-500">☆ ☆ ☆ ☆ ☆</p>
          </div>
          <p className="text-green-500 mb-2">In 10 MINS</p>
          <p className="mb-4">
            View all by <a href="#" className="text-blue-500">Amul</a>
          </p>
          <p className="text-xl font-bold mb-2">
            <strong>450 ml</strong>
          </p>
          <div className="flex items-center mb-6"> {/* Price and Add to Cart */}
            <p className="mr-4">
              MRP ₹33 <span className="text-sm text-gray-500">(Inclusive of all taxes)</span>
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ADD
            </button>
          </div>
          <div> {/* Why shop from Blinkit? */}
            <h3 className="text-xl font-bold mb-4">Why shop from blinkit?</h3>
            <div className="mb-4 flex">
              <img src="delivery_icon.png" alt="Delivery Icon" className="w-10 h-10 mr-2" /> {/* Replace with your icon */}
              <div>
                <p className="font-bold">Superfast Delivery</p>
                <p className="text-sm">
                  Get your order delivered to your doorstep at the earliest from
                  dark stores near you.
                </p>
              </div>
            </div>
            <div className="mb-4 flex">
              <img src="price_icon.png" alt="Price Icon" className="w-10 h-10 mr-2" /> {/* Replace with your icon */}
              <div>
                <p className="font-bold">Best Prices & Offers</p>
                <p className="text-sm">
                  Best price destination with offers directly from the
                  manufacturers.
                </p>
              </div>
            </div>
            <div className="flex">
              <img src="assortment_icon.png" alt="Assortment Icon" className="w-10 h-10 mr-2" /> {/* Replace with your icon */}
              <div>
                <p className="font-bold">Wide Assortment</p>
                <p className="text-sm">
                  Choose from 5000+ products across food, personal care,
                  household & other categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;