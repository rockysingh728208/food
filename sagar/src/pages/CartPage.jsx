import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ₹{item.price}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xl"
                  >
                    −
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-lg font-semibold">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
