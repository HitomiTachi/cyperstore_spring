import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CheckoutSteps from '../components/CheckoutSteps';
import AddressCard from '../components/AddressCard';
import AddAddressButton from '../components/AddAddressButton';
import Footer from '../components/Footer';
import './CheckoutStep1Page.css';

interface Address {
  id: string;
  title: string;
  tag: string;
  address: string;
  contact: string;
}

const CheckoutStep1Page: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState<string>('1');
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      title: '2118 Thornridge',
      tag: 'Home',
      address: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there's a tilt and height-adjusting mechanism that's built to outlast years of ups and downs.",
      contact: '(936) 361-0310',
    },
    {
      id: '2',
      title: 'Headoffice',
      tag: 'Office',
      address: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there's a tilt and height-adjusting mechanism that's built to outlast years of ups and downs.",
      contact: '(936) 361-0310',
    },
  ]);

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

  const handleSelectAddress = (id: string) => {
    setSelectedAddress(id);
  };

  const handleEditAddress = (id: string) => {
    // Handle edit address
    console.log('Edit address:', id);
  };

  const handleDeleteAddress = (id: string) => {
    if (addresses.length > 1) {
      setAddresses(addresses.filter(addr => addr.id !== id));
      if (selectedAddress === id) {
        setSelectedAddress(addresses.find(addr => addr.id !== id)?.id || '');
      }
    } else {
      alert('You must have at least one address');
    }
  };

  const handleAddAddress = () => {
    // Handle add new address
    console.log('Add new address');
  };

  const handleBack = () => {
    navigate('/cart');
  };

  const handleContinue = () => {
    if (selectedAddress) {
      navigate('/checkout/step2');
    } else {
      alert('Please select an address');
    }
  };

  return (
    <div className="checkout-step1-page">
      <Header />
      <CheckoutSteps currentStep={1} steps={steps} />

      <div className="checkout-content">
        <div className="checkout-container">
          <div className="checkout-section">
            <h2 className="section-title">Shipping Method</h2>
            
            <div className="addresses-section">
              <div className="addresses-list">
                {addresses.map(address => (
                  <AddressCard
                    key={address.id}
                    id={address.id}
                    title={address.title}
                    tag={address.tag}
                    address={address.address}
                    contact={address.contact}
                    isSelected={selectedAddress === address.id}
                    onSelect={handleSelectAddress}
                    onEdit={handleEditAddress}
                    onDelete={handleDeleteAddress}
                  />
                ))}
              </div>
              
              <AddAddressButton onClick={handleAddAddress} />
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

export default CheckoutStep1Page;

