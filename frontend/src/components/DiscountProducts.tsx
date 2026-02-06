import React from 'react';
import ProductCard from './ProductCard';
import './DiscountProducts.css';

const DiscountProducts: React.FC = () => {
  const discountProducts = [
    { name: 'iPhone 13', price: '$699', originalPrice: '$799' },
    { name: 'Samsung Galaxy S22', price: '$599', originalPrice: '$699' },
    { name: 'MacBook Air M2', price: '$999', originalPrice: '$1199' },
    { name: 'AirPods 3', price: '$179', originalPrice: '$199' },
  ];

  return (
    <section className="discount-products">
      <div className="discount-container">
        <h2 className="discount-title">Discounts up to -50%</h2>
        <div className="products-grid">
          {discountProducts.map((product, index) => (
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

export default DiscountProducts;

