import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-xl">₹{product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
