import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, originalPrice, image }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="product-placeholder">
            <span>Product Image</span>
          </div>
        )}
        <button className="favorite-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 4 14 4 8C4 5.79086 5.79086 4 8 4C9.5913 4 11.1174 4.63214 12.2426 5.75736C13.3679 6.88258 14 8.4087 14 10C14 14 6 21 6 21H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          {originalPrice && <span className="original-price">{originalPrice}</span>}
          <span className="current-price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

