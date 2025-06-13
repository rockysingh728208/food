// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Add more routes as needed, e.g., /product/:id */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;