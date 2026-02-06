import React from 'react';
import './AddAddressButton.css';

interface AddAddressButtonProps {
  onClick: () => void;
}

const AddAddressButton: React.FC<AddAddressButtonProps> = ({ onClick }) => {
  return (
    <button className="add-address-button" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>Add New Address</span>
    </button>
  );
};

export default AddAddressButton;

