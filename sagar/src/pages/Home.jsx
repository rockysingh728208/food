// src/pages/Home.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  // Dummy product data for demonstration
  const featuredProducts = [
    { id: 1, name: "Men's Casual Shirt", description: "Comfortable cotton shirt.", price: 29.99, image: "https://tse3.mm.bing.net/th?id=OIP.JL7aKUAdbM6E20M4AreSrQHaHa&pid=Api&P=0&h=180" },
    { id: 2, name: "Women's Summer Dress", description: "Light and airy dress.", price: 45.00, image: "https://tse4.mm.bing.net/th?id=OIP.kh-SClIJzDpg1sgmqkjs1QAAAA&pid=Api&P=0&h=180" },
    { id: 3, name: "Kids' Superhero Tee", description: "Fun graphic tee for kids.", price: 19.50, image: "https://tse2.mm.bing.net/th?id=OIP.F4rDJ01dxjoziMGmzl7dtQHaH0&pid=Api&P=0&h=180" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Welcome to Shopper!</h1>
      <p className="text-center text-gray-700 mb-10">Discover the latest trends in fashion for men, women, and kids.</p>

      <section className="my-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* You can add more sections here like categories, promotions etc. */}
    </div>
  );
}

export default Home;