import React from 'react';
import ProductCard from '../components/ProductCard';

function Men() {
  const menProducts = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      description: "Comfortable cotton shirt.",
      price: 29.99,
      image: "https://i.pinimg.com/originals/f0/ca/37/f0ca3773991e78f5db562eea16e55d5d.jpg"
    },
    {
      id: 2,
      name: "Men's Formal Trousers",
      description: "Elegant trousers for formal occasions.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Men's Athletic Shoes",
      description: "High-performance running shoes.",
      price: 89.99,
      image: "https://tse1.mm.bing.net/th?id=OIP.o5_cDfAF872urpEBuArv6wHaE7&pid=Api&P=0&h=180"
    },
    {
      id: 4,
      name: "Men's Denim Jeans",
      description: "Stylish and durable jeans.",
      price: 39.99,
      image: "https://tse1.mm.bing.net/th?id=OIP.eog2zl0TfH1j8t6ozU2JUgHaHa&pid=Api&P=0&h=180"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Men;
