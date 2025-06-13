// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
// 1. useCart हुक को इम्पोर्ट करें
import { useCart } from '../context/CartContext'; // <-- सुनिश्चित करें कि यह पाथ सही है

function Navbar() {
  // 2. useCart हुक का उपयोग करके getCartTotalItems फंक्शन प्राप्त करें
  const { getCartTotalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">SHOPPER</Link>
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link></li>
        <li><Link to="/men" className="text-gray-700 hover:text-blue-600">Men</Link></li>
        <li><Link to="/women" className="text-gray-700 hover:text-blue-600">Women</Link></li>
        <li><Link to="/kids" className="text-gray-700 hover:text-blue-600">Kids</Link></li>
      </ul>
      <div className="flex items-center space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center">
          <User className="mr-2" size={18} /> Login
        </Link>
        <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {getCartTotalItems()} {/* 3. यहाँ अब डायनामिक वैल्यू आएगी! */}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;