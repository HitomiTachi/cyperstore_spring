import React, { useState } from 'react';
import './OrderSummary.css';

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  onCheckout: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  tax,
  shipping,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const total = subtotal + tax + shipping - discount;

  const handleApplyPromo = () => {
    // Simple promo code logic - can be enhanced
    if (promoCode.toLowerCase() === 'save10') {
      setDiscount(subtotal * 0.1);
    } else if (promoCode.toLowerCase() === 'save20') {
      setDiscount(subtotal * 0.2);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  return (
    <div className="order-summary">
      <h2 className="summary-title">Order Summary</h2>
      
      <div className="summary-content">
        <div className="summary-fields">
          <div className="input-field">
            <label className="field-label">Promo Code</label>
            <div className="input-group">
              <input
                type="text"
                className="field-input"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="apply-button" onClick={handleApplyPromo}>
                Apply
              </button>
            </div>
          </div>
          
          <div className="input-field">
            <label className="field-label">Gift Card / Discount Code</label>
            <input
              type="text"
              className="field-input"
              placeholder="Enter code"
            />
          </div>
        </div>

        <div className="summary-prices">
          <div className="price-row">
            <span className="price-label">Subtotal</span>
            <span className="price-value">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="price-group">
            <div className="price-row">
              <span className="price-label">Estimated Tax</span>
              <span className="price-value">${tax.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span className="price-label">Estimated shipping & Handling</span>
              <span className="price-value">${shipping.toFixed(2)}</span>
            </div>
          </div>

          {discount > 0 && (
            <div className="price-row discount">
              <span className="price-label">Discount</span>
              <span className="price-value">-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="price-row total">
            <span className="price-label">Total</span>
            <span className="price-value">${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="checkout-button" onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;

