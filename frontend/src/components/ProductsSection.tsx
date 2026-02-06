import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductsSection.css';

const ProductsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('new-arrival');

  const products = [
    { name: 'iPhone 14 Pro', price: '$999', originalPrice: '$1099' },
    { name: 'Samsung Galaxy S23', price: '$899', originalPrice: '$999' },
    { name: 'MacBook Pro 14"', price: '$1999', originalPrice: '$2199' },
    { name: 'AirPods Pro', price: '$249', originalPrice: '$279' },
    { name: 'iPad Air', price: '$599', originalPrice: '$649' },
    { name: 'Apple Watch Series 9', price: '$399', originalPrice: '$429' },
    { name: 'Sony WH-1000XM5', price: '$399', originalPrice: '$449' },
    { name: 'PlayStation 5', price: '$499', originalPrice: '$549' },
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-tags">
          <button
            className={`tag ${activeTab === 'new-arrival' ? 'active' : ''}`}
            onClick={() => setActiveTab('new-arrival')}
          >
            New Arrival
          </button>
          <button
            className={`tag ${activeTab === 'bestseller' ? 'active' : ''}`}
            onClick={() => setActiveTab('bestseller')}
          >
            Bestseller
          </button>
          <button
            className={`tag ${activeTab === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveTab('featured')}
          >
            Featured Products
          </button>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

