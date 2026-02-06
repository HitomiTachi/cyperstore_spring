import React, { useState } from 'react';
import './PaymentForm.css';

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
}

export interface PaymentFormData {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (field: keyof PaymentFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    handleChange('cardNumber', formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    handleChange('expiryDate', formatted);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 3);
    handleChange('cvv', value);
  };

  return (
    <div className="payment-form">
      <h3 className="form-title">Add New Card</h3>
      <div className="form-fields">
        <div className="form-field">
          <label className="field-label">Card Number</label>
          <input
            type="text"
            className="field-input"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleCardNumberChange}
            maxLength={19}
          />
        </div>
        
        <div className="form-field">
          <label className="field-label">Cardholder Name</label>
          <input
            type="text"
            className="field-input"
            placeholder="John Doe"
            value={formData.cardholderName}
            onChange={(e) => handleChange('cardholderName', e.target.value)}
          />
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label className="field-label">Expiry Date</label>
            <input
              type="text"
              className="field-input"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleExpiryChange}
              maxLength={5}
            />
          </div>
          
          <div className="form-field">
            <label className="field-label">CVV</label>
            <input
              type="text"
              className="field-input"
              placeholder="123"
              value={formData.cvv}
              onChange={handleCvvChange}
              maxLength={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

