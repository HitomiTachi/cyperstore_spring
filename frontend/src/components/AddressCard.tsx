import React from 'react';
import './AddressCard.css';

interface AddressCardProps {
  id: string;
  title: string;
  tag: string;
  address: string;
  contact: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  id,
  title,
  tag,
  address,
  contact,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={`address-card ${isSelected ? 'selected' : ''}`}>
      <div className="address-content">
        <div className="address-header">
          <div className="address-title-group">
            <label className="radio-container">
              <input
                type="radio"
                name="address"
                checked={isSelected}
                onChange={() => onSelect(id)}
              />
              <span className="radio-checkmark" />
            </label>
            <span className="address-title">{title}</span>
          </div>
          <span className="address-tag">{tag}</span>
        </div>
        <div className="address-info">
          <p className="address-text">{address}</p>
          <div className="address-contact">
            <span className="contact-label">Contact -</span>
            <span className="contact-value">{contact}</span>
          </div>
        </div>
      </div>
      <div className="address-actions">
        <button className="action-button" onClick={() => onEdit(id)} aria-label="Edit address">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="action-button" onClick={() => onDelete(id)} aria-label="Delete address">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddressCard;

