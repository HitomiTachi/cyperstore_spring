import React, { useState } from 'react';
import './ProductInfo.css';

interface ProductInfoProps {
  title: string;
  price: string;
  originalPrice?: string;
  colors?: { name: string; value: string }[];
  memoryOptions?: string[];
  details?: {
    icon?: string;
    label: string;
    value: string;
  }[];
  description?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  price,
  originalPrice,
  colors = [
    { name: 'Black', value: '#000000' },
    { name: 'Silver', value: '#C0C0C0' },
    { name: 'Gold', value: '#FFD700' },
    { name: 'Blue', value: '#0066CC' },
    { name: 'Purple', value: '#800080' },
  ],
  memoryOptions = ['128GB', '256GB', '512GB', '1TB'],
  details = [],
  description = '',
}) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState(0);

  return (
    <div className="product-info">
      <div className="product-header">
        <h1 className="product-title">{title}</h1>
        <div className="product-price">
          <span className="current-price">{price}</span>
          {originalPrice && (
            <span className="original-price">{originalPrice}</span>
          )}
        </div>
      </div>

      <div className="product-options">
        <div className="color-selection">
          <label className="option-label">Select color :</label>
          <div className="color-options">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`color-option ${selectedColor === index ? 'active' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(index)}
                aria-label={color.name}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div className="memory-selection">
          <div className="memory-tabs">
            {memoryOptions.map((memory, index) => (
              <button
                key={index}
                className={`memory-tab ${selectedMemory === index ? 'active' : ''}`}
                onClick={() => setSelectedMemory(index)}
              >
                {memory}
              </button>
            ))}
          </div>
        </div>

        {details.length > 0 && (
          <div className="product-details-grid">
            {details.map((detail, index) => (
              <div key={index} className="detail-item">
                {detail.icon && (
                  <div className="detail-icon">{detail.icon}</div>
                )}
                <div className="detail-content">
                  <div className="detail-label">{detail.label}</div>
                  <div className="detail-value">{detail.value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {description && (
          <p className="product-description">{description}</p>
        )}
      </div>

      <div className="product-actions">
        <button className="action-button wishlist-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 4 14 4 8C4 5.79086 5.79086 4 8 4C9.5913 4 11.1174 4.63214 12.2426 5.75736C13.3679 6.88258 14 8.4087 14 10C14 14 6 21 6 21H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add to Wishlist
        </button>
        <button className="action-button cart-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8H6C4.89543 8 4 8.89543 4 10V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V10C28 8.89543 27.1046 8 26 8H24M8 8V6C8 4.89543 8.89543 4 10 4H22C23.1046 4 24 4.89543 24 6V8M8 8H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add to Cart
        </button>
      </div>

      <div className="product-features">
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="feature-text">Free Delivery 1-2 day</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="feature-text">In Stock Today</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="feature-text">Guaranteed 1 year</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

