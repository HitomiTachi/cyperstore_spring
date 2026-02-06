import React from 'react';
import './ShippingMethodCard.css';

interface ShippingMethodCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  estimatedDays: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  isExpandable?: boolean;
}

const ShippingMethodCard: React.FC<ShippingMethodCardProps> = ({
  id,
  name,
  description,
  price,
  estimatedDays,
  isSelected,
  onSelect,
  isExpandable = false,
}) => {
  return (
    <div className={`shipping-method-card ${isSelected ? 'selected' : ''}`}>
      <div className="method-content">
        <label className="radio-container">
          <input
            type="radio"
            name="shipping-method"
            checked={isSelected}
            onChange={() => onSelect(id)}
          />
          <span className="radio-checkmark" />
        </label>
        <div className="method-info">
          <div className="method-header">
            <span className="method-name">{name}</span>
            <span className="method-days">{estimatedDays}</span>
          </div>
          <p className="method-description">{description}</p>
        </div>
      </div>
      <div className="method-price">
        <span className="price-value">{price}</span>
        {isExpandable && (
          <button className="expand-button" aria-label="View details">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ShippingMethodCard;

