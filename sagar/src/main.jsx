// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// 1. CartProvider को इम्पोर्ट करें
import { CartProvider } from './context/CartContext.jsx'; // <-- सुनिश्चित करें कि यह पाथ सही है

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. CartProvider से <App /> को रैप करें */}
    {/* यही वह जगह है जहाँ आप पूरे ऐप को कार्ट कॉन्टेक्स्ट प्रोवाइड करते हैं */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
);