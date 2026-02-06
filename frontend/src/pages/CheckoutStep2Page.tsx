import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CheckoutSteps from '../components/CheckoutSteps';
import ShippingMethodCard from '../components/ShippingMethodCard';
import Footer from '../components/Footer';
import './CheckoutStep2Page.css';

interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: string;
  estimatedDays: string;
  isExpandable?: boolean;
}

const CheckoutStep2Page: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>('1');

  const steps = [
    {
      number: 1,
      label: 'Address',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      number: 2,
      label: 'Shipping',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      number: 3,
      label: 'Payment',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const shippingMethods: ShippingMethod[] = [
    {
      id: '1',
      name: 'Standard Shipping',
      description: 'Regular shipping method with standard delivery time',
      price: '$29',
      estimatedDays: '5-7 business days',
    },
    {
      id: '2',
      name: 'Express Shipping',
      description: 'Faster delivery option for urgent orders',
      price: '$49',
      estimatedDays: '2-3 business days',
    },
    {
      id: '3',
      name: 'Overnight Shipping',
      description: 'Next day delivery for the fastest service',
      price: '$79',
      estimatedDays: '1 business day',
      isExpandable: true,
    },
  ];

  const handleSelectMethod = (id: string) => {
    setSelectedMethod(id);
  };

  const handleBack = () => {
    navigate('/checkout/step1');
  };

  const handleContinue = () => {
    if (selectedMethod) {
      navigate('/checkout/step3');
    } else {
      alert('Please select a shipping method');
    }
  };

  return (
    <div className="checkout-step2-page">
      <Header />
      <CheckoutSteps currentStep={2} steps={steps} />

      <div className="checkout-content">
        <div className="checkout-container">
          <div className="checkout-section">
            <h2 className="section-title">Shipping Method</h2>
            
            <div className="shipping-methods-section">
              {shippingMethods.map(method => (
                <ShippingMethodCard
                  key={method.id}
                  id={method.id}
                  name={method.name}
                  description={method.description}
                  price={method.price}
                  estimatedDays={method.estimatedDays}
                  isSelected={selectedMethod === method.id}
                  onSelect={handleSelectMethod}
                  isExpandable={method.isExpandable}
                />
              ))}
            </div>
          </div>

          <div className="checkout-actions">
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
            <button className="continue-button" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutStep2Page;

