import React from 'react';
import './CartProduct.css';

interface CartProductProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image?: string;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="cart-product">
      <div className="product-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="image-placeholder">
            <span>Product</span>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price-info">
          {originalPrice && (
            <span className="original-price">{originalPrice}</span>
          )}
          <span className="current-price">{price}</span>
        </div>
      </div>
      <div className="product-actions">
        <div className="quantity-control">
          <button
            className="quantity-button"
            onClick={handleDecrease}
            disabled={quantity <= 1}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="quantity-value">{quantity}</span>
          <button
            className="quantity-button"
            onClick={handleIncrease}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <button className="remove-button" onClick={handleRemove}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

