import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutStep1Page from './pages/CheckoutStep1Page';
import CheckoutStep2Page from './pages/CheckoutStep2Page';
import CheckoutStep3Page from './pages/CheckoutStep3Page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/catalog" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout/step1" element={<CheckoutStep1Page />} />
          <Route path="/checkout/step2" element={<CheckoutStep2Page />} />
          <Route path="/checkout/step3" element={<CheckoutStep3Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
