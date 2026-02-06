import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CheckoutSteps from '../components/CheckoutSteps';
import PaymentMethodCard from '../components/PaymentMethodCard';
import PaymentForm from '../components/PaymentForm';
import Footer from '../components/Footer';
import './CheckoutStep3Page.css';

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'apple-pay' | 'google-pay';
  lastFour?: string;
  expiryDate?: string;
  cardholderName?: string;
}

const CheckoutStep3Page: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>('1');
  const [showAddCard, setShowAddCard] = useState(false);

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

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'card',
      lastFour: '6754',
      expiryDate: '11/2020',
      cardholderName: 'John Doe',
    },
    {
      id: '2',
      type: 'card',
      lastFour: '6755',
      expiryDate: '11/2020',
      cardholderName: 'Jane Smith',
    },
    {
      id: '3',
      type: 'card',
      lastFour: '6756',
      expiryDate: '11/2020',
    },
  ];

  const handleSelectMethod = (id: string) => {
    setSelectedMethod(id);
    setShowAddCard(false);
  };

  const handleAddCard = () => {
    setShowAddCard(true);
    setSelectedMethod('');
  };

  const handleFormSubmit = (data: any) => {
    // Handle form submission
    console.log('Payment form data:', data);
    // Add new card to methods and select it
    setShowAddCard(false);
    setSelectedMethod('new');
  };

  const handleBack = () => {
    navigate('/checkout/step2');
  };

  const handleComplete = () => {
    if (selectedMethod || showAddCard) {
      // Navigate to order confirmation or complete order
      alert('Order placed successfully!');
      navigate('/');
    } else {
      alert('Please select a payment method or add a new card');
    }
  };

  return (
    <div className="checkout-step3-page">
      <Header />
      <CheckoutSteps currentStep={3} steps={steps} />

      <div className="checkout-content">
        <div className="checkout-container">
          <div className="checkout-section">
            <h2 className="section-title">Payment Method</h2>
            
            <div className="payment-methods-section">
              {paymentMethods.map(method => (
                <PaymentMethodCard
                  key={method.id}
                  id={method.id}
                  type={method.type}
                  lastFour={method.lastFour}
                  expiryDate={method.expiryDate}
                  cardholderName={method.cardholderName}
                  isSelected={selectedMethod === method.id}
                  onSelect={handleSelectMethod}
                />
              ))}
              
              {!showAddCard && (
                <button className="add-card-button" onClick={handleAddCard}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Add New Card</span>
                </button>
              )}
              
              {showAddCard && (
                <PaymentForm onSubmit={handleFormSubmit} />
              )}
            </div>
          </div>

          <div className="checkout-actions">
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
            <button className="complete-button" onClick={handleComplete}>
              Complete Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutStep3Page;

