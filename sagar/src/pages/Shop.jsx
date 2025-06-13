// src/pages/Shop.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

function Shop() {
  // Dummy data for the shop page
  const allProducts = [
    { id: 1, name: "Men's Casual Shirt", description: "Comfortable cotton shirt.", price: 29.99, image: "https://images.bewakoof.com/original/men-s-white-cotton-shirt-538469-1661765773-1.jpg" },
    { id: 2, name: "Women's Summer Dress", description: "Light and airy dress.", price: 45.00, image: "https://tse4.mm.bing.net/th?id=OIP.yNu9Ds6sWaiwKzAIUgOAOAHaLH&pid=Api&P=0&h=180" },
    { id: 3, name: "Kids' Superhero Tee", description: "Fun graphic tee for kids.", price: 19.50, image: "https://tse3.mm.bing.net/th?id=OIP.wqpb3vR_3XkmDT6QFYnwaAHaHa&pid=Api&P=0&h=180" },
    { id: 4, name: "Men's Jeans", description: "Classic denim jeans.", price: 59.99, image: "https://tse3.mm.bing.net/th?id=OIP.dxfbceNEgmMOz1nE4BikPQHaLW&pid=Api&P=0&h=180" },
    { id: 5, name: "Women's Handbag", description: "Stylish leather handbag.", price: 75.00, image: "https://i.pinimg.com/originals/de/0c/bf/de0cbf6d1e72dd9f6b0d741819236127.jpg" },
    { id: 6, name: "Kids' Play Shoes", description: "Durable shoes for active kids.", price: 35.00, image: "https://tse3.mm.bing.net/th?id=OIP.Ks7s6GdnlfiCLrwAqv3tRwHaHa&pid=Api&P=0&h=180" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Our Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;