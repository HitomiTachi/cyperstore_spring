import React from 'react';
import ProductCard from './ProductCard';
import './RelatedProducts.css';

interface RelatedProductsProps {
  title?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ title = 'Related Products' }) => {
  const products = [
    { name: 'iPhone 13 Pro', price: '$999', originalPrice: '$1099' },
    { name: 'iPhone 14', price: '$799', originalPrice: '$899' },
    { name: 'iPhone 15 Pro', price: '$1199', originalPrice: '$1299' },
    { name: 'iPhone SE', price: '$429', originalPrice: '$499' },
  ];

  return (
    <section className="related-products-section">
      <div className="related-container">
        <h2 className="related-title">{title}</h2>
        <div className="related-grid">
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

export default RelatedProducts;

