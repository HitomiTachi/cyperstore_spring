import React from 'react';
import './PaymentMethodCard.css';

interface PaymentMethodCardProps {
  id: string;
  type: 'card' | 'paypal' | 'apple-pay' | 'google-pay';
  lastFour?: string;
  expiryDate?: string;
  cardholderName?: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  id,
  type,
  lastFour,
  expiryDate,
  cardholderName,
  isSelected,
  onSelect,
}) => {
  const getMethodDisplay = () => {
    switch (type) {
      case 'card':
        return `•••• ${lastFour || '6754'}`;
      case 'paypal':
        return 'PayPal';
      case 'apple-pay':
        return 'Apple Pay';
      case 'google-pay':
        return 'Google Pay';
      default:
        return '';
    }
  };

  const getMethodIcon = () => {
    switch (type) {
      case 'card':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'paypal':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7C7 5.89543 7.89543 5 9 5H15C16.1046 5 17 5.89543 17 7V17C17 18.1046 16.1046 19 15 19H9C7.89543 19 7 18.1046 7 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`payment-method-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(id)}>
      <div className="method-content">
        <label className="radio-container">
          <input
            type="radio"
            name="payment-method"
            checked={isSelected}
            onChange={() => onSelect(id)}
          />
          <span className="radio-checkmark" />
        </label>
        <div className="method-icon">
          {getMethodIcon()}
        </div>
        <div className="method-info">
          <div className="method-header">
            <span className="method-name">{getMethodDisplay()}</span>
            {expiryDate && (
              <span className="method-expiry">Expires {expiryDate}</span>
            )}
          </div>
          {cardholderName && (
            <p className="method-cardholder">{cardholderName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;

