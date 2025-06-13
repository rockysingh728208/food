// src/pages/LoginPage.jsx
import React from 'react';

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login functionality to be implemented!');
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gray-100"> {/* 64px for Navbar height */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Shopper</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="your@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-800">Forgot Password?</a>
        </p>
        <p className="text-center text-gray-600 text-sm mt-2">
          Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-800">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
